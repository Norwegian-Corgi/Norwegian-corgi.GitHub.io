<template>
  <div class="nav-bar">
    <ul class="links">
      <li v-for="[name, link] in links" :key="name">
        <span class="link" @click="scroll(link)">{{ name }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DOMUtils from "@/utils/DOMUtils";

export default defineComponent({
  name: "NavigationBar",
  props: {
    links: {
      type: Map,
      required: true,
    },
  },
  methods: {
    scroll(to: string) {
      DOMUtils.smoothScroll(to);
    },
  },
});
</script>

<style scoped>
.nav-bar {
  display: flex;
  justify-content: space-evenly;
  height: 10vh;
}

.links {
  font-size: 1.25em;
  float: right;
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  list-style-type: none;
  margin-right: 2em;
}

li {
  margin-right: 3em;
}

.link {
  box-shadow: inset 0 0 0 0 #faf3dd;
  color: #302f4d;
  padding: 0 0.25rem;
  margin: 0 -0.25rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  text-decoration: none;
}

.link:hover {
  color: #302f4d;
  box-shadow: inset 200px 0 0 0 #faf3dd;
  cursor: pointer;
}
</style>
