<template>
  <span class="typewrite">
    <span class="wrap">{{ currentText }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TypingText",
  props: {
    text: {
      type: Array,
      required: true,
    },
    period: {
      type: Number,
      default: 500,
    },
  },
  data: function () {
    return {
      loopNumber: 0,
      currentText: "",
      isDeleting: false,
      delta: 200 - Math.random() * 100,
      iteration: 0,
    };
  },
  methods: {
    tick() {
      const txt = this.text[this.iteration] as string;
      if (this.isDeleting) {
        this.currentText = txt.substring(0, this.currentText.length - 1);
      } else {
        this.currentText = txt.substring(0, this.currentText.length + 1);
      }

      if (this.isDeleting && this.delta > 50) {
        this.delta /= 2;
      }

      if (!this.isDeleting && this.currentText === txt) {
        this.delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.currentText === "") {
        this.isDeleting = false;
        this.delta = 200 - Math.random() * 100;
        if (this.iteration === this.text.length - 1) {
          this.iteration = 0;
        } else {
          this.iteration++;
        }
      }
      setTimeout(this.tick, this.delta);
    },
  },
  mounted() {
    this.tick();
  },
});
</script>

<style scoped>
.typewrite {
  width: 75vw;
  font-size: 50px;
  margin-bottom: 0.5em;
}
@media (max-width: 800px) {
  .typewrite {
    width: 60vw;
    font-size: 50px;
    margin-bottom: 0.5em;
    overflow-wrap: break-word;
  }
}
.wrap {
  border-right: 0.08em solid #302f4d;
}
</style>
