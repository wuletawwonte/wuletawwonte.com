<template>
  <footer class="py-4">
    <div class="flex justify-center">
      <a
        href="#"
        class="text-lg text-base-content hover:text-accent"
        title="LinkedIn"
      >
        <icon name="fa-brands:linkedin" class="h-8 w-8" />
      </a>
      <a
        href="#"
        class="ml-4 text-lg text-base-content hover:text-accent"
        title="GitHub"
      >
        <icon name="fa-brands:github" class="h-8 w-8" />
      </a>
      <a
        href="#"
        class="ml-4 text-lg text-base-content hover:text-accent"
        title="Twitter"
      >
        <icon name="fa-brands:twitter" class="h-8 w-8" />
      </a>
      <a
        href="#"
        class="ml-4 text-lg text-base-content hover:text-accent"
        title="Email"
      >
        <icon name="fa-regular:envelope" class="h-8 w-8" />
      </a>
    </div>
    <p class="mt-4 text-center text-base-content">
      &copy; {{ new Date().getFullYear() }} Wuletaw Wonte. All rights reserved.
    </p>
  </footer>
</template>
