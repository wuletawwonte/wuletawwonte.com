<script setup type="ts">

const articles = await queryContent("blog").where({draft: {$eq: false}}).sort({ datePublished: -1}).find();
</script>

<template>
  <div class="flex flex-col p-4 lg:pt-0">
    <div class="flex flex-col">
      <h1 class="font-ubuntu text-4xl">Blog</h1>
      <p class="mt-4 text-lg text-base-content">
        In this blog, I write about my personal thoughts and experiences related
        to the things I'm working on, significant events in my life, the
        problems I'm tackling, and the thoughts I vocalize.
      </p>
    </div>
    <ul class="mt-4 flex flex-col gap-4">
      <Article
        v-for="article in articles"
        :key="article.slug"
        :title="article.title"
        :excerpt="article.description"
        :slug="article.slug"
        :date="article.datePublished"
      />
    </ul>
  </div>
</template>
