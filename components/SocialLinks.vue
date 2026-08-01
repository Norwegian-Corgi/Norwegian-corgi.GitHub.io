<script setup lang="ts">
type Social = {
  uri: string;
  icon: string;
  label: string;
}

const socials: Array<Social> = [
  {uri: "https://github.com/Norwegian-Corgi", icon: "i-grommet-icons-github", label: "GitHub"},
  {uri: "https://www.linkedin.com/in/abdeali-sabunwala/", icon: "i-grommet-icons-linkedin-option", label: "LinkedIn"},
  {uri: "https://www.instagram.com/not.abdeali/", icon: "i-grommet-icons-instagram", label: "Instagram"},
  {uri: "mailto:abdealisabun8@gmail.com", icon: "i-grommet-icons-mail-option", label: "Email"},
]
</script>

<template>
  <ul class="flex flex-wrap items-center gap-6">
    <li v-for="social in socials" :key="social.label">
      <a
          :href="social.uri"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center gap-2 font-label text-xs tracking-label text-content-variant transition-colors hover:text-primary"
      >
        <span :class="social.icon" class="text-base"/>
        {{ social.label }}
      </a>
    </li>
  </ul>
</template>
