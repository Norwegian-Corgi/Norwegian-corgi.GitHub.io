<template>
  <section id="home" class="mx-auto max-w-6xl scroll-mt-24 px-6 py-20 md:py-32">
    <div class="flex flex-col items-center gap-12 md:flex-row md:justify-between md:gap-16">
      <div class="max-w-xl">
        <p class="mb-6 inline-block rounded border border-outline-variant px-3 py-1 font-label text-[0.65rem] tracking-wider text-content-variant">
          SYSTEM_STATUS:
          <span class="text-secondary">ONLINE</span>
        </p>

        <h1 class="font-display text-4xl font-extrabold leading-tight md:text-6xl">
          <span class="block text-content">Coding My Life:</span>
          <span class="block text-primary">One Line at a Time</span>
        </h1>

        <p class="mt-6 font-display text-base font-semibold leading-relaxed text-content-variant md:text-lg">
          Software Developer specializing in building efficient, scalable web applications and technical
          infrastructures.
        </p>

        <a
            href="#about"
            class="group mt-8 inline-flex items-center gap-3 rounded bg-primary px-5 py-2.5 font-label text-xs tracking-label text-primary-on transition-colors hover:bg-primary-container"
        >
          INIT_SEQUENCE
          <span class="i-grommet-icons-form-next text-lg transition-transform group-hover:translate-x-1"/>
        </a>
      </div>

      <figure class="w-full max-w-sm shrink-0 rounded-lg border border-outline-variant bg-surface-container p-2.5">
        <div class="relative overflow-hidden rounded">
          <img
              class="aspect-[4/5] w-full object-cover grayscale"
              src="@/assets/images/profile-pick.jpeg"
              alt="Abde Ali Sabunwala"
          />
          <figcaption
              class="absolute inset-x-0 bottom-0 bg-surface-lowest/80 px-3 py-2 font-label text-[0.6rem] leading-relaxed tracking-label text-content-variant backdrop-blur-sm"
          >
            <span class="block">NAME: ABDE_ALI_SABUNWALA</span>
            <span class="block">LOC: GERMANY // DE</span>
          </figcaption>
        </div>
      </figure>
    </div>
  </section>
</template>
