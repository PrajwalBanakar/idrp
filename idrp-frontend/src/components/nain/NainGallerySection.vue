<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type Props = {
  images: { src: string; alt?: string }[]
}

defineProps<Props>()
</script>

<template>
  <section class="bg-white px-6 py-16 md:px-12 lg:px-16">
    <div class="mx-auto max-w-7xl">
      <Swiper
        :modules="[Navigation, Pagination]"
        :space-between="24"
        :navigation="true"
        :pagination="{ clickable: true }"
        :breakpoints="{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }"
        class="nain-gallery-swiper"
      >
        <SwiperSlide v-for="img in images" :key="img.src">
          <div class="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <img
              :src="img.src"
              :alt="img.alt || 'NAIN activity'"
              class="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<style scoped>
:deep(.nain-gallery-swiper) {
  padding-bottom: 3.5rem;
}

:deep(.nain-gallery-swiper .swiper-button-prev),
:deep(.nain-gallery-swiper .swiper-button-next) {
  height: 2.75rem;
  width: 2.75rem;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgb(226 232 240);
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
  color: #073863;
}

:deep(.nain-gallery-swiper .swiper-button-prev::after),
:deep(.nain-gallery-swiper .swiper-button-next::after) {
  font-size: 0.95rem;
  font-weight: 700;
}

:deep(.nain-gallery-swiper .swiper-pagination-bullet) {
  width: 0.55rem;
  height: 0.55rem;
  background: #cbd5e1;
  opacity: 1;
}

:deep(.nain-gallery-swiper .swiper-pagination-bullet-active) {
  background: #073863;
}
</style>
