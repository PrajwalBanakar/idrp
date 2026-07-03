<template>
  <section class="bg-white px-6 py-24 md:px-16">
    <div class="mx-auto max-w-5xl">
      <div class="rounded-3xl border border-gray-100 bg-gray-50 p-8 text-center md:p-12">
        <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          Next Step
        </span>

        <h2 class="mt-2 text-4xl font-bold text-gray-900">
          Explore Resources or Start Matchmaking
        </h2>

        <p class="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-500">
          Discover curated knowledge assets across newsletters, blogs, papers, and reports, or move
          into the dedicated investor–startup matchmaking flow for structured ecosystem engagement.
        </p>

        <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <RouterLink
            to="/matchmaking"
            class="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:from-teal-700 hover:to-cyan-700"
          >
            Explore Matchmaking
          </RouterLink>

          <RouterLink
            to="/matchmaking/startup"
            class="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-teal-800"
          >
            Apply as Startup
          </RouterLink>

          <RouterLink
            to="/matchmaking/investor"
            class="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-emerald-700"
          >
            Join as Investor
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
