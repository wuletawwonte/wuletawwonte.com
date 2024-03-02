<template>
  <footer class="py-4">
    <div class="flex justify-center">
      <a
        href="https://www.linkedin.com/in/wuletawwonte/"
        class="text-lg text-base-content opacity-50 hover:opacity-100 active:outline-dotted active:outline-2 active:outline-offset-2"
        title="LinkedIn"
        target="_blank"
      >
        <icon name="fa-brands:linkedin" class="h-8 w-8" />
      </a>
      <a
        href="https://github.com/wuletawwonte/"
        class="ml-4 text-lg text-base-content opacity-50 hover:opacity-100 active:outline-dotted active:outline-2 active:outline-offset-2"
        title="GitHub"
        target="_blank"
      >
        <icon name="fa-brands:github" class="h-8 w-8" />
      </a>
      <a
        href="https://twitter.com/wuletawwonte"
        class="ml-4 text-lg text-base-content opacity-50 hover:opacity-100 active:outline-dotted active:outline-2 active:outline-offset-2"
        title="Twitter"
        target="_blank"
      >
        <icon name="fa6-brands:x-twitter" class="h-8 w-8" />
      </a>
      <a
        aria-label="email me"
        href="mailto:wuletawwonte@gmail.com"
        rel="noopener"
        class="ml-4 text-lg text-base-content opacity-50 hover:opacity-100 active:outline-dotted active:outline-2 active:outline-offset-2"
        title="email"
        target="_blank"
      >
        <icon name="fa6-solid:envelope" class="h-8 w-8" />
      </a>
    </div>
    <p class="mt-4 text-center text-base-content">
      &copy; {{ new Date().getFullYear() }} Wuletaw Wonte. All rights reserved.
    </p>
  </footer>
</template>
