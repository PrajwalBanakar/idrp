<script setup lang="ts">
import ProgramHeroSection from '@/components/program/ProgramHeroSection.vue'
import ProgramIntroSection from '@/components/program/ProgramIntroSection.vue'
import ProgramValueSection from '@/components/program/ProgramValueSection.vue'
import ProgramCTASection from '@/components/program/ProgramCTASection.vue'
import { rgepProjectMonitoringUnit } from '@/data/rgep'

import { rgepHighlights, rgepInnovators, rgepPage, rgepSupportPoints } from '@/data/rgep'
</script>

<template>
  <div class="rgep-view bg-white">
    <ProgramHeroSection v-bind="rgepPage.hero" />

    <ProgramIntroSection
      :eyebrow="rgepPage.intro.eyebrow"
      :title="rgepPage.intro.title"
      :paragraphs="rgepPage.intro.paragraphs"
      :image="rgepPage.intro.image"
      :image-alt="rgepPage.intro.imageAlt"
      :details="rgepPage.intro.details"
    />
    <section class="bg-slate-50 px-6 py-14 md:px-12 lg:px-16 lg:py-20">
      <div class="mx-auto max-w-7xl">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
            Program Snapshot
          </p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Key details of RGEP support
          </h2>
          <p class="mt-4 text-base leading-8 text-slate-600">
            RGEP is structured to reduce uncertainty during early innovation stages while helping
            founders move from ideas toward execution-ready outcomes.
          </p>
        </div>

        <div class="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="item in rgepHighlights"
            :key="item.label"
            class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p class="text-3xl font-semibold tracking-tight text-slate-900">
              {{ item.value }}
            </p>
            <p class="mt-2 text-sm leading-6 text-slate-600">
              {{ item.label }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <ProgramValueSection
      :eyebrow="rgepPage.value.eyebrow"
      :title="rgepPage.value.title"
      :items="rgepPage.value.items"
      :image="rgepPage.value.image"
      :image-alt="rgepPage.value.imageAlt"
    />

    <section class="bg-white px-6 py-14 md:px-12 lg:px-16 lg:py-20">
  <div class="mx-auto max-w-7xl">
    <div class="max-w-3xl">
      <p class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
        Project Monitoring Unit
      </p>
      <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
        {{ rgepProjectMonitoringUnit.title }}
      </h2>
      <p class="mt-4 text-base leading-8 text-slate-600">
        {{ rgepProjectMonitoringUnit.description }}
      </p>
    </div>
  </div>
</section>

    <section class="bg-white px-6 py-14 md:px-12 lg:px-16 lg:py-20">
      <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
            What RGEP Enables
          </p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Building stronger entrepreneurial beginnings
          </h2>
          <p class="mt-4 text-base leading-8 text-slate-600">
            The program is designed to help innovators sustain momentum, stay accountable, and
            progress toward outcomes with real business potential.
          </p>
        </div>

        <div class="grid gap-4">
          <article
            v-for="point in rgepSupportPoints"
            :key="point"
            class="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm"
          >
            <p class="text-sm leading-7 text-slate-700">
              {{ point }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="bg-slate-50 px-6 py-14 md:px-12 lg:px-16 lg:py-20">
      <div class="mx-auto max-w-7xl">
        <div class="max-w-3xl">
          <p class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
            Innovators
          </p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Current innovators under RGEP
          </h2>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-2">
          <article
            v-for="innovator in rgepInnovators"
            :key="`${innovator.name}-${innovator.projectTitle}`"
            class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <p
              class="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]"
            >
              Innovator
            </p>

            

            <h3 class="mt-3 text-2xl font-semibold tracking-tight text-slate-900">
              {{ innovator.name }}
            </h3>

            <div class="mt-5 space-y-4 text-sm leading-7 text-slate-600">
              <div>
                <p class="font-semibold text-slate-900">Project Title</p>
                <p>{{ innovator.projectTitle }}</p>
              </div>

              <div>
                <p class="font-semibold text-slate-900">Email</p>
                <a
                  :href="`mailto:${innovator.email}`"
                  class="text-[var(--color-primary)] transition hover:text-teal-800 hover:underline"
                >
                  {{ innovator.email }}
                </a>
              </div>

              <div v-if="innovator.description">
  <p class="font-semibold text-slate-900">Overview</p>
  <p>{{ innovator.description }}</p>
</div>

              <div v-if="innovator.linkedin">
                <p class="font-semibold text-slate-900">LinkedIn</p>
                <a
                  :href="innovator.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-[var(--color-primary)] transition hover:text-teal-800 hover:underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <ProgramCTASection v-bind="rgepPage.cta" />
  </div>
</template>
