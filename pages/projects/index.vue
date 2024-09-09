<script setup lang="ts">
const projects = [
  {
    title: "wuletawwonte.com",
    description: "A personal blog built with Nuxt.js and DaisyUI.",
    href: "https://wuletawwonte.com",
    image: "/images/wuletawwontecom.png",
  },
  {
    title: "Ethresale",
    description:
      "A Nuxt powered web app that enables individuals to buy or sell used items.",
    href: "https://ethresale.netlify.app/",
    image: "/images/ethresale.svg",
  },
  {
    title: "EthHours",
    description:
      "An extension for chrome that shows the current time in Ethiopian numerals.",
    href: "https://clock.wuletawwonte.com/",
    image: "/images/ethhours.svg",    
  }
];
</script>

<template>
  <div>
    <div class="max-w-2xl">
      <h1
        class="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
      >
        My side projects.
      </h1>
      <p class="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        I’ve worked on many little projects over the years but these are the
        ones that I’m most proud of. Many of them are open-source, check out the
        code and contribute if you are interested.
      </p>
    </div>
    <div class="mt-16 sm:mt-20">
      <ul
        role="list"
        class="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        <Project
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :href="project.href"
          :image="project.image"
        />
      </ul>
    </div>
  </div>
</template>
