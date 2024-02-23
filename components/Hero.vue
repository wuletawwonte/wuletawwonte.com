<script setup>
const iconVisible = ref(false);
</script>

<template>
  <div class="font-ubuntu prose">
    <p class="font-ubuntu text-2xl">Hi, I'm</p>
    <button
      title="Click to Pronounce"
      type="button"
      class="flex text-3xl font-semibold"
    >
      <strong class="peer font-semibold">Wuletaw Wonte</strong>
      <icon
        name="material-symbols:volume-up"
        class="h-10 w-10 pl-3 opacity-5 duration-300 hover:opacity-100 peer-hover:opacity-100"
      />
    </button>
    <button
      title="Click to Pronounce"
      class="font-display flex items-center text-3xl font-semibold"
      type="button"
    >
      <strong data-v-6979734c="">Abdelrahman Awad</strong>
      <span class="PronounceIcon ml-3" data-v-6979734c=""
        ><svg
          class="h-10 w-10 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          data-v-6979734c=""
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
            data-v-6979734c=""
          ></path></svg
      ></span>
    </button>
  </div>
</template>
