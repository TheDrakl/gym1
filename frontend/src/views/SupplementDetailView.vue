<template>
  <div
    class="min-h-[120vh] bg-black relative bg-cover bg-bottom font-montserrat text-white flex flex-col items-center"
  >
    <navbar-white class="relative z-20"></navbar-white>

    <div class="mx-4 lg:mx-10 flex flex-col w-full" v-if="!notFound">
      <!-- Navigation Header -->
      <div class="hidden lg:flex items-center mb-4 ml-4">
        <h2
          class="text-orange-500 font-montserrat text-xl cursor-pointer"
          @click="goToShop"
        >
          Shop
        </h2>
        <font-awesome-icon
          :icon="['fa', 'angle-right']"
          class="text-xl text-gray-400 mx-2"
        />
        <h2 class="line-clamp-1">{{ supplement.name }}</h2>
      </div>

      <!-- Main Content -->
      <div class="mt-6 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 w-full">
        <div class="flex justify-center mb-6 lg:mb-0">
          <img
            :src="supplement.image"
            alt="supplement image"
            class="w-[80%] max-w-[349px] h-auto"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div
          class="mt-4 lg:mt-0 flex flex-col items-center lg:items-start bg-blackBg p-6 lg:p-12 pr-2 w-full lg:max-w-[70%]"
        >
          <div class="text-center lg:text-left">
            <h2 class="text-2xl lg:text-4xl lg:break-words lg:max-w-sm">
              {{ supplement.name }}
            </h2>
            <p
              class="mt-2 bg-green-400 py-1 px-4 w-[10vh] h-[6vh] text-center rounded-lg text-milkBlue text-sm lg:text-base"
              v-if="isStockPositive"
            >
              In stock
            </p>
            <p
              class="mt-2 bg-red-400 p-1 w-[10vh] h-[6vh] text-center rounded-lg text-gray-50 text-sm lg:text-base"
              v-if="!isStockPositive"
            >
              Not in stock
            </p>
          </div>
          <div class="mt-4 flex-col flex w-full">
            <!-- Flavour Input -->
            <div class="flex items-center mb-2">
              <label for="flavour" class="w-1/3 lg:w-1/5 text-xl lg:text-2xl"
                >Flavour</label
              >
              <select
                name=""
                id="flavour"
                class="border border-gray-400 rounded p-1 w-2/3 text-black ml-2"
              >
                <option value="" disabled>Select a flavour</option>
                <option value="s" v-for="flavour in flavours" :key="flavour.id">
                  {{ flavour.name }}
                </option>
              </select>
            </div>
            <!-- Size Input -->
            <div class="flex items-center mb-2">
              <label for="size" class="w-1/3 lg:w-1/5 text-xl lg:text-2xl"
                >Size</label
              >
              <select
                name=""
                id="size"
                class="border border-gray-400 rounded p-1 w-2/3 text-black ml-2"
              >
                <option value="" disabled>Select a size</option>
                <option value="s" v-for="size in sizes" :key="size">
                  {{ size.name }}
                </option>
              </select>
            </div>
            <!-- Quantity Input -->
            <div class="flex items-center mb-2">
              <label for="qty" class="w-1/3 lg:w-1/5 text-xl lg:text-2xl"
                >Quantity</label
              >
              <input
                type="number"
                id="qty"
                class="border border-gray-400 rounded p-1 w-2/3 text-black ml-2"
                min="1"
                v-model="quantity"
              />
            </div>
          </div>
          <div class="mt-4">
            <p class="text-lg lg:text-xl text-white">£{{ supplement.price }}</p>
          </div>
          <div
            class="flex flex-col lg:flex-row lg:justify-between mt-4 text-lg lg:text-xl space-y-2 lg:space-y-0 lg:space-x-4"
          >
            <button
              class="bg-orange-500 hover:bg-orange-600 p-3 rounded-lg w-full lg:w-auto"
              :disabled="!isStockPositive"
              aria-label="Quick buy"
            >
              Quick buy
            </button>
            <button
              class="bg-purple-500 hover:bg-purple-600 p-3 rounded-lg w-full lg:w-auto"
              @click="addToCart(supplement)"
              :disabled="!isStockPositive"
              aria-label="Add to cart"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="notFound">
      <the-error></the-error>
    </div>
    <div
      class="fixed bottom-6 left-6 w-24 h-24 md:w-36 md:h-36 bg-white flex items-center justify-center rounded-full border-[6px] border-purple-500 shadow-2xl cursor-pointer transition-opacity duration-500"
      @click="toggleCartMenu"
      v-if="!notFound"
    >
      <font-awesome-icon
        :icon="['fa', 'cart-shopping']"
        class="w-12 md:w-20 h-auto text-black"
      />
    </div>
    <cart-menu v-if="showCart" @close="closeCartMenu()"></cart-menu>
  </div>
</template>
<script setup>
import { ref, onMounted, defineAsyncComponent, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import api from "@/axios";
import { notify } from "@kyvg/vue3-notification";
import { useHead } from "@vueuse/head";

const cartMenu = defineAsyncComponent(() =>
  import("@/components/shop/CartMenu.vue")
);

const theError = defineAsyncComponent(() =>
  import("@/components/errors/NotFound.vue")
);

const route = useRoute();
const router = useRouter();
const supplement = ref({});
const flavours = ref([]);
const sizes = ref([]);
const showCart = ref(false);
const quantity = ref(1);
const notFound = ref(false);
const isStockPositive = ref(false);

const goToShop = () => {
  router.push("/shop");
};

const toggleCartMenu = () => {
  showCart.value = !showCart.value;
};

const closeCartMenu = () => {
  showCart.value = false;
};

const isInStock = () => {
  if (supplement.value.stock > 0) {
    isStockPositive.value = true;
  } else {
    isStockPositive.value = false;
  }
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
  let quantityToAdd = parseInt(quantity.value, 10);

  if (isNaN(quantityToAdd) || quantityToAdd < 1) {
    quantityToAdd = 1;
  }
  if (existingSupplement) {
    existingSupplement.quantity += quantityToAdd;
  } else {
    cart.push({ ...supplement, quantity: quantityToAdd });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
};

onMounted(async () => {
  try {
    const id = route.params.pk;
    const response = await api.get(`supplements/${id}`);
    supplement.value = response.data;
    flavours.value = supplement.value.flavour;
    sizes.value = supplement.value.size;
    isInStock()
  } catch (error) {
    if (error.response.status === 404) {
      notFound.value = true;
    }
  }
});
const supplementTitle = computed(() =>
  supplement.value.name
    ? `${supplement.value.name} - Product Details`
    : "Loading..."
);
const supplementDescription = computed(() =>
  supplement.value.name
    ? `Get all the details about ${supplement.value.name}, including benefits, ingredients, and usage instructions.`
    : ""
);
const supplementImage = computed(
  () => supplement.value.image || "https://default-image-url.com/default.jpg"
);
const supplementPrice = computed(() => supplement.value.price || "0.00");
const supplementUrl = computed(() =>
  supplement.value.id
    ? `http://localhost:5173/shop/supplement/${supplement.value.id}`
    : ""
);

useHead({
  title: supplementTitle,
  meta: [
    { name: "description", content: supplementDescription },
    { property: "og:title", content: supplementTitle },
    { property: "og:description", content: supplementDescription },
    { property: "og:image", content: supplementImage },
    { property: "og:url", content: supplementUrl },
    { property: "og:type", content: "product" },
    { property: "product:price:amount", content: supplementPrice },
    { property: "product:price:currency", content: "GBP" },
  ],
});
</script>
