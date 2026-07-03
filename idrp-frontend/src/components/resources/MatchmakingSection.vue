<template>
  <section class="bg-white px-6 py-24 md:px-16">
    <div class="mx-auto max-w-6xl">
      <div class="mb-14 text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          Startup Ecosystem
        </span>
        <h2 class="mt-2 text-4xl font-bold text-gray-900">Investor–Startup Matchmaking</h2>
        <p class="mx-auto mt-3 max-w-3xl text-gray-500">
          In addition to knowledge resources, IDRP can support structured matchmaking between
          startups and investors by aligning sector focus, stage, funding needs, and strategic fit.
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <article class="rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-10">
          <div class="mb-4 flex items-center gap-3">
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600 text-xl text-white"
            >
              🚀
            </div>
            <h3 class="text-2xl font-bold text-gray-900">For Startups</h3>
          </div>

          <p class="leading-relaxed text-gray-600">
            Founders can discover investors aligned with their domain, growth stage, funding ask,
            and long-term vision.
          </p>

          <ul class="mt-6 space-y-3 text-sm leading-relaxed text-gray-600">
            <li>• Startup profiling by sector, stage, traction, and capital requirement</li>
            <li>• Investor discovery based on strategic relevance and thesis alignment</li>
            <li>• Mentor-guided shortlisting and pitch-readiness support</li>
            <li>• Curated introductions and meeting facilitation</li>
          </ul>
        </article>

        <article class="rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-10">
          <div class="mb-4 flex items-center gap-3">
            <div
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-xl text-white"
            >
              💰
            </div>
            <h3 class="text-2xl font-bold text-gray-900">For Investors</h3>
          </div>

          <p class="leading-relaxed text-gray-600">
            Investors can access a higher quality startup pipeline filtered by sector, maturity,
            funding fit, and ecosystem readiness.
          </p>

          <ul class="mt-6 space-y-3 text-sm leading-relaxed text-gray-600">
            <li>• Investor preference capture across sectors, stage, geography, and cheque size</li>
            <li>• Startup recommendations through curated fit assessment</li>
            <li>• Access to startup summaries, deck references, and traction snapshots</li>
            <li>• Support for demo days, focused meetings, and thematic showcases</li>
          </ul>
        </article>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
        <article
          v-for="step in steps"
          :key="step.step"
          class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
        >
          <span class="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
            Step {{ step.step }}
          </span>
          <h4 class="mt-2 text-xl font-bold text-gray-900">{{ step.title }}</h4>
          <p class="mt-3 text-sm leading-relaxed text-gray-600">
            {{ step.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { MatchmakingStep } from '@/types/resources'

defineProps<{
  steps: MatchmakingStep[]
}>()
</script>
