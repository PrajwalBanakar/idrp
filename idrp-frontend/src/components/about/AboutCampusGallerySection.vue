<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import type { AboutCampusGalleryImage, AboutSectionIntro } from '@/types/about'

defineProps<{
  section: AboutSectionIntro
  images: AboutCampusGalleryImage[]
}>()
</script>

<template>
  <section class="bg-white px-4 py-14 sm:px-6 md:px-12 lg:px-16 lg:py-16">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
        <span
          v-if="section.eyebrow"
          class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]"
        >
          {{ section.eyebrow }}
        </span>

        <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {{ section.title }}
        </h2>

        <p
          v-if="section.description"
          class="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
        >
          {{ section.description }}
        </p>
      </div>

      <div v-if="images.length">
        <Swiper
          :modules="[Navigation, Pagination]"
          :space-between="24"
          :navigation="true"
          :pagination="{ clickable: true }"
          :breakpoints="{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 2.6 },
          }"
          class="about-campus-gallery-swiper"
        >
          <SwiperSlide v-for="image in images" :key="image.id">
            <div
              class="group overflow-hidden rounded-[28px] bg-white shadow-xl ring-1 ring-slate-200"
            >
              <div class="relative">
                <img
                  :src="image.src"
                  :alt="image.alt || image.title || 'Campus image'"
                  class="h-[260px] w-full object-cover sm:h-[300px] lg:h-[360px]"
                  loading="lazy"
                />

                <div
                  v-if="image.title"
                  class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent p-4"
                >
                  <div
                    class="inline-flex max-w-[92%] rounded-2xl bg-white/92 px-4 py-2 shadow-md backdrop-blur"
                  >
                    <h3 class="text-sm font-semibold text-slate-900 sm:text-base">
                      {{ image.title }}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<style scoped>
:deep(.about-campus-gallery-swiper) {
  padding-inline: 0.25rem;
  padding-bottom: 3.5rem;
}

:deep(.about-campus-gallery-swiper .swiper-slide) {
  height: auto;
}

:deep(.about-campus-gallery-swiper .swiper-button-prev),
:deep(.about-campus-gallery-swiper .swiper-button-next) {
  height: 2.75rem;
  width: 2.75rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgb(226 232 240);
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
  color: var(--color-primary);
}

:deep(.about-campus-gallery-swiper .swiper-button-prev::after),
:deep(.about-campus-gallery-swiper .swiper-button-next::after) {
  font-size: 0.95rem;
  font-weight: 700;
}

:deep(.about-campus-gallery-swiper .swiper-pagination-bullet) {
  width: 0.55rem;
  height: 0.55rem;
  background: #cbd5e1;
  opacity: 1;
}

:deep(.about-campus-gallery-swiper .swiper-pagination-bullet-active) {
  width: 1.9rem;
  border-radius: 9999px;
  background: var(--color-primary);
}

@media (max-width: 767px) {
  :deep(.about-campus-gallery-swiper .swiper-button-prev),
  :deep(.about-campus-gallery-swiper .swiper-button-next) {
    display: none;
  }
}
</style>
