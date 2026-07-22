<template>
  <section class="bg-white px-6 pb-16 md:px-12 lg:px-16 lg:pb-20">
    <div class="mx-auto max-w-7xl">
      <div
        class="relative overflow-hidden rounded-[2rem] bg-slate-950 px-8 py-12 text-white shadow-2xl md:px-12 md:py-14 lg:px-16 lg:py-16"
      >
        <div class="absolute inset-0">
          <div
            class="absolute inset-0 bg-[linear-gradient(135deg,#031527_0%,#073863_45%,#0a4c85_100%)]"
          />
          <div
            class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.10),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(10,76,133,0.20),_transparent_28%)]"
          />
        </div>

        <div class="pointer-events-none absolute inset-0">
          <div class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/5 blur-2xl" />
          <div class="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/5 blur-2xl" />
        </div>

        <div
          class="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left"
        >
          <div class="max-w-xl">
            <h3 class="text-2xl font-bold tracking-tight text-white md:text-3xl">
              Looking to connect with the IDRP ecosystem?
            </h3>

            <p class="mt-3 text-sm leading-7 text-slate-200 md:text-base">
              Explore our programs, boards, and mentoring support.
            </p>
          </div>

          <div class="flex shrink-0 flex-col gap-4 sm:flex-row">
            <BaseButton to="/about" variant="primary" size="md" class="min-w-[180px]">
              About IDRP
            </BaseButton>

            <BaseButton to="/contact" variant="light-on-dark" size="md" class="min-w-[180px]">
              Contact Us
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BaseButton from '@/components/common/BaseButton.vue'
</script>
