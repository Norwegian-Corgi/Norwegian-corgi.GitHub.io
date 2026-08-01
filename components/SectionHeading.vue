<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: false
  },
  // Centered headings (CORE_STACK, FEATURED_PROJECTS) drop the icon rule underneath.
  centered: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div :class="centered ? 'text-center' : ''">
    <h2
        class="flex items-center gap-3 font-display font-bold text-content"
        :class="centered ? 'justify-center text-2xl tracking-wider md:text-3xl' : 'text-xl md:text-2xl'"
    >
      <span v-if="icon" :class="icon" class="text-lg text-primary"/>
      {{ title }}
    </h2>
    <div v-if="!centered" class="mt-3 h-0.5 w-12 bg-primary"/>
  </div>
</template>
