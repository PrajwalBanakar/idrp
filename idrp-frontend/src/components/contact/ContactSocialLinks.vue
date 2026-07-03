<template>
  <div class="mt-8 border-t border-slate-200 pt-8">
    <span
      class="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-600"
    >
      Follow Us
    </span>

    <div class="mt-5 flex flex-wrap gap-3">
      <a
        v-for="social in socials"
        :key="social.name"
        :href="social.url"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal-300 hover:text-[var(--color-primary)]"
      >
        <span class="h-4 w-4" v-html="social.icon" />
        {{ social.name }}
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
type SocialLink = {
  name: string
  url: string
  icon: string
}

defineProps<{
  socials: SocialLink[]
}>()
</script>
