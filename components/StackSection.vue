<script setup lang="ts">
type Tech = {
  name: string;
  icon: string;
}

// Primary stack — rendered as tiles
const core: Array<Tech> = [
  {name: "Java", icon: "i-grommet-icons-java"},
  {name: "TypeScript", icon: "i-grommet-icons-code"},
  {name: "Spring Boot", icon: "i-grommet-icons-deploy"},
  {name: "Vue / Nuxt", icon: "i-grommet-icons-nodes"},
  {name: "React", icon: "i-grommet-icons-cube"},
  {name: "PostgreSQL", icon: "i-grommet-icons-database"},
  {name: "Docker", icon: "i-grommet-icons-docker"},
  {name: "Nginx", icon: "i-grommet-icons-server"},
  {name: "Keycloak", icon: "i-grommet-icons-secure"},
  {name: "Jira", icon: "i-grommet-icons-tasks"},
]

// Supporting tools — rendered as chips
const tools: Array<string> = ["JUnit5", "Mockito", "Git", "VS Code", "IntelliJ", "HTML/CSS"]
</script>

<template>
  <section id="stack" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-16">
    <section-heading title="CORE_STACK" centered/>

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

    <div class="mt-6 flex flex-wrap justify-center gap-2">
      <span
          v-for="tool in tools"
          :key="tool"
          class="rounded border border-outline-variant px-3 py-1 font-label text-[0.65rem] tracking-label text-content-variant"
      >
        {{ tool }}
      </span>
    </div>
  </section>
</template>
