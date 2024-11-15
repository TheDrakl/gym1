<template>
  <div
    class="bg-black relative bg-cover bg-bottom font-montserrat font-light lg:pt-0"
    :class="
      errorFetching
        ? 'h-[75vh] md:h-[100vh]'
        : 'h-[300vh] md:h-[250vh] lg:h-[250vh] xl:h-[200vh]'
    "
  >
    <navbar-white class="relative z-20"></navbar-white>

    <div class="flex float-left mt-28 md:mx-4 flex-col">
      <the-filter
        class="hidden lg:block"
        v-if="!errorFetching"
        @chosenCategory="handleCategoryData"
        @chosenOrderBy="handleSortBy"
        @showSortBy="handleShowSortBy"
        @update:supplementsPerPage="handleSizePerPage"
        :supplementsPerPage="supplementsPerPage"
      ></the-filter>
    </div>

    <section class="pt-32 lg:pt-0">
      <div
        class="flex items-center justify-center relative md:ml-0 mt-20 mx-14 md:mx-0"
        v-if="!errorFetching"
      >
        <label for="search" class="sr-only">Search</label>
        <input
          id="search"
          type="text"
          class="md:w-[70vh] w-[80vh] h-[5vh] min-h-[50px] p-2 relative rounded-full rounded-r-none focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
          placeholder="Start typing to get results"
          v-model="searchInput"
          autocomplete="off"
          @keyup.enter="fetchSupplements"
        />
        <button
          class="transform h-[5vh] min-h-[50px] bg-purple-600 text-white rounded-full relative rounded-l-none py-1 px-4 hover:bg-purple-700 transition"
          @click="handleSubmitButton()"
        >
          Submit
        </button>
      </div>

      <p
        class="text-white text-lg text-center mb-2 md:mt-12 font-montserrat font-light pt-32 pb-4 md:pb-0 md:pt-0 md:mr-32"
        v-if="fetchedSupplements && !errorFetching"
      >
        Total amount of products: {{ totalSupplements }}
      </p>

      <div>
        <p
          class="text-3xl text-white text-center mr-24 mt-24 text-milkBlue"
          v-if="!fetchedSupplements"
        >
          Unfortunately, we weren't able to find any supplement with this
          description
        </p>
        <p class="text-3xl text-red-500 text-center mt-24" v-if="errorFetching">
          An error occured, please try again later
        </p>

        <div class="text-center mt-20" v-if="isLoading && !errorFetching">
          <div role="status">
            <svg
              aria-hidden="true"
              class="inline w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
      <div
        class="px-4 ml-2 xl:ml-0 md:p-4 mr-2 xl:mr-8 2xl:mr-20 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <supplement-card
          v-for="supplement in fetchedSupplements"
          :key="supplement.id"
          :supplement="supplement"
        />
      </div>
      <div class="text-4xl text-white"></div>
      <div
        class="flex justify-center gap-4 mt-12 md:mt-8 md:ml-56"
        v-if="totalPages"
      >
        <button
          class="bg-purple-600 text-white py-4 px-3 md:py-2 md:px-4 rounded-lg hover:bg-purple-700 transition"
          @click="goToPreviousPage"
        >
          Previous Page
        </button>
        <button
          class="bg-purple-600 text-white py-4 px-5 md:py-2 md:px-4 rounded-lg hover:bg-purple-700 transition"
          @click="goToNextPage"
        >
          Next Page
        </button>
        <h1 class="text-white md:mt-2 mt-4 md:text-base text-lg">
          Page: {{ pageNumber }} / {{ totalPages }}
        </h1>
      </div>
    </section>

    <div
      class="fixed bottom-6 left-6 w-24 h-24 md:w-36 md:h-36 bg-white flex items-center justify-center rounded-full border-[6px] border-purple-500 shadow-2xl cursor-pointer transition-opacity duration-500"
      @click="toggleCartMenu"
      v-if="!errorFetching"
    >
      <font-awesome-icon
        :icon="['fa', 'cart-shopping']"
        class="w-12 md:w-20 h-auto text-black"
      />
    </div>
    <cart-menu v-if="showCart" @close="closeCartMenu"></cart-menu>
  </div>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent, watch } from "vue";
