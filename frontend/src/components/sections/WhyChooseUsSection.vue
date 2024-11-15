<template>
  <section id="why-us" class="bg-blackBg min-h-screen text-white pb-12">
    <div class="text-white appearFromTop">
      <h2
        class="text-5xl font-roboto font-normal flex-col flex text-center mb-4 pt-12"
      >
        Why Choose Us
      </h2>
      <p class="font-roboto font-extralight text-center">
        When picking a gym, consider its amenities like guest access, hours,<br />
        location, and extra benefits to enhance your experience
      </p>
    </div>
    <div
      class="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 bg-blackLight rounded-xl mx-4 md:mx-14 xl:mx-40 py-10 px-6 md:py-24 md:px-24 mt-20 appearScroll"
    >
      <!-- Feature 1 -->
      <div class="flex space-x-4">
        <div class="text-6xl text-greenButton">
          <font-awesome-icon :icon="['fa', 'dumbbell']" />
        </div>
        <div>
          <h3 class="text-xl font-semibold">Best training</h3>
          <p class="text-gray-400">
            Best Training dolor sit amet conscetet. Cras eros molestie habitasse
            sed proin volutpat sollicitudin adipiscing.
          </p>
        </div>
      </div>

      <!-- Feature 2 -->
      <div class="flex space-x-4">
        <div class="text-6xl text-greenButton">
          <font-awesome-icon :icon="['fa', 'chalkboard']" />
        </div>
        <div>
          <h3 class="text-xl font-semibold">Experienced Trainers</h3>
          <p class="text-gray-400">
            Experienced Trainers dolor sit amet volutpat. Cras eros molestie
            habitasse sed proin volutpat sollicitudin adipiscing.
          </p>
        </div>
      </div>

      <!-- Feature 3 -->
      <div class="flex space-x-4">
        <div class="text-6xl text-greenButton">
          <font-awesome-icon :icon="['fa', 'calendar']" />
        </div>
        <div>
          <h3 class="text-xl font-semibold">Flexible Membership Plans</h3>
          <p class="text-gray-400">
            Flexible Membership Plans dolor sit amet conscetet. Cras eros
            molestie habitasse sed proin volutpat sollicitudin adipiscing.
          </p>
        </div>
      </div>

      <!-- Feature 4 -->
      <div class="flex space-x-4">
        <div class="text-6xl text-greenButton">
          <font-awesome-icon :icon="['fa', 'trophy']" />
        </div>
        <div>
          <h3 class="text-xl font-semibold">Award Winners</h3>
          <p class="text-gray-400">
            Award Winners dolor sit amet consectetur. Cras eros molestie
            habitasse sed proin volutpat sollicitudin adipiscing.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
