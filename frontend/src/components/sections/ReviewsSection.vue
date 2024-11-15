<template>
  <section
    id="reviews"
    class="text-white bg-black min-h-[120vh] pb-24 lg:pb-12 xl:pb-0"
    v-if="!hasError && !isLoading"
  >
    <div>
      <h2
        class="text-5xl font-roboto font-normal flex-col flex text-center mb-24 pt-32"
      >
        Recent reviews from our customers
      </h2>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-14 items-stretch text-center mx-20 md:mx-16 xl:mx-4 2xl:mx-20 text-xl md:text-2xl "
    >
      <div
        class="bg-blackLight p-6 rounded-lg flex flex-col justify-between appearFromSide hoverScale"
        v-for="review in reviews"
      >
        <img
          :src="review.image"
          class="w-32 h-32 rounded-full mx-auto mb-4"
          alt="review-image"
          loading="lazy"
          decoding="async"
          width="450"
          height="550"
        />
        <p class="text-yellow-400">
          {{ "★".repeat(Math.round(review.stars))
          }}{{ "☆".repeat(5 - Math.floor(review.stars)) }}
        </p>
        <h3 class="text-[0.9rem] font-montserrat flex-grow min-h-[200px] my-2">
          {{ review.description }}
        </h3>
        <p class="text-gray-300">Written by {{ review.written_by }}</p>
      </div>
    </div>
  </section>
  <section
    id="reviews"
    class="text-white bg-black min-h-[120vh] pb-24 md:pb-0"
    v-if="hasError || isLoading"
  >
    <div>
      <h2
        class="text-5xl font-roboto font-normal flex-col flex text-center mb-24 pt-32"
      >
        Recent reviews from our customers
      </h2>
      <h1 class="text-4xl mb-4 text-red-500 text-center" v-if="hasError">
        An error occured, please try again later
      </h1>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-14 items-stretch text-center mx-8 md:mx-24"
    >
      <div
        class="bg-blackLight p-6 rounded-lg flex flex-col justify-between appearFromSide hoverScale"
        v-for="n in 4"
      >
        <div
          class="w-32 h-32 rounded-full mx-auto mb-4 bg-gray-500"
          alt="Img"
        ></div>
        <!--Stars-->
        <div class="h-4 bg-gray-600 w-1/2 mx-auto mb-4 rounded"></div>
        <h3 class="text-md font-montserrat flex-grow"></h3>
        <!-- Placeholder for the review description text -->
        <div class="h-4 bg-gray-600 w-full mb-2 rounded"></div>
        <div class="h-4 bg-gray-600 w-5/6 mb-2 rounded"></div>
        <div class="h-4 bg-gray-600 w-4/4 mb-2 rounded"></div>
        <div class="h-4 bg-gray-600 w-3/6 mb-2 rounded"></div>
        <div class="h-4 bg-gray-600 w-4/4 mb-2 rounded"></div>

        <!-- Placeholder for the author text -->
        <div class="h-4 mt-4 bg-gray-600 w-1/3 mx-auto rounded"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onErrorCaptured, onMounted } from "vue";
import api from "@/axios";

const reviews = ref([]);
const isLoading = ref(true);
const hasError = ref(false);

const fetchReviews = async () => {
  try {
    const response = await api.get("reviews/");
    reviews.value = response.data.results;
  } catch (error) {
    console.log(error);
    hasError.value = true;
  } finally {
    isLoading.value = false;
  }
};

onErrorCaptured((error) => {
  console.error("Error captured in reviews section:", error);
  hasError.value = true;
  return false;
});

onMounted(() => {
  fetchReviews();
});
</script>

