<template>
  <div>
    <navigation-bar v-if="isWideScreen" :links="links" />
    <hamburger-menu v-else :links="links" />
    <div class="flex-row container">
      <div class="flex-column align-items-center">
        <img
          class="profile-picture"
          src="../assets/profile-pick.jpeg"
          alt="A picture of Abde."
        />
        <span class="name margin-bottom-05">Abde Ali Sabunwala </span>
        <typing-text
          :text="['Full Stack Developer', 'Technology Enthusiast']"
          :period="1000"
        />
        <div>
          <button class="button" @click="scroll">Contact me</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DOMUtils from "@/utils/DOMUtils";
import NavigationBar from "@/components/NavigationBar.vue";
import HamburgerMenu from "@/components/HamburgerMenu.vue";
import TypingText from "@/components/TypingText.vue";

export default defineComponent({
  name: "LandingPage",
  components: { TypingText, HamburgerMenu, NavigationBar },
  data: function () {
    return {
      links: new Map(),
      isWideScreen: true,
    };
  },
  mounted() {
    this.links.set("About me", "about");
    this.links.set("Experience", "experience");
    this.links.set("Education", "education");
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  methods: {
    scroll() {
      DOMUtils.smoothScroll("contact");
    },
    handleResize() {
      this.isWideScreen = window.innerWidth >= 768;
    },
  },
});
</script>

<style scoped>
.container {
  min-height: 90vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.name {
  font-size: 1.5em;
}
.profile-picture {
  height: 15em;
  width: 15em;
  border: solid 5px #faf3dd;
  border-radius: 20px;
  margin-bottom: 2em;
}

.button {
  padding: 0.5em 1.5em;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #302f4d;
  background-color: #faf3dd;
  border: none;
  border-radius: 50px;
  font-size: 1.15em;
}
.button:hover {
  color: #302f4d;
  background-color: #eddfef;
}
</style>
