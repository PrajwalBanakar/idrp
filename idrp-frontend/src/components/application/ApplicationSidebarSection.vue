<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { ProgramMeta } from '@/types/application'

defineProps<{
  program: ProgramMeta
  evaluationPoints: string[]
}>()
</script>

<template>
  <aside class="space-y-6 lg:sticky lg:top-24">
    <section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <span
        class="inline-flex items-center rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]"
      >
        Program Snapshot
      </span>

      <div class="mt-5 space-y-4">
        <div>
          <p class="text-sm font-medium text-slate-500">Program</p>
          <h3 class="mt-1 text-xl font-bold text-slate-900">
            {{ program.title }}
          </h3>
        </div>

        <div class="rounded-2xl bg-slate-50 px-4 py-4">
          <p class="text-sm leading-7 text-slate-600">
            {{ program.meta }}
          </p>
        </div>
      </div>
    </section>

    <section class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <span
        class="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-700"
      >
        What We Look For
      </span>

      <ul class="mt-5 space-y-3">
        <li
          v-for="item in evaluationPoints"
          :key="item"
          class="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3"
        >
          <span
            class="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs font-bold text-[var(--color-primary)]"
          >
            ✓
          </span>
          <span class="text-sm leading-6 text-slate-700">
            {{ item }}
          </span>
        </li>
      </ul>
    </section>

    <section class="relative overflow-hidden rounded-3xl bg-slate-950 p-6 text-white shadow-xl">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-slate-950 via-teal-950 to-cyan-900" />
        <div
          class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(45,212,191,0.16),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(34,211,238,0.12),_transparent_28%)]"
        />
      </div>

      <div class="pointer-events-none absolute inset-0">
        <div class="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-white/5 blur-2xl" />
        <div class="absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-white/5 blur-2xl" />
      </div>

      <div class="relative z-10 flex flex-col gap-4">
        <span
          class="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-100 backdrop-blur-sm"
        >
          Need Guidance?
        </span>

        <div>
          <h3 class="text-xl font-bold tracking-tight text-white">Need help deciding?</h3>

          <p class="mt-3 text-sm leading-7 text-slate-200">
            Talk to our team to understand whether this program is the right fit for your stage,
            goals, and startup journey.
          </p>
        </div>

        <RouterLink
          to="/contact"
          class="inline-flex w-full items-center justify-center rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-primary)]"
        >
          Contact Us
        </RouterLink>
      </div>
    </section>
  </aside>
</template>
