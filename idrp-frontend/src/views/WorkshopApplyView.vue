<template>
  <div v-if="applyPage" class="workshop-apply-view">
    <section class="bg-white px-6 py-20 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-12 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            {{ applyPage.eyebrow }}
          </span>
          <h1 class="mt-2 text-3xl font-bold text-slate-900 md:text-4xl">
            {{ applyPage.title }}
          </h1>
          <p class="mx-auto mt-3 max-w-2xl text-slate-600">
            {{ applyPage.description }}
          </p>
        </div>

        <div class="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <aside class="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div class="flex items-start justify-between gap-4">
              <span
                class="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]"
              >
                {{ applyPage.workshop.duration }}
              </span>

              <a
                v-if="applyPage.workshop.brochureUrl"
                :href="applyPage.workshop.brochureUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-semibold text-slate-600 hover:text-[var(--color-primary)]"
              >
                View Brochure
              </a>
            </div>

            <h2 class="mt-5 text-2xl font-bold leading-tight text-slate-900">
              {{ applyPage.workshop.title }}
            </h2>

            <p class="mt-4 text-sm leading-7 text-slate-600">
              {{ applyPage.workshop.description }}
            </p>

            <div class="mt-8">
              <h3 class="text-sm font-semibold uppercase tracking-wider text-slate-900">
                What this workshop includes
              </h3>

              <ul class="mt-4 space-y-3">
                <li
                  v-for="feature in applyPage.workshop.features"
                  :key="feature"
                  class="flex items-start gap-3"
                >
                  <span
                    class="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-[var(--color-primary)]"
                  >
                    ✓
                  </span>
                  <span class="text-sm leading-6 text-slate-700">
                    {{ feature }}
                  </span>
                </li>
              </ul>
            </div>

            <div class="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
              <p class="text-sm font-semibold text-slate-900">Workshop Enquiry</p>
              <p class="mt-2 text-sm leading-6 text-slate-600">
                Fill in the form to express interest. Our team will contact you with the next steps,
                schedule details, and participation information.
              </p>
            </div>
          </aside>

          <div>
            <WorkshopApplyFormSection :workshop="applyPage.workshop" />
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="py-20 text-center">
    <h2 class="text-2xl font-semibold text-slate-900">Workshop not found</h2>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getWorkshopApplyPageBySlug } from '@/data/academyCatalog'
import WorkshopApplyFormSection from '@/components/academy/WorkshopApplyFormSection.vue'

const route = useRoute()

const applyPage = computed(() => getWorkshopApplyPageBySlug(String(route.params.slug ?? '')))
</script>
