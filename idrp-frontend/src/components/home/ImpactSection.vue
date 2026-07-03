<template>
  <section class="bg-[var(--color-bg-soft)] px-6 py-20 md:px-12 lg:px-16 lg:py-24">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
        <span class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
          Our Impact
        </span>

        <h2
          class="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text-primary)] sm:text-4xl lg:text-5xl"
        >
          By the numbers
        </h2>

        <p
          class="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg"
        >
          A snapshot of the scale, reach, and momentum of the ecosystem being built.
        </p>
      </div>

      <div class="overflow-hidden rounded-[2rem] bg-slate-950 shadow-2xl">
        <dl
          ref="statsSectionRef"
          class="grid grid-cols-2 gap-x-6 gap-y-8 px-6 py-10 sm:px-8 lg:grid-cols-4 lg:px-12 lg:py-12"
          style="
            background: linear-gradient(
              90deg,
              var(--color-primary-dark),
              var(--color-primary),
              var(--color-primary-light)
            );
          "
        >
          <div v-for="stat in animatedStats" :key="stat.label" class="text-center">
            <div
              class="mb-3 flex items-center justify-center text-[var(--color-primary-soft)]"
              aria-hidden="true"
              v-html="stat.icon"
            />

            <dd class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              {{ stat.prefix ?? '' }}{{ stat.displayed }}{{ stat.suffix }}
            </dd>

            <dt class="mt-2 text-sm leading-6 text-slate-100">
              {{ stat.label }}
            </dt>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import type { Stat } from '@/data/home'

type AnimatedStat = Stat & { displayed: number }

const props = defineProps<{
  stats: Stat[]
}>()

const statsSectionRef = ref<HTMLElement | null>(null)
const animatedStats = ref<AnimatedStat[]>(props.stats.map((stat) => ({ ...stat, displayed: 0 })))

let statsObserver: IntersectionObserver | null = null
let hasAnimatedStats = false

function animateStats() {
  if (hasAnimatedStats) return
  hasAnimatedStats = true

  const DURATION = 1800
  const STEPS = 60
  const INTERVAL = DURATION / STEPS

  animatedStats.value.forEach((stat) => {
    const increment = stat.target / STEPS
    let current = 0

    const timer = window.setInterval(() => {
      current += increment
      if (current >= stat.target) {
        stat.displayed = stat.target
        window.clearInterval(timer)
      } else {
        stat.displayed = Math.round(current)
      }
    }, INTERVAL)
  })
}

onMounted(() => {
  statsObserver = new IntersectionObserver(
    ([entry]) => {
      if (entry?.isIntersecting) {
        animateStats()
        statsObserver?.disconnect()
      }
    },
    { threshold: 0.2 },
  )

  if (statsSectionRef.value) statsObserver.observe(statsSectionRef.value)
})

onUnmounted(() => {
  statsObserver?.disconnect()
})
</script>
