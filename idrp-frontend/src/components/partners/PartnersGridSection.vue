<template>
  <section class="bg-slate-50 px-6 py-14 md:px-12 lg:px-16 lg:py-16">
    <div class="mx-auto max-w-7xl">
      <div class="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <span
            class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]"
          >
            Network
          </span>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Partnerships
          </h2>
        </div>

        <div class="w-full md:w-72">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search partners..."
            class="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
          />
        </div>
      </div>

      <div v-for="category in filteredCategories" :key="category.key" class="mb-14 last:mb-0">
        <div class="mb-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <div class="flex items-start gap-4">
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg text-white shadow-sm"
              :class="category.iconBgClass"
            >
              {{ category.icon }}
            </div>

            <div>
              <h3 class="text-2xl font-bold tracking-tight text-slate-900">
                {{ category.title }}
              </h3>

              <p class="mt-1 text-sm font-semibold" :class="category.textClass">
                {{ category.subtitle }}
              </p>

              <p class="mt-3 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base">
                {{ category.description }}
              </p>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap justify-center gap-4">
          <div
            v-for="partner in category.partners"
            :key="partner.name"
            class="w-[calc(50%-8px)] sm:w-[calc(33.333%-11px)] lg:w-[calc(25%-12px)] xl:w-[calc(16.666%-14px)]"
          >
            <PartnerCard :partner="partner" :hover-border-class="category.hoverBorderClass" />
          </div>
        </div>
      </div>

      <div v-if="filteredCategories.length === 0" class="py-16 text-center text-slate-500">
        No partners found.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import PartnerCard from '@/components/partners/PartnerCard.vue'
import type { PartnerCategory } from '@/types/partners'

const props = defineProps<{
  partnerCategories: PartnerCategory[]
}>()

const searchQuery = ref('')

const filteredCategories = computed(() => {
  const query = searchQuery.value.trim().toLowerCase()

  if (!query) {
    return props.partnerCategories
  }

  return props.partnerCategories
    .map((category) => ({
      ...category,
      partners: category.partners.filter((partner) => partner.name.toLowerCase().includes(query)),
    }))
    .filter((category) => category.partners.length > 0)
})
</script>
