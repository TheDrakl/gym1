<template>
  <header class="bg-transparent w-full z-10 top-0">
    <nav
      class="sm:hidden lg:flex md:justify-between md:items-center md:w-[92%] md:mx-12"
    >
      <div>
        <router-link to="/"
          ><img
            src="@/assets/images/logo.webp"
            alt="logo"
            class="w-32 h-auto float-left px-2 py-2"
        /></router-link>
      </div>
      <div class="">
        <ul
          class="flex flex-cols items-center gap-[4vw] font-montserrat text-lg text-white pl-24"
        >
          <li class="hover:text-gray-200">
            <router-link to="/"><a href="#">HOME</a></router-link>
          </li>
          <li class="hover:text-gray-200">
            <router-link to="/about">ABOUT</router-link>
          </li>
          <li class="hover:text-gray-200">
            <router-link class="pl 0" to="/shop">SHOP</router-link>
          </li>
          <li class="hover:text-gray-200">
            <router-link to="/contact">CONTACT</router-link>
          </li>
        </ul>
      </div>
      <div>
        <a href="#plans">
          <base-button color="shadow-lg py-[20px] px-8 ">
            <span class="font-neue text-lg md:text-[1.35rem]"
              >Become a member</span
            >
          </base-button>
        </a>
      </div>
    </nav>
    <div
      id="hamburger"
      @click="toggleHamburger"
      class="md:hidden lg:hidden xl:hidden absolute top-4 right-4 w-8 h-auto text-white"
    >
      <font-awesome-icon :icon="['fas', 'bars']" class="text-[3rem]" />
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
          <router-link to="/" class="{ 'isToggled' }" @click="toggleHamburger"
            >HOME</router-link
          >
        </li>
        <li class="hover:text-gray-100">
          <router-link to="/about">ABOUT</router-link>
        </li>
        <li class="hover:text-gray-100">
          <router-link to="/shop">SHOP</router-link>
        </li>
        <li class="hover:text-gray-100">
          <router-link to="/contact">CONTACT</router-link>
        </li>
      </ul>
      <div>
        <div
          id="hamburger"
          @click="toggleHamburger"
          class="absolute top-6 right-6 z-30"
        >
          <font-awesome-icon :icon="['fas', 'x']" class="w-8 h-8 text-white" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

const isToggled = ref(false);

const toggleHamburger = () => {
  isToggled.value = !isToggled.value;
};
</script>

<style scoped>
.router-link-active {
  color: #df762b !important;
}
</style>
