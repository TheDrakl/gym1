<template>
  <div class="line h-[0.5px] bg-gray-800"></div>
  <footer>
    <div class="bg-blackLight text-white p-8 md:pt-16 md:px-16 md:pb-4">
      <section
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 text-center md:text-start"
      >
        <!-- Gym info -->
        <div class="flex flex-col items-center md:items-start">
          <h2 class="text-3xl font-bold mb-4 text-white">GymName</h2>
          <p class="text-base font-roboto font-light text-milkBlue">
            At GymName, we're dedicated to helping you reach your fitness goals
            with the support of experienced trainers and state-of-the-art
            equipment. Join our community today!
          </p>
        </div>

        <!-- Links -->
        <div class="flex flex-col items-center md:items-start">
          <h2 class="text-3xl font-bold mb-4 text-white">Quick Links</h2>
          <ul class="space-y-3 text-lg text-milkBlue font-roboto">
            <li><a href="#" class="hover-underline-animation">Home</a></li>
            <li><a href="#" class="hover-underline-animation">About</a></li>
            <li><a href="#" class="hover-underline-animation">Contact</a></li>
            <li><a href="#" class="hover-underline-animation">Schedule</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="flex flex-col items-center md:items-start">
          <h2 class="text-3xl font-bold mb-4 text-white">Contact Us</h2>
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
      </section>

      <!-- All rights reserved by -->
      <div class="mt-16 text-center">
        <p class="text-sm font-mono text-milkBlue">
          &copy; 2024 GymName. All rights reserved. Created by
          <span class="text-orange-500">Denys Melnyk</span>
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
