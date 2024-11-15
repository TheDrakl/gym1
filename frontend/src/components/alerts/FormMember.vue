<template>
  <teleport to="body">
    <div
      v-if="show"
      @click.self="closeModal"
      
      class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
    >
      <div class="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <font-awesome-icon
          :icon="['fas', 'xmark']"
          class="absolute top-2 right-2 w-8 h-8 text-black cursor-pointer"
          @click="closeModal"
        />
        <h2 class="text-2xl mb-4 text-center font-montserrat">
          Purchasing a membership!
        </h2>
        <form @submit.prevent="handleSubmit" id="formMember">
          <div class="mb-4">
            <label
              for="first-name"
              class="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <input
              id="first-name"
              type="text"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm font-montserrat h-8"
              v-model="firstName"
            />
            <span v-if="errors.firstName" class="text-red-500 text-sm">
              {{ errors.firstName }}
            </span>
          </div>
          <div class="mb-4">
            <label
              for="last-name"
              class="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <input
              id="last-name"
              type="text"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm font-montserrat h-8"
              v-model="lastName"
            />
            <span v-if="errors.lastName" class="text-red-500 text-sm">
              {{ errors.lastName }}
            </span>
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="text"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm font-montserrat h-8"
              v-model="email"
            />
            <span v-if="errors.email" class="text-red-500 text-sm">
              {{ errors.email }}
            </span>
          </div>
          <div class="mb-4">
            <label for="phone" class="block text-sm font-medium text-gray-700">
              Phone number
            </label>
            <input
              id="phone"
              type="text"
              class="mt-1 block w-full border-gray-300 rounded-md shadow-sm font-montserrat h-8"
              v-model="phone"
            />
            <span v-if="errors.phone" class="text-red-500 text-sm">
              {{ errors.phone }}
            </span>
          </div>
          <div class="flex justify-between">
            <label for="options">Choose the location of the gym:</label>
            <select v-model="selectedGym" class="bg-gray-50">
              <option :value="gym.name" v-for="gym in gyms" :key="gym.id">
                {{ gym.name }}
              </option>
            </select>
          </div>
          <div class="flex justify-between items-center mt-10">
            <h3 class="font-roboto text-xl">Price: {{ receivedData.price }}</h3>
            <div class="flex">
              <button
                @click="closeModal"
                type="button"
                class="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Close
              </button>
              <button
                type="submit"
                class="px-4 py-2 bg-green-500 text-white rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { notify } from "@kyvg/vue3-notification";
import api from "@/axios";
import { onMounted, ref } from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  receivedData: {
    type: Object,
    default: "",
  },
});
const emits = defineEmits(["close"]);

const errors = ref({});
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const phone = ref("");
const receivedData = ref(props.receivedData);
const gyms = ref(null);
const selectedGym = ref("");

const isNumeric = (str) => {
  return !isNaN(str) && !isNaN(parseFloat(str));
};

const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const isPhoneNumberValid = (phone) => {
  return /^[0-9\s\-()]+$/.test(phone);
};

const closeModal = () => {
  emits("close");
};

const validate = () => {
  errors.value = {};
  const nameMinLength = 2;
  const emailMinLength = 5;
  const phoneMinLength = 7;

  if (!firstName.value) {
    errors.value.firstName = "First name is required.";
  } else if (isNumeric(firstName.value)) {
    errors.value.firstName = "First name should not be numeric.";
  } else if (firstName.value.length <= nameMinLength) {
    errors.value.firstName = "Enter a valid first name.";
  }

  if (!lastName.value) {
    errors.value.lastName = "Last name is required.";
  } else if (isNumeric(lastName.value)) {
    errors.value.lastName = "Last name should not be numeric.";
  } else if (lastName.value.length <= nameMinLength) {
    errors.value.lastName = "Enter a valid last name.";
  }

  if (!email.value) {
    errors.value.email = "Email is required.";
  } else if (!isValidEmail(email.value)) {
    errors.value.email = "Email must be valid.";
  } else if (email.value.length <= emailMinLength) {
    errors.value.email = "Enter a valid email.";
  }

  if (!phone.value) {
    errors.value.phone = "Phone number is required.";
  } else if (!isPhoneNumberValid(phone.value)) {
    errors.value.phone =
      "Phone number must contain only numbers and allowed symbols.";
  } else if (phone.value.length <= phoneMinLength) {
    errors.value.phone = "Enter a valid phone number.";
  }

  return Object.keys(errors.value).length === 0;
};

const handleSubmit = async () => {
  if (validate()) {
    try {
      const message = await sendEmail();
      notify({
        title: "Success!",
        text: message || "Email sent successfully!",
        type: "success",
        duration: 10000,
      });
      closeModal();
    } catch (error) {
      if (error.response && error.response.status === 429) {
        notify({
          title: "Error!",
          text: "Too many requests! Try again later.",
          type: "error",
          duration: 10000,
        });
      } else {
        notify({
          title: "Error!",
          text: error.message || "An error occurred while sending the email.",
          type: "error",
          duration: 10000,
        });
      }
    }
  }
};

const sendEmail = async () => {
  try {
    const response = await api.post("send-email/", {
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      phone_number: phone.value,
      selected_gym: selectedGym.value,
    });
    return response.data.message;
  } catch (error) {
    throw error;
  }
};

const fetchGyms = async () => {
  try {
    const response = await api.get("gyms/");
    gyms.value = response.data;
    selectedGym.value = gyms.value[0].name
  } catch (error) {
    console.log("Error in fetching data", { error });
  }
};

onMounted(() => {
  fetchGyms();
});
</script>
