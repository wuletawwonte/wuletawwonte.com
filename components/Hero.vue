<script setup>
import wuletawAudio from "@/assets/sounds/wuletawwonte.mp3";

function readOutloud() {
  const audio = new Audio(wuletawAudio);
  audio.play();
}
</script>

<template>
  <div class="font-ubuntu prose">
    <p class="font-ubuntu mb-1 text-2xl">Hi, I'm</p>
    <button
      title="Click to Pronounce"
      type="button"
      class="flex text-3xl font-semibold"
      @click="readOutloud"
    >
      <strong class="peer font-semibold">Wuletaw Wonte</strong>
      <icon
        name="material-symbols:volume-up"
        class="h-10 w-10 pl-3 text-accent opacity-5 duration-300 hover:opacity-100 peer-hover:opacity-100"
      />
    </button>
  </div>
</template>
