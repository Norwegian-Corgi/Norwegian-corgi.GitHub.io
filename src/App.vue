<template>
  <LandingPage class="section1" />
  <About class="section2" id="about" />
  <Experience class="section3" id="experience" />
  <Education class="section4" id="education" />
  <Contact class="section5" id="contact" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import About from "@/sections/About.vue";
import LandingPage from "@/sections/LandingPage.vue";
import "@/styles/global.css";
import Experience from "@/sections/Experience.vue";
import Education from "@/sections/Education.vue";
import Contact from "@/sections/Contact.vue";

export default defineComponent({
  name: "App",
  components: {
    Contact,
    Education,
    Experience,
    LandingPage,
    About,
  },
});
</script>

<style>
html,
body {
  margin: 0;
  height: 100%;
  scroll-behavior: smooth;
}
#app {
  font-family: "Roboto Thin 100", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.section1 {
  min-height: 100vh;
  margin: 0;
  padding: 0 0 2em;
  background: #dabfff;
  color: #302f4d;
}
.section2 {
  min-height: 100vh;
  margin: 0;
  padding: 0 0 2em;
  background: #eddfef;
  color: #302f4d;
}
.section3 {
  min-height: 100vh;
  margin: 0;
  padding: 0 0 2em;
  background: #c8d5b9;
  color: #06070e;
}
.section4 {
  min-height: 100vh;
  margin: 0;
  padding: 0 0 2em;
  background: #dabfff;
  color: #302f4d;
}
.section5 {
  min-height: 100vh;
  margin: 0;
  padding: 0 0 2em;
  background: #faf3dd;
  color: #302f4d;
}
</style>
