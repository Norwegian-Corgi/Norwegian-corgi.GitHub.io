<template>
  <div class="icon-container margin-bottom-1">
    <a :href="link" target="#">
      <img
        class="icon"
        :src="require(`@/assets/logos/${icon}.svg`)"
        :alt="altText"
      />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ClickableIcon",
  props: {
    icon: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    altText: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.icon-container {
  background: rgba(255, 255, 255, 0.1);
  border: solid 1px #06070e;
  border-radius: 20px;
  width: fit-content;
}
.icon-container:hover {
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.icon {
  height: 2em;
  width: 2em;
  padding: 1em;
}
</style>
