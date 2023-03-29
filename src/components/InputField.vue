<template>
  <div class="flex-column">
    <label class="input-label">{{ label }}</label>
    <input
      class="input"
      :name="name"
      :type="inputType"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputField",
  emits: ["update:modelValue"],
  props: {
    label: {
      type: String,
      required: true,
    },
    inputType: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped>
.input-label {
  font-size: 1.5em;
}
.input {
  font-size: 1.5em;
  height: 1.5em;
  border: solid 3px #06070e;
  border-radius: 10px;
}
</style>
