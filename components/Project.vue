<script setup lang="ts">
defineProps({
  title: String,
  description: String,
  href: String,
  image: String,
});
</script>

<template>
  <li class="group relative flex flex-col items-start rounded-lg">
    <div
      class="relative z-10 flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0"
    >
      <img
        alt=""
        loading="lazy"
        width="32"
        height="32"
        decoding="async"
        data-nimg="1"
        class="h-12 w-12"
        style="color: transparent"
        :src="image"
      />
    </div>
    <h2 class="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
      <div
        class="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl"
      ></div>
      <a :href="href" target="_blank">
        <span
          class="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl"
        ></span
        ><span class="relative z-10">{{ title }}</span>
      </a>
    </h2>
    <p class="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {{ description }}
    </p>
    <p
      class="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200"
    >
      <icon name="akar-icons:link-chain" class="h-5 w-5 flex-none" />
      <span class="ml-2">{{ href }}</span>
    </p>
  </li>
</template>
