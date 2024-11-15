<template>
  <div class="text-white text-center font-montserrat">
    <h1 class="text-5xl mt-20">404</h1>
    <h2 class="text-4xl mt-6">Page not found</h2>
    <h3 class="text-2xl mt-12">
      Oops! That page can't be found. <br />It looks like nothing was found at
      this location.
    </h3>
    <button
      class="mt-8 p-4 bg-orange-500 hover:bg-orange-600 rounded-lg text-lg"
      @click="goToShop"
    >
      Get back to the Home Page
    </button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter()

const goToShop = () => {
    router.push('/')
};
</script>
