<script setup lang="ts">
const {isMobileOrTablet} = useDevice();

defineProps({
  title: {
    type: String,
    required: false
  }
});
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-dvh">
    <div class="w-3/4">
      <h1 v-if="title" class="text-5xl text-green-custom mb-4">{{ title}}</h1>
      <slot/>
    </div>
  </div>
</template>
