<template>
  <section class="relative overflow-hidden bg-slate-950 text-white">
    <div class="absolute inset-0" aria-hidden="true">
      <div
        class="absolute inset-0 bg-[linear-gradient(135deg,#031527_0%,#073863_45%,#0a4c85_100%)]"
      />
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.12),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(10,76,133,0.30),_transparent_32%)]"
      />
      <div class="absolute inset-0 bg-black/10" />
    </div>

    <div class="relative mx-auto max-w-7xl px-6 py-14 sm:px-8 md:px-10 md:py-16 lg:px-16 lg:py-20">
      <div
        v-for="(slide, index) in heroSlides"
        :key="slide.heading"
        v-show="currentSlide === index"
        class="transition-opacity duration-700 ease-in-out"
        :aria-hidden="currentSlide !== index"
      >
        <div class="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <div class="max-w-3xl">
            <h1
              class="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              {{ slide.heading }}
            </h1>

            <p class="mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
              {{ slide.subtext }}
            </p>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                class="btn-brand inline-flex min-w-[220px] items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-0.5"
                @click="scrollToPrograms"
              >
                Explore Programs
              </button>

              <RouterLink
                to="/contact"
                class="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-[var(--color-primary)] sm:text-base"
              >
                Connect with IDRP
              </RouterLink>
            </div>
          </div>

          <div class="hidden lg:block">
            <div
              class="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm"
            >
              <img
                :src="slide.image"
                :alt="slide.heading"
                class="h-[420px] w-full rounded-[1.4rem] object-cover"
                :fetchpriority="index === 0 ? 'high' : 'auto'"
                :loading="index === 0 ? 'eager' : 'lazy'"
                width="630"
                height="420"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="heroSlides.length > 1"
        role="tablist"
        :aria-label="`Slide ${currentSlide + 1} of ${heroSlides.length}`"
        class="mt-8 flex justify-center gap-3"
      >
        <button
          v-for="(slide, index) in heroSlides"
          :key="slide.heading"
          type="button"
          role="tab"
          :aria-label="`Go to slide ${index + 1}: ${slide.heading}`"
          :aria-selected="currentSlide === index"
          class="h-2.5 rounded-full transition-all duration-300"
          :class="currentSlide === index ? 'w-10 bg-white' : 'w-2.5 bg-white/35 hover:bg-white/60'"
          @click="goToSlide(index)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { HeroSlide } from '@/data/home'

const props = defineProps<{
  heroSlides: HeroSlide[]
}>()

const currentSlide = ref(0)
let slideTimer: number | undefined

function goToSlide(index: number) {
  currentSlide.value = index
  restartSlideTimer()
}

function scrollToPrograms() {
  const section = document.getElementById('programs')
  if (!section) return
  const y = section.getBoundingClientRect().top + window.pageYOffset - 88
  window.scrollTo({ top: y, behavior: 'smooth' })
}

function nextSlide() {
  if (!props.heroSlides.length) return
  currentSlide.value = (currentSlide.value + 1) % props.heroSlides.length
}

function startSlideTimer() {
  if (props.heroSlides.length <= 1) return
  slideTimer = window.setInterval(nextSlide, 5000)
}

function stopSlideTimer() {
  if (slideTimer !== undefined) {
    window.clearInterval(slideTimer)
    slideTimer = undefined
  }
}

function restartSlideTimer() {
  stopSlideTimer()
  startSlideTimer()
}

onMounted(startSlideTimer)
onUnmounted(stopSlideTimer)
</script>
