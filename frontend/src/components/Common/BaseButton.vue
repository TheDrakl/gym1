<template>
    <button
      :class="`text-xl border-[0.2px] border-white rounded-full hover:bg-darkGray hover:text-black shadow-md font-poppins text-gray-300 font-light${color}`"
    >
      <slot></slot>
    </button>
  </template>
  
  <script setup>
  
  const props = defineProps({
    color: {
      type: String,
      default: 'bg-blue-500 hover:bg-blue-600', // Default color
    },
  });
  </script>