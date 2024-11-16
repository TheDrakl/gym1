<template>
  <section class="bg-black min-h-[135vh] flex flex-col items-center">
    <navbar-white class="relative z-20"></navbar-white>
    <div class="container mx-auto flex flex-col text-center mt-24">
      <div
        class="bg-gray-800 p-10 rounded-lg shadow-lg max-w-md mx-auto"
        v-if="!isSubmitted && !errorSending && !isSending"
      >
        <h1 class="text-3xl mb-6 text-white font-bold">Contact Us Today</h1>
        <form @submit.prevent="handleSubmitForm" class="space-y-6">
          <div>
            <label for="firstName" class="sr-only">First Name</label>
            <input
              id="firstName"
              type="text"
              placeholder="Your First Name"
              class="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
              v-model="firstName"
              autocomplete="given-name"
            />
            <span
              v-if="errors.firstName"
              class="text-red-500 text-sm mt-2 justify-start flex"
            >
              {{ errors.firstName }}
            </span>
          </div>
          <div>
            <label for="lastName" class="sr-only">Last Name</label>
            <input
              id="lastName"
              type="text"
              placeholder="Your Last Name"
              class="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
              v-model="lastName"
              autocomplete="family-name"
            />
            <span
              v-if="errors.lastName"
              class="text-red-500 text-sm mt-2 flex justify-start"
            >
              {{ errors.lastName }}
            </span>
          </div>
          <div>
            <label for="phone" class="sr-only">Phone Number</label>
            <input
              id="phone"
              type="text"
              placeholder="Phone Number"
              class="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
              v-model="phoneNumber"
              autocomplete="tel"
            />
            <span
              v-if="errors.phoneNumber"
              class="text-red-500 text-sm mt-2 flex justify-start"
            >
              {{ errors.phoneNumber }}
            </span>
          </div>
          <div>
            <label for="email" class="sr-only">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              class="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
              v-model="emailAddress"
              autocomplete="email"
            />
            <span
              v-if="errors.emailAddress"
              class="text-red-500 text-sm mt-2 flex justify-start"
            >
              {{ errors.emailAddress }}
            </span>
          </div>
          <div class="text-left">
            <label class="text-white font-semibold" for="membership"
              >Are you currently a member of our gym?</label
            ><br />
            <input type="text" class="hidden" id="membership" />
            <input
              type="radio"
              id="yes"
              name="membership"
              value="true"
              class="mr-2"
              v-model="isMember"
            />
            <label for="yes" class="text-white">Yes</label>
            <input
              type="radio"
              id="no"
              name="membership"
              value="false"
              class="mr-2 ml-4"
              v-model="isMember"
            />
            <label for="no" class="text-white">No</label>
            <span
              v-if="errors.isMember"
              class="text-red-500 text-sm mt-2 flex justify-start"
            >
              {{ errors.isMember }}
            </span>
          </div>
          <div>
            <label for="reason" class="text-white font-semibold"
              >Please select a reason for contacting us:</label
            >
            <select
              id="reason"
              class="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
              v-model="reasonForContact"
            >
              <option value="Reason1">Reason 1</option>
              <option value="Reason2">Reason 2</option>
              <option value="Reason3">Reason 3</option>
              <option value="Reason4">Reason 4</option>
              <option value="Reason5">Reason 5</option>
            </select>
          </div>
          <div>
            <label for="message" class="sr-only">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              class="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-500"
              rows="4"
              v-model="message"
            ></textarea>
            <span
              v-if="errors.message"
              class="text-red-500 text-sm mt-2 flex justify-start"
            >
              {{ errors.message }}
            </span>
          </div>
          <div>
            <button
              class="w-full bg-blueButton text-white py-3 rounded hover:bg-blue-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div class="text-center mt-20" v-if="isSending && !errorSending">
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

    <div
      v-if="isSubmitted && !errorSending"
      class="text-white flex flex-col text-center mt-24 space-y-4"
    >
      <h1 class="text-3xl">Thank You for Your Submission!</h1>
      <h2 class="text-2xl">
        Your message was successfully sent. You will receive a reply at your
        email address.
      </h2>
    </div>
    <div v-if="errorSending" class="flex flex-col text-center mt-24 space-y-4">
      <h1 class="text-3xl text-red-500">
        An error occured, please check your data and try again later!
      </h1>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import api from "@/axios";
import { useHead } from "@vueuse/head";
import { validationForm } from "@/utils/validationForm.js";

const firstName = ref("");
const lastName = ref("");
const phoneNumber = ref("");
const emailAddress = ref("");
const isMember = ref(null);
const reasonForContact = ref("Reason1");
const message = ref("");
const errors = ref({});
const isSubmitted = ref(false);
const errorSending = ref(false);
const isSending = ref(false);

const validate = () => {
  const formData = {
    firstName: firstName.value,
    lastName: lastName.value,
    emailAddress: emailAddress.value,
    phoneNumber: phoneNumber.value,
  };

  // Run the validation function
  errors.value = validationForm(formData);
  console.log(errors.value);

  // Check if there are any errors
  return Object.keys(errors.value).length === 0;
};

const sendMail = async () => {
  try {
    isSending.value = true;
    const response = await api.post("send-message/", {
      first_name: firstName.value,
      last_name: lastName.value,
      email: emailAddress.value,
      phone_number: phoneNumber.value,
      currently_member: isMember.value,
      reason_contacting: reasonForContact.value,
      message: message.value,
    });
    isSending.value = false;
    return response.data.message;
  } catch (error) {
    throw error;
  } finally {
    isSending.value = false
  }
};

const handleSubmitForm = async () => {
  if (validate()) {
    errorSending.value = false;
    isSubmitted.value = false;
    try {
      isSubmitted.value = false;
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      const message = await sendMail();
      console.log(message);
      isSubmitted.value = true;
    } catch (error) {
      errorSending.value = true;
      isSubmitted.value = false;
    }
  }
};

useHead({
  title: "Contact Us - Denys",
  meta: [
    {
      name: "description",
      content:
        "Get in touch with us for any inquiries or support. We are here to help.",
    },
    {
      property: "og:title",
      content: "Contact Us - Denys",
    },
    {
      property: "og:description",
      content: "Reach out to us for more information or assistance.",
    },
  ],
});
</script>
