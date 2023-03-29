<template>
  <div class="container margin-bottom-1">
    <div>
      <span class="name">{{ name }}</span>
      <span class="flex-column">
        <span class="margin-top-05">{{ start }} - {{ end }}</span>
        <span class="margin-top-05">{{ location }}</span>
      </span>
    </div>
    <div class="description">
      <span class="title">{{ title }}</span>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DetailCard",
  props: {
    name: {
      type: String,
      required: true,
    },
    start: {
      type: String,
      required: true,
    },
    end: {
      type: String,
      default: "Present",
    },
    location: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 1em;
}
@media (max-width: 768px) {
  .container {
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: 1fr 3fr;
    grid-gap: 1em;
  }
}
.name {
  font-size: 1.5em;
}
.description {
  font-size: clamp(16px, 1.15vw, 1.15vw);
  line-height: 1.5;
}
.title {
  font-size: 1.25em;
}
</style>
