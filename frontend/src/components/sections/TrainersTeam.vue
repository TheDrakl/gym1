<template>
  <section id="team" class="bg-black py-36 font-roboto">
    <div class="min-h-screen">
      <div>
        <h2
          class="text-5xl font-medium text-white flex-col flex text-center mb-8 appearScroll"
        >
          <span>Get to know our team</span>
          <span> of experience trainers</span>
        </h2>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-3 text-center items-center text-white font-sans mx-2 md:mx-4 lg:mx-0"
      >
        <div>
          <div class="flex flex-col items-center appearScroll">
            <div class="flex justify-center">
              <img
                :src="trainer1"
                class="w-[450px] h-[554px] rounded-[3rem]"
                style="animation-delay: 0.2s"
                alt="Trainer 1"
                width="450"
                height="550"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 class="m-8 text-3xl">Esther Howard</h3>
          </div>
        </div>
        <div class="flex flex-col items-center appearScroll">
          <div class="flex justify-center">
            <img
              :src="trainer2"
              class="w-[450px] h-[554px] rounded-[3rem]"
              style="animation-delay: 0.5s"
              alt="Trainer 2"
              width="450"
              height="550"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h3 class="m-8 text-3xl">Leslie Alexander</h3>
        </div>
        <div class="flex flex-col items-center appearScroll">
          <div class="flex justify-center">
            <img
              :src="trainer3"
              class="w-[450px] h-[554px] rounded-[3rem]"
              style="animation-delay: 0.8s"
              alt="Trainer 3"
              width="450"
              height="550"
              loading="lazy"
              decoding="async"
            />
          </div>
          <h3 class="m-8 text-3xl">Jacob Jones</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import trainer1 from "@/assets/images/img3.webp";
import trainer2 from "@/assets/images/img4.webp";
import trainer3 from "@/assets/images/img5.webp";
</script>
