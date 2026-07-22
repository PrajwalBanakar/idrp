<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type GalleryImage = {
  src: string
  alt?: string
  title?: string
}

type Props = {
  title?: string
  description?: string
  images: GalleryImage[]
}

withDefaults(defineProps<Props>(), {
  title: 'Gallery',
  description: '',
})

// Respect the user's motion preference instead of forcing autoplay on everyone.
const prefersReducedMotion =
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

const autoplayOptions = prefersReducedMotion
  ? false
  : {
      delay: 3200,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }
</script>

<template>
  <section class="bg-white px-6 py-16 md:px-12 lg:px-16">
    <div class="mx-auto max-w-7xl">
      <div class="mx-auto mb-10 max-w-3xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {{ title }}
        </h2>

        <p v-if="description" class="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {{ description }}
        </p>
      </div>

      <div v-if="images.length" class="image-gallery">
        <Swiper
          :modules="[Navigation, Pagination, Autoplay]"
          :space-between="24"
          :navigation="true"
          :pagination="{ clickable: true }"
          :loop="images.length > 1"
          :autoplay="autoplayOptions"
          :speed="700"
          :breakpoints="{
            0: { slidesPerView: 1.05 },
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 1.8 },
            1280: { slidesPerView: 2.4 },
          }"
          class="image-gallery-swiper"
        >
          <SwiperSlide v-for="img in images" :key="img.src">
            <div
              class="group overflow-hidden rounded-[28px] bg-white shadow-xl ring-1 ring-slate-200 transition-shadow duration-300 hover:shadow-2xl"
            >
              <div class="relative overflow-hidden">
                <img
                  :src="img.src"
                  :alt="img.alt || img.title || 'Gallery image'"
                  class="h-72 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06] sm:h-80 lg:h-[420px]"
                  loading="lazy"
                />

                <div
                  v-if="img.title"
                  class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent p-4"
                >
                  <div
                    class="inline-flex max-w-[92%] rounded-2xl bg-white/92 px-4 py-2 shadow-md backdrop-blur"
                  >
                    <h3 class="text-sm font-semibold text-slate-900 sm:text-base">
                      {{ img.title }}
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
.image-gallery {
  position: relative;
}

/* Soft edge fade so looping slides feel continuous rather than cut off. */
.image-gallery::before,
.image-gallery::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 3.5rem;
  width: clamp(1rem, 4vw, 3.5rem);
  z-index: 2;
  pointer-events: none;
}

.image-gallery::before {
  left: 0;
  background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0));
}

.image-gallery::after {
  right: 0;
  background: linear-gradient(to left, #ffffff, rgba(255, 255, 255, 0));
}

:deep(.image-gallery-swiper) {
  padding-inline: 0.25rem;
  padding-bottom: 3.5rem;
}

:deep(.image-gallery-swiper .swiper-slide) {
  height: auto;
}

:deep(.image-gallery-swiper .swiper-button-prev),
:deep(.image-gallery-swiper .swiper-button-next) {
  top: calc(50% - 1.75rem);
  height: 2.75rem;
  width: 2.75rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgb(226 232 240);
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
  color: var(--color-primary);
  z-index: 3;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

:deep(.image-gallery-swiper .swiper-button-prev:hover),
:deep(.image-gallery-swiper .swiper-button-next:hover) {
  background: var(--color-primary);
  color: #ffffff;
  transform: scale(1.06);
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.16);
}

:deep(.image-gallery-swiper .swiper-button-prev) {
  left: 0.5rem;
}

:deep(.image-gallery-swiper .swiper-button-next) {
  right: 0.5rem;
}

:deep(.image-gallery-swiper .swiper-button-prev::after),
:deep(.image-gallery-swiper .swiper-button-next::after) {
  font-size: 0.85rem;
  font-weight: 700;
}

:deep(.image-gallery-swiper .swiper-pagination-bullet) {
  width: 0.55rem;
  height: 0.55rem;
  background: #cbd5e1;
  opacity: 1;
  transition:
    width 0.2s ease,
    background-color 0.2s ease;
}

:deep(.image-gallery-swiper .swiper-pagination-bullet-active) {
  width: 1.9rem;
  border-radius: 9999px;
  background: var(--color-primary);
}

@media (max-width: 640px) {
  :deep(.image-gallery-swiper .swiper-button-prev),
  :deep(.image-gallery-swiper .swiper-button-next) {
    height: 2.25rem;
    width: 2.25rem;
  }

  :deep(.image-gallery-swiper .swiper-button-prev::after),
  :deep(.image-gallery-swiper .swiper-button-next::after) {
    font-size: 0.7rem;
  }

  :deep(.image-gallery-swiper .swiper-button-prev) {
    left: 0.25rem;
  }

  :deep(.image-gallery-swiper .swiper-button-next) {
    right: 0.25rem;
  }

  .image-gallery::before,
  .image-gallery::after {
    display: none;
  }
}
</style>
