<template>
  <custom-section title="About me">
    <p class="mb-4 text-lg">
      Greetings, visitor! Originating from India, I embarked on a journey to Germany at the age of 18 to pursue my
      enthusiasm for Electrical Engineering and Informatics. Throughout my academic exploration, I immersed myself in
      the world of Full Stack Development, and it has become a passion that continues to captivate me.
    </p>
    <p class="mb-4 text-lg">
      In the last two and a half years, I've amassed substantial expertise in crafting efficient and scalable web
      applications. This journey has been nothing short of exhilarating, and my enthusiasm remains unwavering as I
      eagerly embrace fresh challenges, continuously exploring the boundless possibilities within the realm of software
      development.
    </p>
    <p class="mb-4 text-lg">
      Outside of work, I derive immense pleasure from staying abreast of emerging technologies through reading and
      engaging in hands-on experimentation with personal projects. As a perpetual learner, I find deep satisfaction in
      continually broadening my knowledge and translating it into practical applications.
    </p>
    <p class="mb-4 text-lg">
      I'm excited to be a part of this dynamic field and eagerly anticipate collaborating with like-minded individuals
      who share my passion. Should you have any inquiries or wish to explore potential opportunities, feel free to
      <a class="text-green-custom underline" href="mailto:abdealisabun8@gmail.com">reach out</a>. Let's
      embark on the journey of creating something extraordinary together.
    </p>
    <h2 class="mt-12 mb-2 text-3xl text-green-custom">Tech I use</h2>
    <div class="flex flex-wrap gap-2">
      <skill-tag v-for="(skill, index) in skills" :key="index">{{ skill }}</skill-tag>
    </div>
  </custom-section>
</template>

<script setup lang="ts">
const skills: Array<string> = [
  "Java", "HTML", "CSS", "TypeScript", "Spring Boot", "Vue", "Nuxt", "React", "JUnit5", "Mockito", "PostgreSQL",
  "Git", "Github", "Gitlab", "IntelliJ", "VS Code", "Keycloak", "Nginx", "Docker", "Jira"
]
</script>