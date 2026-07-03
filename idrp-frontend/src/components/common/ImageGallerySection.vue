<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type GalleryImage = {
  src: string
  alt?: string
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

      <Swiper
        v-if="images.length"
        :modules="[Navigation, Pagination]"
        :space-between="24"
        :navigation="true"
        :pagination="{ clickable: true }"
        :breakpoints="{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1.4 },
          768: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }"
        class="image-gallery-swiper"
      >
        <SwiperSlide v-for="img in images" :key="img.src">
          <div class="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              :src="img.src"
              :alt="img.alt || 'Gallery image'"
              class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 lg:h-72"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
:deep(.image-gallery-swiper) {
  padding-bottom: 3.5rem;
}

:deep(.image-gallery-swiper .swiper-button-prev),
:deep(.image-gallery-swiper .swiper-button-next) {
  height: 2.75rem;
  width: 2.75rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgb(226 232 240);
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
  color: var(--color-primary);
}

:deep(.image-gallery-swiper .swiper-button-prev::after),
:deep(.image-gallery-swiper .swiper-button-next::after) {
  font-size: 0.95rem;
  font-weight: 700;
}

:deep(.image-gallery-swiper .swiper-pagination-bullet) {
  width: 0.55rem;
  height: 0.55rem;
  background: #cbd5e1;
  opacity: 1;
}

:deep(.image-gallery-swiper .swiper-pagination-bullet-active) {
  background: var(--color-primary);
}

@media (max-width: 767px) {
  :deep(.image-gallery-swiper .swiper-button-prev),
  :deep(.image-gallery-swiper .swiper-button-next) {
    display: none;
  }
}
</style>
