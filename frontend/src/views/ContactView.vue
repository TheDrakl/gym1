<template>
  <section class="bg-black min-h-[135vh] flex flex-col items-center">
    <navbar-white class="relative z-20"></navbar-white>
    <div class="container mx-auto flex flex-col text-center mt-24">
      <div
        class="bg-gray-800 p-10 rounded-lg shadow-lg max-w-md mx-auto"
        v-if="!isSubmitted && !errorSending"
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
            <input type="text" class="hidden" id="membership">
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
import { useHead } from '@vueuse/head'

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

const validate = () => {
  errors.value = {};
  const nameMinLength = 2;
  const emailMinLength = 5;
  const phoneMinLength = 7;

  if (!firstName.value) {
    errors.value.firstName = "First name is required.";
  } else if (isNumeric(firstName.value)) {
    errors.value.firstName = "First name should not be numeric.";
  } else if (firstName.value.length < nameMinLength) {
    errors.value.firstName = "Enter a valid first name.";
  }

  if (!lastName.value) {
    errors.value.lastName = "Last name is required.";
  } else if (isNumeric(lastName.value)) {
    errors.value.lastName = "Last name should not be numeric.";
  } else if (lastName.value.length < nameMinLength) {
    errors.value.lastName = "Enter a valid last name.";
  }

  if (!message.value) {
    errors.value.message = "Message must not be empty.";
  }

  if (!emailAddress.value) {
    errors.value.emailAddress = "Email is required.";
  } else if (!isValidEmail(emailAddress.value)) {
    errors.value.emailAddress = "Email must be valid.";
  } else if (emailAddress.value.length < emailMinLength) {
    errors.value.emailAddress = "Enter a valid email.";
  }

  if (!phoneNumber.value) {
    errors.value.phoneNumber = "Phone number is required.";
  } else if (!isPhoneNumberValid(phoneNumber.value)) {
    errors.value.phoneNumber =
      "Phone number must contain only numbers and allowed symbols.";
  } else if (phoneNumber.value.length < phoneMinLength) {
    errors.value.phoneNumber = "Enter a valid phone number.";
  }

  if (!isMember.value) {
    errors.value.isMember = "You must choose one option.";
  }

  return Object.keys(errors.value).length === 0;
};

const sendMail = async () => {
  try {
    const response = await api.post("send-message/", {
      first_name: firstName.value,
      last_name: lastName.value,
      email: emailAddress.value,
      phone_number: phoneNumber.value,
      curretnly_member: isMember.value,
      reason_contacting: reasonForContact.value,
      message: message.value,
    });
    return response.data.message;
  } catch (error) {
    throw error;
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
      isSubmitted.value = true;
    } catch (error) {
      errorSending.value = true;
      isSubmitted.value = false;
    }
  }
};

useHead({
  title: 'Contact Us | Denys',
  meta: [
    {
      name: 'description',
      content: 'Get in touch with us for any inquiries or support. We are here to help.'
    },
    {
      property: 'og:title',
      content: 'Contact Us - Denys'
    },
    {
      property: 'og:description',
      content: 'Reach out to us for more information or assistance.'
    },
  ]
});
</script>
