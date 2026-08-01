<script setup lang="ts">
type Job = {
  duration: string;
  company: string;
  role: string;
}

const jobs: Array<Job> = [
  {duration: "07-2023 - TODAY", company: "systemticks GmbH", role: "Software Developer"},
  {duration: "05-2022 - 06-2023", company: "FORCAM GmbH", role: "Fullstack Developer"},
  {duration: "05-2021 - 04-2022", company: "FORCAM GmbH", role: "Working Student"},
  {duration: "10-2020 - 03-2021", company: "YURI GmbH", role: "Intern"},
]
</script>

<template>
  <section class="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:gap-16">
    <div id="experience" class="scroll-mt-24">
      <section-heading title="Experience" icon="i-grommet-icons-briefcase"/>

      <ol class="relative mt-8 border-l border-outline-variant">
        <li v-for="(job, index) in jobs" :key="index" class="relative pb-8 pl-6 last:pb-0">
          <span
              class="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full"
              :class="index === 0 ? 'bg-primary ring-4 ring-primary/20' : 'bg-surface-bright'"
          />
          <p
              class="font-label text-[0.65rem] tracking-label"
              :class="index === 0 ? 'text-primary' : 'text-content-muted'"
          >
            {{ job.duration }}
          </p>
          <h3 class="mt-1 font-display text-base font-bold text-content">{{ job.role }}</h3>
          <p class="text-sm text-content-variant">{{ job.company }}</p>
        </li>
      </ol>
    </div>

    <div id="education" class="scroll-mt-24 space-y-6">
      <section-heading title="Education" icon="i-grommet-icons-book"/>

      <div class="rounded-lg border border-outline-variant bg-surface-container p-6">
        <div class="flex items-start gap-4">
          <span class="i-grommet-icons-workshop mt-1 shrink-0 text-xl text-primary"/>
          <div>
            <h3 class="font-display text-base font-bold text-content">Electrical Engineering and IT</h3>
            <p class="text-sm text-content-variant">Hochschule Ravensburg Weingarten</p>
            <p class="mt-2 font-label text-[0.65rem] tracking-label text-primary">03-2018 - 04-2022</p>
          </div>
        </div>
        <p class="mt-4 text-sm leading-relaxed text-content-variant">
          Specialized in Informatics and Software Systems, transitioning from hardware fundamentals to advanced
          full-stack architectures.
        </p>
      </div>

      <div class="rounded-lg border border-outline-variant bg-surface-container p-6">
        <h3 class="font-display text-base font-bold text-content">Let's build something extraordinary.</h3>
        <a
            href="mailto:abdealisabun8@gmail.com"
            class="mt-4 flex items-center justify-center rounded bg-primary px-4 py-2.5 font-label text-xs tracking-label text-primary-on transition-colors hover:bg-primary-container"
        >
          REACH_OUT_BY_EMAIL
        </a>
      </div>
    </div>
  </section>
</template>
