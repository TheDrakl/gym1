<template>
  <div class="bg-black min-h-screen">
    <navbar-white></navbar-white>
    <notFound></notFound>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import { useHead } from "@vueuse/head";

const notFound = defineAsyncComponent(() =>
  import("@/components/errors/NotFound.vue")
);

useHead({
  title: "Page Not Found - Denys",
  meta: [
    { name: "robots", content: "noindex, nofollow" },
    { property: "og:title", content: "Page Not Found - Denys" },
    {
      property: "og:description",
      content:
        "The page you were looking for could not be found. Please check the URL or go back to the homepage.",
    },
    { property: "og:type", content: "website" },
  ],
});
</script>
