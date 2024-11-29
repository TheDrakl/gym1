<template>
  <section>
    <div class="text-white flex">
      <h1
        class="md:text-[4rem] text-[2.9rem] font-montserrat pl-20 md:pl-24 pt-40 font-medium md:pt-60 md:text-start flex flex-col"
      >
        <span class="">Transform your body</span>
        <span class="text-orange-500">Elevate your mind</span>
      </h1>
    </div>
    <div>
      <button
        @click="navigateToSection('plans')"
        class="text-white font-montserrat ml-[10vw] mt-6 md:ml-40 md:mt-4 font-thin text-xl md:text-2xl py-6 px-28 rounded-lg border-greenButton border-[0.5px] hover:border-[1px] bg-transparent transition duration-300"
      >
        Go to Plans
      </button>
    </div>
  </section>
</template>
<script setup>
const navigateToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    console.log("Environment API Key:", process.env.VITE_APP_SECRET_API_KEY);
    console.log("Environment API Key:", process.env.VITE_APP_KEY);
    console.log('asdaadsadsads')
    section.scrollIntoView({ behavior: "smooth" });
  }
  return {
    navigateToSection,
  };
};
</script>
