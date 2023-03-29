<template>
  <nav>
    <div class="navbar">
      <div class="container nav-container">
        <input
          class="checkbox"
          type="checkbox"
          v-model="menuOpen"
          @click="toggle"
        />
        <div class="hamburger-lines">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </div>
        <div class="menu-items">
          <ul>
            <li v-for="[name, link] in links" :key="name">
              <span @click="scroll(link)">{{ name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DOMUtils from "@/utils/DOMUtils";

export default defineComponent({
  name: "HamburgerMenu",
  props: {
    links: {
      type: Map,
      required: true,
    },
  },
  data: function () {
    return {
      menuOpen: false,
    };
  },
  methods: {
    scroll(to: string) {
      DOMUtils.smoothScroll(to);
      this.toggle();
    },
    toggle() {
      this.menuOpen = !this.menuOpen;
    },
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

.container {
  max-width: 100vw;
  margin: auto;
}

.navbar {
  width: 100%;
}

.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
}

.navbar .menu-items {
  display: flex;
}

.navbar .nav-container li {
  list-style: none;
}

.nav-container {
  display: block;
  position: relative;
  height: 60px;
}

.nav-container .checkbox {
  position: absolute;
  display: block;
  width: 32px;
  top: 20px;
  left: 20px;
  z-index: 5;
  opacity: 0;
  cursor: pointer;
}

.nav-container .hamburger-lines {
  height: 26px;
  width: 32px;
  position: absolute;
  top: 17px;
  left: 20px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.nav-container .hamburger-lines .line {
  display: block;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #302f4d;
}

.nav-container .hamburger-lines .line1 {
  transform-origin: 0 0;
  transition: transform 0.4s ease-in-out;
}

.nav-container .hamburger-lines .line2 {
  transition: transform 0.2s ease-in-out;
}

.nav-container .hamburger-lines .line3 {
  transform-origin: 0 100%;
  transition: transform 0.4s ease-in-out;
}

.navbar .menu-items {
  background: #dabfff;
  color: #302f4d;
  padding-top: 120px;
  height: 100vh;
  width: 100%;
  transform: translate(-150%);
  display: flex;
  flex-direction: column;
  margin-left: -40px;
  padding-left: 50px;
  transition: transform 0.5s ease-in-out;
  text-align: center;
}

.navbar .menu-items li {
  margin-bottom: 1.2rem;
  font-size: 1.5rem;
  font-weight: 500;
}

.nav-container input[type="checkbox"]:checked ~ .menu-items {
  transform: translateX(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line1 {
  transform: rotate(45deg);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line2 {
  transform: scaleY(0);
}

.nav-container input[type="checkbox"]:checked ~ .hamburger-lines .line3 {
  transform: rotate(-45deg);
}
</style>
