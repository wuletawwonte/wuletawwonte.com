<script setup lang="ts">
const colorMode = useColorMode();

const toggleColorMode = (e: Event) => {
  const target = e.target as HTMLInputElement;
  colorMode.preference = target.checked ? "dark" : "light";
};
</script>

<template>
  <div class="navbar fixed z-10 bg-base-100 pr-4 shadow lg:px-24">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-link lg:hidden">
          <Icon
            name="material-symbols:menu"
            class="h-6 w-6 text-base-content"
          />
        </div>
        <ul
          tabindex="0"
          class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
        >
          <li><nuxt-link to="/about">About</nuxt-link></li>
          <li><nuxt-link to="/blog">Blog</nuxt-link></li>
          <li><nuxt-link to="#">Item 3</nuxt-link></li>
        </ul>
      </div>
      <nuxt-link
        to="/"
        class="btn btn-link font-ubuntu text-xl font-thin text-base-content no-underline hover:no-underline"
        >Wuletaw Wonte</nuxt-link
      >
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
        <li><nuxt-link to="">Item 3</nuxt-link></li>
      </ul>
    </div>
    <div class="navbar-end">
      <label class="swap swap-rotate">
        <input
          type="checkbox"
          @change="toggleColorMode"
          :checked="colorMode.preference === 'dark'"
        />
        <Icon name="material-symbols-light:sunny" class="swap-on h-6 w-6" />
        <Icon
          name="material-symbols-light:mode-night"
          class="swap-off h-6 w-6"
        />
      </label>
    </div>
  </div>
</template>
