<script setup lang="ts">
const colorMode = useColorMode();

const toggleColorMode = (e: Event) => {
  const target = e.target as HTMLInputElement;
  colorMode.value = target.checked ? 'dark' : 'light';
};
</script>

<template>
  <div class="navbar bg-base-100 lg:px-24 pr-4">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-link lg:hidden">
          <Icon
            name="material-symbols:menu"
            class="w-6 h-6 text-base-content"
          />
        </div>
        <ul
          tabindex="0"
          class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Item 1</a></li>
          <li>
            <a>Parent</a>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a
        class="btn btn-link text-base-content no-underline hover:no-underline text-xl"
        >Wuletaw Wonte</a
      >
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a>Item 1</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <label class="swap swap-rotate">
        <input type="checkbox" @change="toggleColorMode" />
        <Icon name="material-symbols-light:sunny" class="swap-on w-6 h-6" />
        <Icon
          name="material-symbols-light:mode-night"
          class="swap-off w-6 h-6"
        />
      </label>
    </div>
  </div>
</template>
