<script setup lang="ts">
const phrases: Array<string> = ["BUILD // ITERATE // SCALE", "CODE_COMPILED: STABLE"]
</script>

<template>
  <!--
    Two identical halves, each carrying its own trailing gap (pr-16), so the track is
    exactly twice one half's width and the -50% translation loops without a jump.
  -->
  <div class="overflow-hidden border-y border-outline-variant/40 py-6" aria-hidden="true">
    <div class="flex w-max animate-marquee">
      <div v-for="half in 2" :key="half" class="flex shrink-0 gap-16 pr-16">
        <span
            v-for="(phrase, index) in [...phrases, ...phrases]"
            :key="index"
            class="whitespace-nowrap font-label text-sm tracking-wider text-content-muted/25"
        >
          {{ phrase }}
        </span>
      </div>
    </div>
  </div>
</template>
