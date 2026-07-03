<template>
  <div class="workshops-view">
    <section class="bg-white px-6 py-20 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            Technical Education Academy
          </span>
          <h1 class="mt-2 text-4xl font-bold text-slate-900">Workshops</h1>
          <p class="mx-auto mt-3 max-w-3xl text-slate-600">
            Explore short-duration workshops designed for hands-on learning, faculty development,
            and practical exposure to emerging technologies.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="workshop in workshops"
            :key="workshop.slug"
            class="group flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-primary)]/20 hover:shadow-xl"
          >
            <div class="mb-4 flex items-center justify-between">
              <span
                class="rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]"
              >
                {{ workshop.duration }}
              </span>
            </div>

            <h3 class="text-xl font-bold text-slate-900">
              {{ workshop.title }}
            </h3>

            <p class="mt-3 text-sm text-slate-600">
              {{ workshop.description }}
            </p>

            <ul class="mt-5 space-y-2">
              <li
                v-for="feature in workshop.features"
                :key="feature"
                class="flex items-start gap-2 text-sm text-slate-700"
              >
                <span class="text-[var(--color-primary)]">•</span>
                <span>{{ feature }}</span>
              </li>
            </ul>

            <div class="mt-auto flex items-center gap-4 pt-6">
              <a
                v-if="workshop.brochureUrl"
                :href="workshop.brochureUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-semibold text-slate-600 hover:text-[var(--color-primary)]"
              >
                View Brochure
              </a>

              <RouterLink
                :to="`/courses/workshops/${workshop.slug}/apply`"
                class="ml-auto rounded-full bg-teal-600 px-5 py-2 text-sm font-semibold text-white hover:bg-[var(--color-primary)]"
              >
                Apply
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { workshops } from '@/data/academyCatalog'
import { RouterLink } from 'vue-router'
</script>
