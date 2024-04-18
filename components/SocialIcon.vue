<script setup lang="ts">
const props = defineProps({
  uri: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a :href="uri">
    <span
        class="text-4xl cursor-pointer hover:text-green-custom"
        :class="icon"
    />
  </a>
</template>

<style scoped>

</style>