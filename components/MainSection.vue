<script setup lang="ts">
const {isMobileOrTablet} = useDevice();
</script>

<template>
  <custom-section>
    <div class="flex items-center justify-between text-center" :class="isMobileOrTablet? 'flex-col' : ''">
      <div class="flex flex-col">
        <img class="avatar mb-2" src="@/assets/images/profile-pick.jpeg" alt="Photo of Me"/>
        <h3 class="text-xl">Abde Ali Sabunwala </h3>
        <h2 class="text-3xl text-green-600">Software Developer</h2>
      </div>
      <div>
        <h1 :class="isMobileOrTablet? 'text-4xl' : 'text-6xl'">Coding My Life:</h1>
        <h1 class="text-green-custom" :class="isMobileOrTablet? 'text-4xl' : 'text-6xl'">One Line at a Time</h1>
      </div>
    </div>
  </custom-section>
</template>

<style scoped>
.avatar {
  min-width: 20em;
  width: 25dvw;
  aspect-ratio: 1;
  border-radius: 3rem;
}
</style>
