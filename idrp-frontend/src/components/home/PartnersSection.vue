<template>
  <section class="bg-white px-6 py-20 md:px-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
          Ecosystem
        </span>
        <h2
          class="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
        >
          Our Partners
        </h2>
        <p
          class="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg"
        >
          A growing network of academic, industry, ecosystem, and institutional partners helping
          strengthen innovation, collaboration, and entrepreneurial growth.
        </p>
      </div>

      <div
        class="mb-10 flex flex-col gap-4 lg:mb-12 lg:flex-row lg:items-center lg:justify-between"
      >
        <!-- Tabs -->
        <div class="flex flex-wrap gap-3">
          <button
            v-for="cat in partnerCategories"
            :key="cat.key"
            type="button"
            class="rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200"
            :class="
              activePartnerTab === cat.key
                ? 'bg-[var(--color-primary)] text-white shadow-md'
                : 'bg-slate-100 text-slate-600 hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary)]'
            "
            @click="activePartnerTab = cat.key"
          >
            {{ cat.label }}
          </button>
        </div>

        <!-- Search -->
        <div class="w-full max-w-xs">
          <label for="partner-search" class="sr-only">Search partners</label>
          <div class="relative">
            <span
              class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400"
            >
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                />
              </svg>
            </span>
            <input
              id="partner-search"
              v-model.trim="searchQuery"
              type="text"
              placeholder="Search"
              class="w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] py-2.5 pl-9 pr-3 text-sm text-slate-700 outline-none transition focus:border-[var(--color-primary)] focus:bg-white focus:ring-4 focus:ring-[var(--color-primary-soft)]"
            />
          </div>
        </div>
      </div>

      <!-- Grid -->
      <div
        v-if="filteredPartners.length"
        class="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      >
        <component
          :is="partner.websiteUrl ? 'a' : 'article'"
          v-for="partner in filteredPartners"
          :key="partner.name"
          :href="partner.websiteUrl || undefined"
          :target="partner.websiteUrl ? '_blank' : undefined"
          :rel="partner.websiteUrl ? 'noopener noreferrer' : undefined"
          class="group flex min-h-[150px] flex-col items-center justify-center gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-5 text-center transition-all duration-300 sm:min-h-[165px] sm:p-6"
          :class="'hover:-translate-y-1 hover:border-[var(--color-primary)]/20 hover:bg-white hover:shadow-md'"
        >
          <!-- Logo -->
          <div
            class="flex h-16 w-full items-center justify-center overflow-hidden rounded-xl border border-slate-100 bg-white px-3 shadow-sm"
          >
            <img
              v-if="partner.logo"
              :src="partner.logo"
              :alt="`${partner.name} logo`"
              class="max-h-10 w-auto object-contain"
            />
            <div
              v-else
              class="flex h-full w-full items-center justify-center rounded-lg text-base font-bold text-white"
              :style="{ background: partner.color }"
            >
              {{ partner.abbr }}
            </div>
          </div>

          <!-- Name -->
          <p
            class="text-xs font-semibold leading-5 text-slate-600 transition-colors duration-300 group-hover:text-[var(--color-primary)] sm:text-sm"
          >
            {{ partner.name }}
          </p>
        </component>
      </div>

      <!-- Empty -->
      <div
        v-else
        class="rounded-2xl border border-dashed border-slate-300 bg-[var(--color-bg-soft)] px-6 py-10 text-center text-slate-500"
      >
        No partners found for “{{ searchQuery }}”.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Partner } from '@/types/partners'

type HomePartnerTab = {
  key: 'all' | Partner['category']
  label: string
}

const props = defineProps<{
  partnerCategories: HomePartnerTab[]
  allPartners: Partner[]
}>()

const activePartnerTab = ref<HomePartnerTab['key']>('all')
const searchQuery = ref('')

const filteredPartners = computed(() => {
  const byCategory =
    activePartnerTab.value === 'all'
      ? props.allPartners
      : props.allPartners.filter((partner) => partner.category === activePartnerTab.value)

  if (!searchQuery.value) return byCategory

  const query = searchQuery.value.toLowerCase()

  return byCategory.filter((partner) => partner.name.toLowerCase().includes(query))
})
</script>
