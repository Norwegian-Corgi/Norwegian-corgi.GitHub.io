<template>
  <div>
    <div class="flex-column center">
      <span
        v-if="heading.length > 0"
        class="section-heading margin-top-1 underline"
        >{{ heading }}</span
      >
      <div class="section">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Section",
  props: {
    heading: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped>
.center {
  align-items: center;
}
.section {
  width: 70vw;
}
.section-heading {
  font-size: 2.5em;
  width: 70vw;
}
</style>
