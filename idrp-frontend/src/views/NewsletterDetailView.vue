<template>
  <div
    v-if="newsletter"
    class="bg-[#f6f3ed] px-4 py-6 sm:px-6 sm:py-8 md:px-12 md:py-10 lg:px-16 lg:py-14"
  >
    <div class="mx-auto max-w-7xl">
      <NewsletterReaderHeader
        :title="newsletter.title"
        :issue="newsletter.issue"
        :date="newsletter.date"
        :spread-label="newsletter.date"
      />

      <NewsletterReaderBook :newsletter="newsletter" />
    </div>
  </div>

  <section v-else class="bg-[#f6f3ed] px-4 py-16 sm:px-6 sm:py-20 md:px-12 md:py-24 lg:px-16">
    <div
      class="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-10"
    >
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
        Newsletter
      </p>
      <h1 class="mt-3 text-3xl font-bold tracking-tight text-slate-900">Issue not found</h1>
      <p class="mt-4 text-base leading-7 text-slate-600">
        The newsletter you are looking for does not exist or is currently unavailable.
      </p>

      <RouterLink
        to="/resources"
        class="mt-8 inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary)]"
      >
        Back to Resources
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import NewsletterReaderHeader from '@/components/resources/NewsletterReaderHeader.vue'
import NewsletterReaderBook from '@/components/resources/NewsletterReaderBook.vue'
import { getNewsletterBySlug } from '@/data/newsletters'

const route = useRoute()

const newsletter = computed(() => {
  const slug = String(route.params.slug ?? '')
  return getNewsletterBySlug(slug)
})
</script>