import api from "@/axios";
import { inject } from "vue";
import { useHead } from "@vueuse/head";
// import { debounce } from "lodash";
const theFilter = defineAsyncComponent(() =>
  import("@/components/shop/TheFilter.vue")
);
const supplementCard = defineAsyncComponent(() =>
  import("@/components/cards/SupplementCard.vue")
);
const cartMenu = defineAsyncComponent(() =>
  import("@/components/shop/CartMenu.vue")
);

const pageNumber = ref(1);
const fetchedSupplements = ref([]);
const totalPages = ref("");
const totalSupplements = ref("");
const searchInput = ref("");
const showCart = ref(false);
const errorFetching = ref(false);
const selectedCategoryId = ref();
const selectedSortBy = ref(); // Field to sort by
const selectedSortByNum = ref(0); // Sort direction
const supplementsPerPage = ref(12);
const isLoading = ref(false);

const scrollToTop = inject("scrollToTop");

const handleSizePerPage = (val) => {
  supplementsPerPage.value = val;
  fetchSupplements(true);
};

const handleShowSortBy = (num) => {
  selectedSortByNum.value = num;
};

const handleCategoryData = (categoryId) => {
  selectedCategoryId.value = categoryId;
  fetchSupplements(true);
};

const handleSortBy = (sortBy) => {
  selectedSortBy.value = sortBy;
};

const toggleCartMenu = () => {
  showCart.value = !showCart.value;
};

const closeCartMenu = () => {
  showCart.value = false;
};

const fetchSupplements = async (resetPage = false) => {
  if (resetPage) {
    pageNumber.value = 1;
  }
  try {
    isLoading.value = true;
    let ordering = "";
    if (selectedSortByNum.value === 0 || selectedSortByNum.value === 1) {
      ordering = selectedSortBy.value
        ? `&ordering=${selectedSortBy.value}`
        : "";
    } else if (selectedSortByNum.value === 2) {
      ordering = selectedSortBy.value
        ? `&ordering=-${selectedSortBy.value}`
        : "";
    }
    let search = searchInput.value ? `&search=${searchInput.value}` : "";
    let url = selectedCategoryId.value
      ? `category/id/${selectedCategoryId.value}/?page=${pageNumber.value}${search}${ordering}&page_size=${supplementsPerPage.value}`
      : `supplements/?page=${pageNumber.value}${search}${ordering}&page_size=${supplementsPerPage.value}`;

    const response = await api.get(url);
    isLoading.value = false;
    fetchedSupplements.value = response.data.results;
    const pageSize = supplementsPerPage.value;
    totalPages.value = Math.ceil(response.data.count / pageSize);
    totalSupplements.value = response.data.count;
  } catch (error) {
    errorFetching.value = true;
    console.log("Error fetching data", error);
  }
};

// const debouncedFetchSupplement = debounce(fetchSupplements, 300)

const goToNextPage = () => {
  if (pageNumber.value < totalPages.value) {
    pageNumber.value += 1;
    fetchSupplements();
    scrollToTop();
  }
};

const goToPreviousPage = () => {
  if (pageNumber.value > 1) {
    pageNumber.value -= 1;
    fetchSupplements();
    scrollToTop();
  }
};

const handleSubmitButton = () => {
  if (searchInput || selectedCategoryId || selectedSortBy) {
    fetchSupplements();
  }
};

watch([selectedSortBy, selectedSortByNum], () => {
  fetchSupplements(true);
});
watch(searchInput, (newValue, oldValue) => {
  if (oldValue !== newValue && searchInput.value === "") {
    fetchSupplements(true);
  }
});

onMounted(() => {
  fetchSupplements();
});

useHead({
  title: "Shop - Denys",
  meta: [
    {
      name: "description",
      content:
        "Explore our shop with a wide range of products designed to suit your needs.",
    },
    {
      property: "og:title",
      content: "Shop - Denys",
    },
    {
      property: "og:description",
      content: "Find the best deals and products in our online shop.",
    },
  ],
});
</script>
