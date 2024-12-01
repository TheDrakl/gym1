<template>
  <section
    class="about-page font-montserrat text-gray-900 bg-black min-h-[100vh]"
  >
    <navbar-white></navbar-white>

    <!-- Mission Section -->
    <div class="py-16 bg-black text-white text-center">
      <h2 class="text-5xl font-bold mb-6">Our Mission</h2>
      <p class="text-lg max-w-2xl mx-auto">
        At GymName, we’re committed to providing a supportive, empowering
        environment to help you achieve your fitness goals. We believe in
        building a community where everyone feels encouraged and inspired to
        improve their health and well-being.
      </p>
    </div>

    <!-- Meet Our Trainers Section -->
    <div class="py-16 bg-black">
      <h2 class="text-5xl font-bold text-center text-white mb-10">
        Meet Our Trainers
      </h2>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-20 md:max-w-[90%] lg:max-w-[70%] mx-auto px-4 md:px-0"
      >
        <!-- Trainer 1 -->
        <div
          class="trainer-card bg-blackBg shadow-md rounded-lg p-4 text-center text-white"
        >
          <img
            :src="trainer1"
            class="rounded-lg w-full h-[40rem] md:h-80 object-cover mb-4"
            alt="Esther Howard"
            loading="lazy"
            decoding="async"
          />
          <h3 class="text-3xl font-semibold">Esther Howard</h3>
          <p class="mt-2">
            Specializes in strength training and HIIT. With over 10 years of
            experience, Esther helps clients reach their goals efficiently and
            sustainably.
          </p>
        </div>

        <!-- Trainer 2 -->
        <div
          class="trainer-card bg-blackBg shadow-md rounded-lg p-4 text-center text-white"
        >
          <img
            :src="trainer2"
            class="rounded-lg w-full h-[40rem] md:h-80 object-cover mb-4"
            alt="Leslie Alexander"
            loading="lazy"
            decoding="async"
          />
          <h3 class="text-3xl font-semibold">Leslie Alexander</h3>
          <p class="mt-2">
            An expert in functional movement and mobility. Leslie focuses on
            improving flexibility and strength to enhance everyday life.
          </p>
        </div>

        <!-- Trainer 3 -->
        <div
          class="trainer-card bg-blackBg shadow-md rounded-lg p-4 text-center text-white"
        >
          <img
            :src="trainer3"
            class="rounded-lg w-full h-[40rem] md:h-80 object-cover mb-4"
            alt="Jacob Jones"
            loading="lazy"
            decoding="async"
          />
          <h3 class="text-3xl font-semibold">Jacob Jones</h3>
          <p class="mt-2">
            A certified personal trainer specializing in endurance and cardio.
            Jacob is dedicated to pushing clients to reach new personal bests.
          </p>
        </div>
      </div>
    </div>

    <!-- Gym History Section -->
    <div class="gym-history py-16 bg-blackBg text-center text-white">
      <h2 class="text-5xl font-bold mb-6">Our Story</h2>
      <p class="text-lg max-w-3xl mx-auto mb-8">
        Since our founding in 2019, GymName has grown from a small studio to a
        full-scale fitness center. We pride ourselves on our commitment to
        fostering a welcoming space where everyone, from beginners to seasoned
        athletes, can achieve their best.
      </p>
      <ul class="history-timeline max-w-3xl mx-auto text-left">
        <li class="mb-4"><strong>2019</strong> - Opened our first location.</li>
        <li class="mb-4">
          <strong>2021</strong> - Reached 1,000 members and expanded facilities.
        </li>
        <li class="mb-4">
          <strong>2022</strong> - Introduced specialized training programs.
        </li>
      </ul>
    </div>

    <!-- Testimonials Section -->
    <div class="testimonials py-20 pb-40 bg-blackBg text-white text-center">
      <h2 class="text-5xl font-bold mb-6">What Our Members Say</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 md:px-0"
      >
        <div class="testimonial bg-gray-800 p-6 rounded-lg shadow-md">
          <p class="text-lg">
            “The trainers at [GymName] are exceptional! I've seen so much
            improvement in my strength and confidence.”
          </p>
          <h4 class="text-xl font-semibold mt-4">- Sarah J.</h4>
        </div>
        <div class="testimonial bg-gray-800 p-6 rounded-lg shadow-md">
          <p class="text-lg">
            “A fantastic facility with a great community vibe. I've never felt
            more motivated to stay fit!”
          </p>
          <h4 class="text-xl font-semibold mt-4">- Michael T.</h4>
        </div>
        <div class="testimonial bg-gray-800 p-6 rounded-lg shadow-md">
          <p class="text-lg">
            “The personalized attention and variety of classes offered keep me
            coming back every week.”
          </p>
          <h4 class="text-xl font-semibold mt-4">- Lisa K.</h4>
        </div>
      </div>
    </div>

    <!-- Facilities Section -->
    <div class="facilities py-16 bg-black text-center md:h-[120vh] lg:h-[90vh]">
      <h2 class="text-5xl font-bold mb-10 text-white">Our Facilities</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 md:px-0 text-white"
      >
        <div class="facility bg-blackBg shadow-md rounded-lg p-6">
          <img
            :src="gym1"
            class="w-full h-48 object-cover rounded-lg mb-4"
            alt="State-of-the-art Equipment"
            loading="lazy"
            decoding="async"
          />
          <h3 class="text-2xl font-semibold">State-of-the-art Equipment</h3>
          <p class="mt-2">
            From free weights to the latest machines, our gym is equipped with
            everything you need for a comprehensive workout.
          </p>
        </div>
        <div class="facility bg-blackBg shadow-md rounded-lg p-6">
          <img
            :src="gym2"
            class="w-full h-48 object-cover rounded-lg mb-4"
            alt="Locker Rooms and Showers"
            loading="lazy"
            decoding="async"
          />
          <h3 class="text-2xl font-semibold">Locker Rooms & Showers</h3>
          <p class="mt-2">
            Clean and spacious locker rooms with showers to refresh after your
            workout.
          </p>
        </div>
        <div class="facility bg-blackBg shadow-md rounded-lg p-6">
          <img
            :src="gym3"
            class="w-full h-48 object-cover rounded-lg mb-4"
            alt="Nutrition Bar"
            loading="lazy"
            decoding="async"
          />
          <h3 class="text-2xl font-semibold">Nutrition Bar</h3>
          <p class="mt-2">
            Refuel with healthy snacks and smoothies tailored for pre- and
            post-workout needs.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import trainer1 from "@/assets/images/img5.webp";
import trainer2 from "@/assets/images/img5.webp";
import trainer3 from "@/assets/images/img5.webp";
import gym1 from "@/assets/images/gym-1.webp";
import gym2 from "@/assets/images/gym-2.webp";
import gym3 from "@/assets/images/gym-3.webp";

useHead({
  title: "About Us - Denys",
  meta: [
    {
      name: "description",
      content:
        "Learn more about our company, our mission, and the team behind our products.",
    },
    {
      property: "og:title",
      content: "About Us - Denys",
    },
    {
      property: "og:description",
      content: "Find out more about who we are and what we do.",
    },
  ],
});
</script>
