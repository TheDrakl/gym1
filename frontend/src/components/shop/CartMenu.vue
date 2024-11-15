<template>
  <teleport to="body">
    <div
      class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
      @click.self="$emit('close')"
    >
      <div class="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <font-awesome-icon
          :icon="['fas', 'xmark']"
          class="absolute top-2 right-2 w-8 h-8 text-black cursor-pointer"
          @click="$emit('close')"
        />
        <h2
          class="text-2xl mb-4 text-center font-montserrat"
          v-if="cartItems.length > 0"
        >
          Cart ({{ getNumberOfSupplements }})
        </h2>
        <div>
          <ul class="space-y-2">
            <li
              v-for="item in cartItems"
              :key="item.id"
              class="bg-gray-50 hover:bg-gray-100 font-montserrat text-black text-lg flex justify-between items-center"
            >
              <div class="flex-grow">{{ item.name }} ({{ item.quantity }})</div>
              <span class="font-semibold mr-4">£{{ item.price }}</span>
              <div @click="removeItem(item.id)" class="cursor-pointer">          <font-awesome-icon :icon="['fa', 'trash']" class="text-[18px]" /></div>
            </li>
          </ul>
        </div>
        <div v-if="!cartItems.length > 0">
          <h1 class="text-xl text-center font-montserrat mt-4">
            You don't have any item in you cart!
          </h1>
        </div>
        <div class="mt-4">
          <p class="mt-8 mb-1 text-base font-montserrat" v-if="cartItems.length > 0">
            Summary: <span class="font-semibold">£{{ getSummary }}</span>
          </p>
          <button
            class="bg-green-500 text-[1.125rem] hover:text-[1.155rem] text-white px-4 py-2 rounded-lg flex items-center justify-center mx-auto"
            v-if="cartItems.length > 0"
          >
            Go to payment
          </button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
const emit = defineEmits(["close"]);

const cartItems = ref([]);

// Load supplements to cartItems
const loadCartItems = () => {
  const items = JSON.parse(localStorage.getItem("cart")) || [];
  cartItems.value = items;
};

// Remove supplement from cart
const removeItem = (id) => {
  {
    cartItems.value = cartItems.value.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(cartItems.value));
  }
};

// Get number of all supplement in cart
const getNumberOfSupplements = computed(() => cartItems.value.length);

// Get summary price for all supplements
const getSummary = computed(() => {
  return cartItems.value.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
});

onMounted(() => {
  loadCartItems();
});
</script>
