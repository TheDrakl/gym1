<template>
  <section id="plans" class="text-white bg-black min-h-screen">
    <form-member
      v-if="openBaseMember"
      :show="openBaseMember"
      :receivedData="dataToSend"
      @close="closeBaseMember"
    ></form-member>
    <div>
      <h2
        class="text-5xl font-roboto font-normal flex-col flex text-center mb-4 pt-16"
      >
        Join our family, buy a membership
      </h2>
      <h1 class="text-4xl mb-4 text-red-500 text-center mt-4" v-if="hasError">
        An error occured, please try again later
      </h1>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 text-center gap-8 mx-auto w-[90%] mt-20"
    >
      <!-- Plans -->
      <div
        class="flex flex-col bg-blackBg rounded-xl p-8 text-white w-3/4 md:w-2/3 lg:w-80 mx-auto shadow-lg h-[500px] appearFromSide hoverScale"
        v-for="plan in plans"
        v-if="!isLoading && !hasError"
      >
        <h3 class="text-center py-6 text-2xl font-semibold text-gray-300">
          {{ plan.title }}
        </h3>
        <h2 class="text-center text-5xl font-bold mb-8">£{{ plan.price }}</h2>
        <ul class="text-center space-y-6 mb-10 list-none">
          <li
            class="flex items-center justify-center space-x-2"
            v-for="feature in plan.features"
          >
            <span>•</span>
            <span>{{ feature.name }}</span>
          </li>
        </ul>

        <button
          @click="openBaseMemberMethod(plan.id, '£' + plan.price)"
          class="bg-white text-black rounded-lg w-full py-4 flex items-center justify-center text-lg font-semibold transition duration-300 hover:bg-gray-200 mt-auto"
        >
          Join Now
        </button>
      </div>
      <!-- Skelet for loading-->
      <div
        class="flex flex-col bg-blackBg rounded-xl p-8 text-white w-full md:w-80 mx-auto shadow-lg h-[500px] appearFromSide hoverScale"
        v-for="n in 3"
        v-if="isLoading || hasError"
      >
        <h3
          class="text-center py-6 text-2xl font-semibold text-gray-300 animate-pulse"
        >
          <div class="h-6 bg-gray-600 w-6/6 mb-2 rounded animate-pulse"></div>
        </h3>
        <h2 class="text-center text-5xl font-bold mb-8 animate-pulse">
          <div class="h-8 bg-gray-600 w-1/2 mx-auto mb-4 rounded animate-pulse"></div>
        </h2>
        <ul class="text-center space-y-6 mb-10 list-none animate-pulse">
          <li class="flex items-center justify-center space-x-2" v-for="n in 5">
            <div class="h-4 bg-gray-600 w-4/6 mb-2 rounded animate-pulse"></div>
          </li>
        </ul>

        <button
          :class="{
            'bg-gray-600 opacity-50 cursor-default': isLoading,
            'bg-white text-black': !isLoading,
          }"
          :style="{ pointerEvents: isLoading ? 'none' : 'auto' }"
          class="rounded-lg w-full py-4 flex items-center justify-center text-lg font-semibold transition duration-300 hover:bg-gray-200 mt-auto animate-pulse"
        >
          <div class="h-4 w-1/3 bg-gray-400 animate-pulse rounded"></div>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from "vue";
import api from "@/axios";
import { set } from "lodash";
const openBaseMember = ref(false);
const emit = defineEmits();
const dataToSend = ref({});
const plans = ref([]);
const isLoading = ref(true);
const hasError = ref(false);

const formMember = defineAsyncComponent(() =>
  import("@/components/alerts/FormMember.vue")
);

const openBaseMemberMethod = (planNumber, price) => {
  openBaseMember.value = !openBaseMember.value;
  dataToSend.value = {
    planNumber,
    price,
  };
  emit("sendData", dataToSend);
};
const closeBaseMember = () => {
  openBaseMember.value = false;
};

const fetchPlans = async () => {
  try {
    const response = await api.get("plans/");
    plans.value = response.data.results;
  } catch (error) {
    console.log("An error occured", error);
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
};

onMounted(() => {
  fetchPlans();
});
</script>
