<script setup lang="ts">
const resume = ref(null);
</script>

<template>
  <div
    class="prose flex max-w-none flex-col font-ubuntu prose-hr:border-2 prose-hr:border-dashed"
  >
    <ContentDoc path="resume">
      <template #empty>
        <div class="flex h-96 items-center justify-center">
          <div class="flex flex-col items-center">
            <p>No resume document found</p>
          </div>
        </div>
      </template>
    </ContentDoc>
  </div>
</template>
