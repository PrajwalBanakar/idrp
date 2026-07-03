<template>
  <section
    class="bg-gradient-to-b from-[#f7f4ee] to-[#efe9dd] px-4 py-16 sm:px-6 sm:py-18 md:px-12 md:py-20 lg:px-16"
  >
    <div class="mx-auto max-w-7xl">
      <div class="mb-10 text-center sm:mb-12 md:mb-14">
        <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          Featured Collection
        </span>
        <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Newsletter Bookshelf
        </h2>
        <p class="mx-auto mt-4 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg">
          Browse IDRP newsletters as a curated bookshelf and open each issue in its own dedicated
          reading view.
        </p>
      </div>

      <div
        class="relative overflow-hidden rounded-[2rem] border border-[#d9d0c1] bg-[#f8f3ea] px-4 py-8 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:px-5 sm:py-9 md:px-8 md:py-10 lg:px-10"
      >
        <div
          class="pointer-events-none absolute left-4 right-4 top-[7.25rem] hidden h-4 rounded-full bg-gradient-to-b from-[#9a6a3d] to-[#6f4725] shadow-lg md:block"
        />
        <div
          class="pointer-events-none absolute bottom-8 left-4 right-4 hidden h-4 rounded-full bg-gradient-to-b from-[#9a6a3d] to-[#6f4725] shadow-lg md:block"
        />

        <div
          class="relative z-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-5"
        >
          <component
            v-for="newsletter in newsletters"
            :key="newsletter.id"
            :is="getLinkTag(newsletter)"
            v-bind="getLinkProps(newsletter)"
            class="group relative flex h-[220px] w-full items-end justify-center transition-transform duration-300 hover:-translate-y-2 sm:h-[240px]"
          >
            <div
              class="relative h-[200px] w-[94%] rounded-l-md rounded-r-xl border border-black/10 text-left shadow-[12px_10px_24px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:shadow-[16px_14px_30px_rgba(0,0,0,0.22)] sm:h-[220px] sm:w-[92%]"
              :style="{ background: newsletter.coverGradient }"
            >
              <div class="absolute left-0 top-0 h-full w-4 rounded-l-md bg-black/15" />

              <div class="flex h-full flex-col justify-between p-4 pl-5 text-white sm:pl-6">
                <span class="text-xl font-medium tracking-wide text-white/95 sm:text-2xl">
                  {{ newsletter.issue }}
                </span>

                <div>
                  <h3
                    class="line-clamp-4 text-lg font-extrabold leading-snug sm:text-[1.75rem] sm:leading-[1.15]"
                  >
                    {{ newsletter.title }}
                  </h3>
                  <p class="mt-3 text-xs text-white/85 sm:text-sm">
                    {{ newsletter.date }}
                  </p>
                </div>
              </div>
            </div>
          </component>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import type { Newsletter } from '@/types/newsletter'

const props = defineProps<{
  newsletters: Newsletter[]
}>()

const isMobile = ref(false)

function updateIsMobile() {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile)
})

function getLinkTag(newsletter: Newsletter) {
  if (isMobile.value && newsletter.pdfUrl) {
    return 'a'
  }

  return RouterLink
}

function getLinkProps(newsletter: Newsletter) {
  if (isMobile.value && newsletter.pdfUrl) {
    return {
      href: newsletter.pdfUrl,
      target: '_blank',
      rel: 'noopener noreferrer',
    }
  }

  return {
    to: `/resources/newsletters/${newsletter.slug}`,
  }
}
</script>
