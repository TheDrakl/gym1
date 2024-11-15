<template>
  <section
    class="text-white flex flex-col p-8 lg:text-xl xl:text-2xl w-full bg-gray-800 rounded-lg shadow-[2rem]"
  >
    <div class="space-y-6 sm:space-y-12">
      <!-- View Section -->
      <div>
        <h3 class="flex items-center justify-between w-full sm:w-72">
          <span
            class="w-1/2 text-left cursor-pointer"
            @click="toggleSection('viewTogg')"
            >View</span
          >

          <font-awesome-icon
            :icon="['fa', 'plus']"
            class="cursor-pointer text-3xl"
            v-if="!isToggled.viewTogg"
            @click="toggleSection('viewTogg')"
          />
          <font-awesome-icon
            :icon="['fa', 'minus']"
            class="cursor-pointer text-3xl"
            v-if="isToggled.viewTogg"
            @click="toggleSection('viewTogg')"
          />
        </h3>
        <div v-if="isToggled.viewTogg">
          <div class="mt-4">
            <label for="supplementsPerPage" class="text-lg"
              >Choose amount<br />supplements per page</label
            >
            <select class="float-right text-black w-[40px]" id="supplementsPerPage" @change="handleSupplementsPerPage($event)"
            :value="12">
              <option value="SelectSupplementsPerPage" disabled>
                Select amount of supplements per page
              </option>
              <option value="4">4</option>
              <option value="8">8</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Sort By Section -->
      <div>
        <h3 class="flex items-center justify-between w-full sm:w-72">
          <span
            class="w-1/2 text-left cursor-pointer"
            @click="toggleSection('sortTogg')"
            >Sort By</span
          >
          <font-awesome-icon
            :icon="['fa', 'plus']"
            class="cursor-pointer text-3xl"
            v-if="!isToggled.sortTogg"
            @click="toggleSection('sortTogg')"
          />
          <font-awesome-icon
            :icon="['fa', 'minus']"
            class="cursor-pointer text-3xl"
            v-if="isToggled.sortTogg"
            @click="toggleSection('sortTogg')"
          />
        </h3>
        <!-- Content for Sort By section -->
        <!-- Categories Section -->
        <div v-if="isToggled.sortTogg" class="space-y-3 mt-6 text-lg">
          <div
            v-for="(orderByField, index) in orderByFields"
            :key="index"
            class="flex justify-between cursor-pointer"
            @click="chooseOrderBy(orderByField, index)"
          >
            <p
              :class="{
                'text-orange-500 font-bold':
                  chosenOrderByField === orderByField,
                'hover:text-gray-300': chosenOrderByField !== orderByField,
              }"
              class="text-lg font-montserrat font-thin"
            >
              {{ orderByField.charAt(0).toUpperCase() + orderByField.slice(1) }}
            </p>
            <font-awesome-icon
              v-if="showSortBy[index] === 0"
              :icon="['fa', 'sort']"
            />
            <font-awesome-icon
              v-if="showSortBy[index] === 1"
              :icon="['fa', 'sort-up']"
            />
            <font-awesome-icon
              v-if="showSortBy[index] === 2"
              :icon="['fa', 'sort-down']"
            />
          </div>
        </div>
      </div>

      <!-- Categories Section -->
      <div>
        <h3 class="flex items-center justify-between w-full sm:w-72">
          <span
            class="w-1/2 text-left cursor-pointer"
            @click="toggleSection('categoriesTogg')"
            >Categories</span
          >
          <font-awesome-icon
            :icon="['fa', 'plus']"
            class="cursor-pointer text-3xl"
            v-if="!isToggled.categoriesTogg"
            @click="toggleSection('categoriesTogg')"
          />
          <font-awesome-icon
            :icon="['fa', 'minus']"
            class="cursor-pointer text-3xl"
            v-if="isToggled.categoriesTogg"
            @click="toggleSection('categoriesTogg')"
          />
        </h3>
        <div v-if="isToggled.categoriesTogg" class="space-y-3 mt-6 text-lg">
          <p
            v-for="category in categories"
            :key="category.id"
            class="cursor-pointer truncate text-lg font-thin"
            :class="{
              'text-orange-500 font-bold': chosenCategory === category.id,
              'hover:text-gray-300': chosenCategory !== category.id,
            }"
            @click="chooseCategory(category.id)"
          >
            {{ category.name }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import api from "@/axios";


const categories = ref([]);
const chosenCategory = ref("");
const orderByFields = ref([]);
const chosenOrderByField = ref("name");

const viewTest = ref([
  {
    name: "Test 1",
  },
  {
    name: "Test 2",
  },
  {
    name: "Test 3",
  },
  {
    name: "Test 4",
  },
]);

// Sort By Icons
const showSortBy = ref([]);

const emit = defineEmits();

const handleSupplementsPerPage = (event) => {
  const newSize = event.target.value
  emit('update:supplementsPerPage', newSize)
}

const isToggled = ref({
  viewTogg: false,
  sortTogg: false,
  categoriesTogg: false,
});

const toggleSection = (section) => {
  isToggled.value[section] = !isToggled.value[section];
};

const fetchOrderingByOptions = async () => {
  try {
    const response = await api.options("supplements/");
    orderByFields.value = response.data.ordering_fields || [];
    showSortBy.value = new Array(orderByFields.value.length).fill(0);
  } catch (error) {
    console.error("Error fetching ordering fields:", error);
  }
};

const fetchCategories = async () => {
  const response = await api.get("categories/");
  categories.value = response.data;
};

const chooseOrderBy = (orderByName, index) => {
  if (chosenOrderByField.value === orderByName) {
    showSortBy.value[index] = (showSortBy.value[index] + 1) % 3;
  } else {
    chosenOrderByField.value = orderByName;
    showSortBy.value = showSortBy.value.map((_, i) => (i === index ? 1 : 0));
  }

  emit("chosenOrderBy", chosenOrderByField.value);
  emit("showSortBy", showSortBy.value[index]);
};

const chooseCategory = (categoryId) => {
  if (chosenCategory.value === categoryId) {
    chosenCategory.value = null;
    emit("chosenCategory", chosenCategory.value);
  } else if (chosenCategory.value !== categoryId) {
    chosenCategory.value = categoryId;
    emit("chosenCategory", chosenCategory.value);
  }
};

onMounted(() => {
  fetchCategories();
  fetchOrderingByOptions();
});
</script>

<style>
.truncate {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 280px;
}
</style>
