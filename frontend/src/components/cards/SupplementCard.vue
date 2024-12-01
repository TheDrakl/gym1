<template>
  <div
    class="bg-white border border-gray-200 p-4 rounded-lg shadow-md text-center flex flex-col justify-between h-full"
    @click="goToSupplement(supplement.id)"
  >
    <img
      class="w-full h-40 md:h-60 object-cover mb-4 rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
      :src="supplement.image"
      alt="Supplement Image"
      loading="lazy"
    />
    <h3 class="text-lg font-semibold mb-2 font-montserrat">
      {{ supplement.name }}
    </h3>
    <p class="text-purple-700 font-bold mb-2">${{ supplement.price }}</p>
    <button
      class="bg-purple-600 text-white py-2 px-4 rounded-lg text-base hover:text-[1.10rem] hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
      @click.stop="addToCart(supplement)"
    >
      Add to Cart
    </button>
  </div>
</template>

<script setup>
import { notify } from "@kyvg/vue3-notification";
import { useRouter } from "vue-router";
const router = useRouter();
defineProps({
  supplement: {
    type: Object,
    required: true,
  },
});

const goToSupplement = (id) => {
  router.push(`/shop/supplement/${id}`);
};

const addToCart = (supplement) => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingSupplement = cart.find((item) => item.id === supplement.id);
  notify({
    type: "success",
    title: "Succesfully added to cart",
    max: 1,
    duration: 1000,
  });

  if (existingSupplement) {
    existingSupplement.quantity += 1;
  } else {
    cart.push({ ...supplement, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
};
</script>
