<script setup lang="ts">
const props = defineProps({
  title: String,
  slug: String,
  excerpt: String,
  date: String,
});
if (!props.date) {
  throw new Error("Date is required");
}
const dateObject = new Date(props.date);
const month = ref(dateObject.toLocaleString("en-US", { month: "short" }));
const day = ref(dateObject.getDate());
const year = ref(dateObject.getFullYear());
</script>

<template>
  <li class="group flex items-center">
    <div class="flex flex-col items-center border-r-2 px-4">
      <b>{{ month }}</b>
      <b>{{ day }}</b>
      <span>{{ year }}</span>
    </div>
    <div class="flex flex-col px-4 py-2">
      <nuxt-link
        :to="'/blog/' + slug"
        class="self-start font-ubuntu text-2xl font-semibold transition-colors duration-500 active:outline-dotted active:outline-2 active:outline-offset-2 group-hover:text-primary"
      >
        {{ title }}</nuxt-link
      >
      <p class="text-base-content">{{ excerpt }}</p>
    </div>
  </li>
</template>
