<script setup lang="ts">
type Tech = {
  name: string;
  icon: string;
}

// Full stack — rendered as tiles
const core: Array<Tech> = [
  {name: "Java", icon: "i-grommet-icons-java"},
  {name: "TypeScript", icon: "i-simple-icons-typescript"},
  {name: "HTML5", icon: "i-simple-icons-html5"},
  {name: "CSS3", icon: "i-simple-icons-css3"},
  {name: "Spring Boot", icon: "i-simple-icons-springboot"},
  {name: "Vue / Nuxt", icon: "i-simple-icons-nuxt"},
  {name: "React", icon: "i-simple-icons-react"},
  {name: "PostgreSQL", icon: "i-simple-icons-postgresql"},
  {name: "Docker", icon: "i-simple-icons-docker"},
  {name: "Nginx", icon: "i-simple-icons-nginx"},
  {name: "Keycloak", icon: "i-simple-icons-keycloak"},
  {name: "JUnit5", icon: "i-simple-icons-junit5"},
  // Mockito has no brand icon in any collection — generic test glyph.
  {name: "Mockito", icon: "i-grommet-icons-test"},
  {name: "Git", icon: "i-simple-icons-git"},
  {name: "IntelliJ", icon: "i-simple-icons-intellijidea"},
  {name: "VS Code", icon: "i-simple-icons-visualstudiocode"},
  {name: "Jira", icon: "i-simple-icons-jira"},
  {name: "Claude Code", icon: "i-simple-icons-claudecode"},
]
</script>

<template>
  <section id="stack" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
    <section-heading title="Stack" icon="i-grommet-icons-cubes"/>

    <div class="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      <div
          v-for="tech in core"
          :key="tech.name"
          class="flex flex-col items-center gap-3 rounded-lg border border-outline-variant bg-surface-container px-4 py-5 transition-colors hover:border-primary hover:bg-surface-high"
      >
        <span :class="tech.icon" class="text-2xl text-content-variant"/>
        <span class="font-label text-xs tracking-label text-content">{{ tech.name }}</span>
      </div>
    </div>
  </section>
</template>
