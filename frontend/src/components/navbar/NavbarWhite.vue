<template>
  <header class="bg-transparent w-full z-10 top-0">
    <nav
      class="hidden lg:flex md:justify-between md:items-center md:w-[92%] md:mx-12"
    >
      <div>
        <router-link to="/">
          <img
            :src="logo"
            alt="logo"
            class="w-32 h-auto float-left px-2 py-2"
            width="128"
            height="128"
          />
        </router-link>
      </div>
      <div>
        <ul
          class="flex items-center gap-[4vw] font-montserrat text-lg text-white pl-24"
        >
          <li class="hover:text-gray-200">
            <router-link to="/">HOME</router-link>
          </li>
          <li class="hover:text-gray-200">
            <router-link to="/about">ABOUT</router-link>
          </li>
          <li class="hover:text-gray-200">
            <router-link to="/shop">SHOP</router-link>
          </li>
          <li class="hover:text-gray-200">
            <router-link to="/contact">CONTACT</router-link>
          </li>
        </ul>
      </div>
      <div>
        <base-button
          color="shadow-lg py-[20px] px-8"
          @click="navigateToSection('plans')"
        >
          <span class="font-neue text-[1.35rem]">Become a member</span>
        </base-button>
      </div>
    </nav>

    <div id="hamburger" @click="toggleHamburger">
      <font-awesome-icon
        :icon="['fas', 'bars']"
        class="lg:hidden w-12 h-auto text-white float-right m-4"
      />
    </div>

    <!-- Mobile menu -->
    <div
      v-if="isToggled"
      class="fixed top-0 left-0 w-full h-full bg-gray-800 text-gray-300 flex flex-col items-center justify-center z-20"
    >
      <ul
        class="gap-16 flex flex-col items-center font-montserrat text-xl text-gray-300 overflow-hidden"
      >
        <li class="hover:text-gray-100">
          <router-link to="/" @click="toggleHamburger">HOME</router-link>
        </li>
        <li class="hover:text-gray-100">
          <router-link to="/about" @click="toggleHamburger">ABOUT</router-link>
        </li>
        <li class="hover:text-gray-100">
          <router-link to="/shop" @click="toggleHamburger">SHOP</router-link>
        </li>
        <li class="hover:text-gray-100">
          <router-link to="/contact" @click="toggleHamburger"
            >CONTACT</router-link
          >
        </li>
      </ul>
      <div
        id="hamburger"
        @click="toggleHamburger"
        class="absolute top-6 right-6 z-30"
      >
        <font-awesome-icon :icon="['fas', 'x']" class="w-8 h-8 text-white" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import logo from "@/assets/images/logo.webp";

const router = useRouter();

const isToggled = ref(false);

const toggleHamburger = () => {
  isToggled.value = !isToggled.value;
};

const navigateToSection = (sectionId) => {
  const currentRoute = router.currentRoute.value.name;
  if (currentRoute !== "Home") {
    router.push({ name: "Home" }).then(() => {
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    });
  } else {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>

<style scoped>
.router-link-active {
  color: #df762b !important;
}
</style>
