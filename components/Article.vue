<script setup lang="ts"></script>

<template>
  <div class="group flex items-center">
    <div class="flex flex-col items-center border-r-2 px-4">
      <b>Dec</b>
      <b>15</b>
      <span>2023</span>
    </div>
    <div class="flex flex-col px-4 py-2">
      <nuxt-link
        to="#"
        class="font-ubuntu text-2xl font-semibold transition-colors duration-500 group-hover:text-primary"
        >Article Title</nuxt-link
      >
      <p class="text-gray-500">Article Excerpt</p>
    </div>
  </div>
</template>
