<template>
  <footer>
    <div
      class="bg-blackLight2 text-white p-8 md:pt-16 md:px-16 md:pb-4 font-roboto"
    >
      <section
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr,1.5fr,1.5fr,1fr] gap-12 md:gap-16 text-center md:text-start"
      >
        <!-- Gym info -->
        <div class="flex flex-col items-center md:items-start">
          <h2 class="text-4xl font-bold mb-4 text-lightGray">GymName</h2>
          <p class="text-lg font-inter font-light text-milkBlue">
            Your daily gym
          </p>
        </div>

        <!-- Links -->
        <div class="lg:flex-col items-center md:items-start hidden lg:flex">
          <h2 class="text-xl font-bold mb-4 text-lightGray">Services</h2>
          <ul class="space-y-3 text-lg text-milkBlue font-roboto">
            <li><a href="#" class="hover-underline-animation">Home</a></li>
            <li><a href="#" class="hover-underline-animation">About</a></li>
            <li><a href="#" class="hover-underline-animation">Contact</a></li>
            <li><a href="#" class="hover-underline-animation">Schedule</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="flex flex-col items-center md:items-start">
          <h2 class="text-xl font-bold mb-4 text-lightGray">Contact Us</h2>
          <ul class="space-y-4 text-lg text-milkBlue font-roboto">
            <li class="flex items-center justify-center md:justify-start">
              <font-awesome-icon
                :icon="['fa', 'phone']"
                class="text-milkBlue"
              />
              <span class="ml-3">+123 456 7890</span>
            </li>
            <li class="flex items-center justify-center md:justify-start">
              <font-awesome-icon
                :icon="['fa', 'envelope']"
                class="text-milkBlue"
              />
              <span class="ml-3">info@email.com</span>
            </li>
            <li class="flex items-center justify-center md:justify-start">
              <font-awesome-icon :icon="['fa', 'map']" class="text-milkBlue" />
              <span class="ml-3">Address 2, A1</span>
            </li>
          </ul>
        </div>

        <!-- Social Media Links -->
        <div class="flex flex-col">
          <div class="space-between space-x-8 text-3xl">
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="text-milkBlue cursor-pointer"
            />
            <font-awesome-icon
              :icon="['fab', 'facebook']"
              class="text-milkBlue cursor-pointer"
            />
            <font-awesome-icon
              :icon="['fab', 'twitter']"
              class="text-milkBlue cursor-pointer"
            />
            <font-awesome-icon
              :icon="['fab', 'youtube']"
              class="text-milkBlue cursor-pointer"
            />
          </div>
          <!-- Newsletter -->
          <div class="flex flex-col items-center mt-8 md:items-start">
            <h2 class="text-xl font-bold mb-4 text-lightGray text-center">
              Newsletter
            </h2>
            <form class="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email"
                class="p-2 w-[25vh] rounded bg-black text-white border border-lightGray placeholder-lightGray focus:outline-none focus:ring-1 focus:ring-orange-900"
              />
              <button
                class="p-2 rounded bg-orange-500 hover:bg-orange-600 text-white font-bold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <!-- All rights reserved by -->
      <div class="border-t-2 border-colorLine mt-16"></div>
      <div class="mt-8 mb-4 text-center">
        <p class="text-sm font-mono text-milkBlue">
          &copy; 2024 GymName. All rights reserved. Created by
          <span class="text-orange-500 hover:underline"
            ><a href="https://github.com/TheDrakl">Denys Melnyk</a></span
          >
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation:after {
  content: "";
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #ffffff;
  transition: transform 0.3s ease-out;
}

.hover-underline-animation:hover::after {
  transform: scaleX(1);
}

.hover-underline-animation.left::after {
  transform-origin: bottom right;
}

.hover-underline-animation.left:hover::after {
  transform-origin: bottom left;
}

.hover-underline-animation.center::after {
  transform-origin: bottom center;
}

.hover-underline-animation.center:hover::after {
  transform-origin: bottom center;
}

.hover-underline-animation.right::after {
  transform-origin: bottom left;
}

.hover-underline-animation.right:hover::after {
  transform-origin: bottom right;
}
</style>
