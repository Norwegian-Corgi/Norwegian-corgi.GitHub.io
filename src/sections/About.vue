<template>
  <div>
    <Section heading="Who am I?">
      <div class="about-me">
        <p>
          My name is Abde Ali Sabunwala, and I am originally from India. At the
          age of 18, I moved to Germany to pursue my passion for Electrical
          Engineering and Informatics. During my studies, I ventured into the
          world of Full Stack Development, and I've been hooked ever since.
        </p>
        <p>
          Over the past two years, I have gained extensive experience in
          developing efficient and scalable web applications. It's been an
          exciting journey, and I'm always eager to take on new challenges and
          explore the endless possibilities of software development.
        </p>
        <p>
          When I'm not working, I enjoy reading up on new technologies and
          experimenting with personal projects to further develop my skills. As
          a lifelong learner, I find great satisfaction in expanding my
          knowledge and implementing it in practical ways.
        </p>
        <p>
          I'm thrilled to be a part of this dynamic field and look forward to
          collaborating with others who share my passion. If you have any
          questions or would like to discuss potential opportunities, please
          don't hesitate to <a @click="toContactMe">reach out</a>. Let's create
          something amazing together.
        </p>
      </div>
    </Section>
    <Section heading="Technologies I use">
      <div class="flex-row icons">
        <icon-with-text alt-text="Java logo" icon="java" text="Java" />
        <icon-with-text
          alt-text="Springboot logo"
          icon="spring"
          text="Springboot"
        />
        <icon-with-text
          alt-text="Postgresql logo"
          icon="postgresql"
          text="PostgreSQL"
        />
        <icon-with-text alt-text="HTML logo" icon="html" text="HTML" />
        <icon-with-text alt-text="CSS logo" icon="css" text="CSS" />
        <icon-with-text
          alt-text="JavaScript logo"
          icon="javascript"
          text="JavaScript"
        />
        <icon-with-text
          alt-text="TypeScript logo"
          icon="typescript"
          text="TypeScript"
        />
        <icon-with-text alt-text="Vue logo" icon="vue" text="Vue3" />
        <icon-with-text alt-text="Git logo" icon="git" text="Git" />
        <icon-with-text
          alt-text="IntelliJ logo"
          icon="intellij"
          text="IntelliJ"
        />
        <icon-with-text alt-text="Jira logo" icon="jira" text="Jira" />
        <icon-with-text alt-text="Triple dots" icon="dots" text="and more" />
      </div>
    </Section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DOMUtils from "@/utils/DOMUtils";
import Section from "@/components/Section.vue";
import IconWithText from "@/components/IconWithText.vue";

export default defineComponent({
  name: "About",
  components: { IconWithText, Section },
  methods: {
    toContactMe() {
      DOMUtils.smoothScroll("contact");
    },
  },
});
</script>

<style scoped>
.about-me {
  width: 70vw;
  color: #302f4d;
  font-size: clamp(16px, 1.15vw, 1.15vw);
  line-height: 1.5;
}
.icons {
  flex-wrap: wrap;
  justify-content: space-between;
}
a {
  border-bottom: solid 1px;
  color: #302f4d;
}
a:hover {
  cursor: pointer;
}
</style>
