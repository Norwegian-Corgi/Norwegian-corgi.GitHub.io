<template>
  <footer class="border-t border-outline-variant/40 bg-surface-low">
    <div class="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-8 md:flex-row md:items-center md:justify-between">
      <div>
        <p class="font-label text-xs font-bold tracking-wider text-content">
          Abde Ali Sabunwala
        </p>
        <p class="mt-1 text-xs text-content-muted">
          © 2023-{{ new Date().getFullYear() }} Abde Ali Sabunwala
        </p>
      </div>
      <social-links/>
    </div>
  </footer>
</template>
