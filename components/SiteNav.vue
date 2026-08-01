<script setup lang="ts">
type NavLink = {
  id: string;
  label: string;
};

const links: Array<NavLink> = [
  { id: "about", label: "About" },
  { id: "stack", label: "Stack" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
];

const activeId = ref<string>("");
const menuOpen = ref(false);

// Scroll-spy: highlight the section whose top sits closest to the anchor landing line
// (just below the nav). Sections stacked vertically resolve to whichever has just come to
// rest there; Experience and Education sit side by side with identical tops, so that tie
// falls to the earlier nav entry rather than to whichever observer entry fired last.
const ANCHOR_OFFSET = 96; // matches scroll-mt-24 on the section targets

let frame = 0;

const syncActive = () => {
  const nearest = links
    .map(({ id }) => {
      const section = document.getElementById(id);
      return section
        ? {
            id,
            distance: Math.abs(
              section.getBoundingClientRect().top - ANCHOR_OFFSET,
            ),
          }
        : null;
    })
    .filter(
      (entry): entry is { id: string; distance: number } => entry !== null,
    )
    .reduce(
      (best, entry) =>
        best === null || entry.distance < best.distance ? entry : best,
      null as { id: string; distance: number } | null,
    );

  if (nearest) activeId.value = nearest.id;
};

const onScroll = () => {
  if (frame) return;
  frame = requestAnimationFrame(() => {
    frame = 0;
    syncActive();
  });
};

onMounted(() => {
  syncActive();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
});

onBeforeUnmount(() => {
  if (frame) cancelAnimationFrame(frame);
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
});
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-outline-variant/40 bg-surface/80 backdrop-blur-md"
  >
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a
        href="#home"
        class="font-label text-xs font-bold tracking-wider text-content sm:text-sm"
      >
        Abde Ali Sabunwala
      </a>

      <ul class="hidden items-center gap-8 md:flex">
        <li v-for="link in links" :key="link.id">
          <a
            :href="`#${link.id}`"
            class="relative font-label text-sm tracking-label transition-colors hover:text-primary"
            :class="
              activeId === link.id ? 'text-primary' : 'text-content-variant'
            "
          >
            {{ link.label }}
            <span
              v-if="activeId === link.id"
              class="absolute -bottom-1.5 left-0 h-px w-full bg-primary"
            />
          </a>
        </li>
      </ul>

      <!-- Only holds the mobile menu toggle now, so it collapses on desktop and lets the
           links sit flush right instead of stranding them against an empty flex slot. -->
      <div class="flex items-center gap-4 md:hidden">
        <!-- <span class="hidden font-label text-xs tracking-label text-content-muted sm:inline">DE</span> -->
        <button
          class="text-2xl text-content md:hidden"
          :class="menuOpen ? 'i-grommet-icons-close' : 'i-grommet-icons-menu'"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="menuOpen"
          @click="menuOpen = !menuOpen"
        />
      </div>
    </nav>

    <ul
      v-if="menuOpen"
      class="border-t border-outline-variant/40 px-6 py-4 md:hidden"
    >
      <li v-for="link in links" :key="link.id">
        <a
          :href="`#${link.id}`"
          class="block py-2 font-label text-sm tracking-label"
          :class="
            activeId === link.id ? 'text-primary' : 'text-content-variant'
          "
          @click="menuOpen = false"
        >
          {{ link.label }}
        </a>
      </li>
    </ul>
  </header>
</template>
