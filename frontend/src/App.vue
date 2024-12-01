<template>
  <notifications position="bottom right" />
  <router-view />
  <the-footer></the-footer>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { provide } from "vue";
import font500 from "@/assets/fonts/montserrat-v29-latin-500.woff2";
import font300 from "@/assets/fonts/montserrat-v29-latin-300.woff2";

useHead({
  link: [
    {
      rel: "preload",
      type: "font/woff2",
      href: font300,
      as: "font",
      crossorigin: true,
    },
    {
      rel: "preload",
      type: "font/woff2",
      href: font500,
      as: "font",
      crossorigin: true,
    },
  ],
});

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

provide("scrollToTop", scrollToTop);
</script>

<style>
.hoverScale {
  @apply transition-transform duration-300 ease-in-out hover:scale-105;
}

@keyframes appear {
  from {
    opacity: 0;
    scale: 0.5;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}

@keyframes appearFromTop {
  from {
    opacity: 0;
    transform: translatey(-100px);
  }
  to {
    opacity: 1;
    transform: translatey(0px);
  }
}

@keyframes appearFromSide {
  from {
    opacity: 0;
    transform: translatex(-100px);
  }
  to {
    opacity: 1;
    transform: translatex(0px);
  }
}

.appearFromTop {
  animation: appearFromTop linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}

.appearScroll {
  animation: appear linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}

.appearFromSide {
  animation: appear 0.1s ease-out forwards;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}

.appear {
  opacity: 1;
  transform: translateX(0);
}
</style>
