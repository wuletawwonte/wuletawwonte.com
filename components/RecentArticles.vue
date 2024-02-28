<script setup type="ts">

const { data: articles } = await useAsyncData("articles", () => queryContent("blog").find());
</script>

<template>
  <div class="flex flex-col pt-8">
    <h2 class="font-ubuntu text-2xl font-semibold">Recently Published</h2>
    <ul class="mt-4 flex flex-col gap-4">
      <Article
        v-for="article in articles"
        :key="article.slug"
        :title="article.title"
        :excerpt="article.description"
        :slug="article.slug"
      />
    </ul>
  </div>
</template>
