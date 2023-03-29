<template>
  <div>
    <Section heading="Contact me">
      <contact-form class="flex-column form" />
      <div class="flex-row icons">
        <clickable-icon
          class="margin-right-1"
          icon="linkedin"
          link="https://www.linkedin.com/in/abdeali-sabunwala-601143203/"
          alt-text="LinkedIn Icon"
        />
        <clickable-icon
          class="margin-right-1"
          icon="github"
          link="https://github.com/Norwegian-Corgi"
          alt-text="Github Icon"
        />
        <clickable-icon
          class="margin-right-1"
          icon="gmail"
          link="mailto:abdealisabunwala.work@gmail.com"
          alt-text="Gmail Icon"
        />
        <clickable-icon
          class="margin-right-1"
          icon="instagram"
          link="https://www.instagram.com/not.abdeali/"
          alt-text="Instagram Icon"
        />
        <a
          class="margin-top-1"
          :href="require('@/assets/Abde_Ali_Sabunwala_Resume.pdf')"
          download="Abde_Ali_Sabunwala_Resume.pdf"
        >
          <button class="button">Resume</button>
        </a>
      </div>
      <div class="flex-row copyright">
        <span>© 2023 Abde Ali Sabunwala</span>
      </div>
    </Section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Section from "@/components/Section.vue";
import ContactForm from "@/components/ContactForm.vue";
import ClickableIcon from "@/components/ClickableIcon.vue";

export default defineComponent({
  name: "Contact",
  components: { ClickableIcon, ContactForm, Section },
});
</script>

<style scoped>
.icons {
  flex-wrap: wrap;
  justify-content: center;
}
.copyright {
  justify-content: center;
  margin: 2em 0;
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
