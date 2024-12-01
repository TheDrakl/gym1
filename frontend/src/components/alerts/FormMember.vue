<template>
  <teleport to="body">
    <div
      v-if="show"
      @click.self="closeModal"
      class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
    >
      <div
        class="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
        v-if="!isSending"
      >
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
              v-model="emailAddress"
            />
            <span v-if="errors.emailAddress" class="text-red-500 text-sm">
              {{ errors.emailAddress }}
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
              v-model="phoneNumber"
            />
            <span v-if="errors.phoneNumber" class="text-red-500 text-sm">
              {{ errors.phoneNumber }}
            </span>
          </div>
          <div class="flex justify-between">
            <label for="gym-select">Choose the location of the gym:</label>
            <select v-model="selectedGym" id="gym-select" class="bg-gray-50">
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
      <div class="text-center mt-20" v-if="isSending">
        <div role="status">
          <svg
            aria-hidden="true"
            class="inline w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { notify } from "@kyvg/vue3-notification";
import api from "@/axios";
import { onMounted, ref } from "vue";
import { validationForm } from "@/utils/validationForm";

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
const emailAddress = ref("");
const phoneNumber = ref("");
const receivedData = ref(props.receivedData);
const gyms = ref(null);
const selectedGym = ref("");
const isSending = ref(false);

const closeModal = () => {
  emits("close");
};

const validate = () => {
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    emailAddress: emailAddress.value,
    phoneNumber: phoneNumber.value,
  };

  // Run the validation function
  errors.value = validationForm(formData);

  // Check if there are any errors
  return Object.keys(errors.value).length === 0;
};

const sendEmail = async () => {
  try {
    isSending.value = true;
    const response = await api.post("send-email/", {
      first_name: firstName.value,
      last_name: lastName.value,
      email: email.value,
      phone_number: phone.value,
      selected_gym: selectedGym.value,
    });
    isSending.value = false;
    return response.data.message;
  } catch (error) {
    throw error;
  } finally {
    isSending.value = false;
  }
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

const fetchGyms = async () => {
  try {
    const response = await api.get("gyms/");
    gyms.value = response.data;
    selectedGym.value = gyms.value[0].name;
  } catch (error) {
    console.log("Error in fetching data", { error });
  }
};

onMounted(() => {
  fetchGyms();
});
</script>
