<template>
  <form
    target="_self"
    class="form-container"
    action="https://formsubmit.co/abdealisabunwala.work@gmail.com"
    method="POST"
  >
    <div
      :class="isWideScreen ? 'flex-row' : 'flex-column'"
      class="fill-width margin-bottom-1"
    >
      <input-field
        :class="isWideScreen ? 'margin-right-1' : ''"
        class="flex-grow-1"
        label="Name"
        name="name"
        v-model="name"
      />
      <input-field
        class="flex-grow-1"
        input-type="email"
        label="Email"
        name="email"
        v-model="email"
      />
    </div>
    <input-field
      class="margin-bottom-1 fill-width"
      label="Subject"
      name="_subject"
      v-model="subject"
    />
    <div class="flex-column fill-width margin-bottom-1">
      <label class="message-label">Message</label>
      <textarea class="message" name="message" v-model="message"></textarea>
    </div>
    <button class="button margin-bottom-1" type="submit">Send</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import InputField from "@/components/InputField.vue";

export default defineComponent({
  name: "ContactForm",
  components: { InputField },
  data: function () {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
      isWideScreen: true,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.isWideScreen = window.innerWidth >= 768;
    },
  },
});
</script>

<style scoped>
.fill-width {
  width: 100%;
}
.form-container {
  align-items: center;
  line-height: 1.5;
}
.message-label {
  font-size: 1.5em;
}
.message {
  font-size: 1.5em;
  font-family: "Roboto Thin 100", sans-serif;
  height: 10em;
  border: solid 3px #06070e;
  border-radius: 10px;
}
.flex-grow-1 {
  flex-grow: 1;
}
.button {
  padding: 0.5em 1.5em;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #302f4d;
  background-color: #dabfff;
  border: none;
  border-radius: 50px;
  font-size: 1.15em;
}
.button:hover {
  color: #dabfff;
  background-color: #302f4d;
}
</style>
