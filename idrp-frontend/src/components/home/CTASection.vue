<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'
</script>

<template>
  <section class="bg-white px-6 pb-24 md:px-12 lg:px-16">
    <div class="mx-auto max-w-6xl">
      <div
        class="relative overflow-hidden rounded-[2rem] bg-slate-950 px-8 py-16 text-white shadow-2xl md:px-12 md:py-18 lg:px-16 lg:py-20"
      >
        <!-- Background -->
        <div class="absolute inset-0">
          <div
            class="absolute inset-0"
            style="
              background: linear-gradient(
                to bottom right,
                #021220,
                var(--color-primary-dark),
                var(--color-primary)
              );
            "
          />
          <div
            class="absolute inset-0"
            style="
              background:
                radial-gradient(circle at top right, rgba(10, 76, 133, 0.25), transparent 30%),
                radial-gradient(circle at bottom left, rgba(7, 56, 99, 0.18), transparent 28%);
            "
          />
        </div>

        <!-- Glow Elements -->
        <div class="pointer-events-none absolute inset-0">
          <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
          <div class="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
        </div>

        <!-- Content -->
        <div class="relative z-10 mx-auto max-w-4xl text-center">
          <!-- Eyebrow -->
          <span
            class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary-soft)] backdrop-blur-sm sm:text-xs"
          >
            Start Your Journey
          </span>

          <!-- Title -->
          <h2 class="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to build the future?
          </h2>

          <!-- Description -->
          <p
            class="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8"
          >
            Explore programs, connect with the ecosystem, and take the next step with the right
            support, guidance, and infrastructure behind you.
          </p>

          <!-- Actions -->
          <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BaseButton to="/apply/incubation" variant="primary" size="lg" class="min-w-[220px]">
              Apply to a Program
            </BaseButton>

            <BaseButton to="/contact" variant="light-on-dark" size="lg" class="min-w-[220px]">
              Talk to Our Team
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
