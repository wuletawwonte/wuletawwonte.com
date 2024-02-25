<script setup>
import wuletawAudio from "@/assets/sounds/wuletawwonte.mp3";

function readOutloud() {
  const audio = new Audio(wuletawAudio);
  audio.play();
}
</script>

<template>
  <div class="prose font-ubuntu">
    <p class="mb-2 font-ubuntu text-2xl text-base-content">Hi, I'm</p>
    <button
      title="Click to Pronounce"
      type="button"
      class="flex text-4xl font-semibold"
      @click="readOutloud"
    >
      <strong class="peer font-semibold">Wuletaw Wonte</strong>
      <icon
        name="material-symbols:volume-up"
        class="h-11 w-11 pl-3 text-primary opacity-5 duration-300 hover:opacity-100 peer-hover:opacity-100"
      />
    </button>
    <h3 class="mt-2 text-xl font-thin">Freelance Software Developer</h3>
    <p class="mb-0 mt-2 text-lg text-base-content">
      Passionate about
      <nuxt-link to="https://vuejs.org/" class="text-primary" target="_blank"
        >Vuejs</nuxt-link
      >,
      <nuxt-link to="https://nuxt.com/" class="text-primary" target="_blank"
        >Nuxt</nuxt-link
      >, and
      <nuxt-link
        to="https://rubyonrails.org/"
        class="text-primary"
        target="_blank"
        >Ruby on Rails</nuxt-link
      >.
    </p>
    <p class="mt-2 pt-0 text-lg text-base-content">
      Building
      <nuxt-link
        to="https://github.com/wuletawwonte/"
        class="text-primary"
        target="_blank"
        >Open Source</nuxt-link
      >
      projects for fun.
    </p>
  </div>
</template>
