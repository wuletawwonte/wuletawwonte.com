<script setup type="ts">

const { data: articles } = await useAsyncData("articles", () => queryContent("blog").find());
</script>

<template>
  <div class="flex flex-col pt-8">
    <h2 class="font-ubuntu text-2xl font-semibold">Recently Published</h2>
    <ul>
      <li v-for="article in articles" :key="article.slug">
        <nuxt-link :to="`/blog/${article.slug}`">{{ article.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
