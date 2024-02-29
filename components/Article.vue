<script setup lang="ts">
const props = defineProps({
  title: String,
  slug: String,
  excerpt: String,
  date: String,
});

// console.log(date);

// const formattedDate = new Date(publishedDate.toString).toLocaleDateString(
//   "en-US",
//   {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   },
// );
</script>

<template>
  <div class="group flex items-center">
    <div class="flex flex-col items-center border-r-2 px-4">
      <b>Dec</b>
      <b>15</b>
      <span>2023</span>
    </div>
    <div class="flex flex-col px-4 py-2">
      <nuxt-link
        :to="'/blog/' + slug"
        class="font-ubuntu text-2xl font-semibold transition-colors duration-500 group-hover:text-primary"
      >
        {{ title }}</nuxt-link
      >
      <p class="text-gray-500">{{ excerpt }}</p>
    </div>
  </div>
</template>
