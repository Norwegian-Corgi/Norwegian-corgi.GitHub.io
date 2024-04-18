<script setup lang="ts">
type Social = {
  uri: string;
  icon: string;
}

const socials: Array<Social> = [
  {
    uri: "https://www.linkedin.com/in/abdeali-sabunwala/",
    icon: "i-grommet-icons-linkedin-option"
  },
  {
    uri: "https://github.com/Norwegian-Corgi",
    icon: "i-grommet-icons-github"
  },
  {
    uri: "mailto:abdealisabun8@gmail.com",
    icon: "i-grommet-icons-mail-option"
  },
  {
    uri: "https://www.instagram.com/not.abdeali/",
    icon: "i-grommet-icons-instagram"
  }
]
</script>

<template>
  <div class="flex justify-center gap-4">
    <social-icon v-for="(social, index) in socials" :uri="social.uri" :icon="social.icon"/>
  </div>
</template>