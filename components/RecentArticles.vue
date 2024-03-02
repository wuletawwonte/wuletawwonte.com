<script setup type="ts">

const articlesCount = await queryContent("blog").where({draft: {$eq: false}}).count();
const articles = await queryContent("blog").where({draft: {$eq: false}}).limit(5).sort({ datePublished: -1}).find();
</script>

<template>
  <div class="flex flex-col p-4 pt-8">
    <h2 class="font-ubuntu text-2xl font-semibold">Recently Published</h2>
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
    <nuxt-link
      v-if="articlesCount > 5"
      to="/blog"
      class="mt-8 flex items-center self-start text-xl text-primary text-opacity-80 hover:text-opacity-100 active:outline-dotted active:outline-2 active:outline-offset-2"
    >
      <span>All Articles</span>
      <Icon name="fa6-solid:angle-right" class="ml-1 h-4 w-4" />
    </nuxt-link>
  </div>
</template>
