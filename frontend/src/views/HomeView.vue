<template>
  <div class="min-h-screen relative bg overflow-x-hidden" :style="{ backgroundImage: `url(${bg})`}">
    <!-- Navbar -->
    <navbar-white class="relative z-20"></navbar-white>
    <!-- Hero -->
    <hero-section></hero-section>
  </div>
  <!-- Trainers team -->
  <trainers-team></trainers-team>

  <!-- Why choose us? -->
  <why-us></why-us>

  <!-- Pricing plans -->

  <plans-section></plans-section>

  <!-- Our recent reviews -->
  <reviews-section></reviews-section>
</template>
<script setup>
// Sections
import ReviewsSection from "../components/sections/ReviewsSection.vue";
import TrainersTeam from "../components/sections/TrainersTeam.vue";
import HeroSection from "../components/sections/HeroSection.vue";
import WhyUs from "../components/sections/WhyChooseUsSection.vue";
import PlansSection from "../components/sections/PlansSection.vue";
import { useHead } from '@vueuse/head'
import bg from '@/assets/images/img5home.webp'

useHead({
  title: "Home - Denys",
  link: [
    {
      rel: 'preload',
      href: bg,
      as: 'image',
    },
  ],
  meta: [
    {
      name: "description",
      content:
        "Welcome to our homepage, offering the best products and services to help you succeed.",
    },
    {
      property: "og:title",
      content: "Home - Denys",
    },
    {
      property: "og:description",
      content: "Discover great deals and products on our homepage.",
    } 
  ],
});
</script>

<style scoped>
.bg {
  background-color: #f0f0f0; /* Placeholder color */
  background-size: cover;
  background-position: center;
  /* Optionally, set a small blurred version of the image */
  background-image: bg;
}
</style>
