<template>
  <div class="icon-container flex-row margin-top-1">
    <img
      class="icon"
      :src="require(`@/assets/logos/${icon}.svg`)"
      :alt="altText"
    />
    <span class="margin-right-1">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "IconWithText",
  props: {
    icon: {
      type: String,
      default: "",
    },
    text: {
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
  border: solid 2px #302f4d;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  width: fit-content;
}
.icon {
  height: 2em;
  width: 2em;
  padding: 1em;
}
</style>
