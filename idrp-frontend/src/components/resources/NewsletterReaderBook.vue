<template>
  <div
    class="overflow-hidden rounded-[1.25rem] border border-[#d8cfbf] bg-[#e9decb] p-2 shadow-[0_20px_60px_rgba(0,0,0,0.14)] sm:rounded-[1.5rem] sm:p-2.5 md:p-4"
  >
    <div
      class="overflow-hidden rounded-[1rem] bg-white shadow-[0_14px_34px_rgba(0,0,0,0.12)] sm:rounded-[1.25rem]"
    >
      <template v-if="newsletter.pdfUrl">
        <!-- Mobile experience -->
        <div class="block p-4 sm:p-5 md:hidden">
          <div class="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <img
              v-if="newsletter.previewImage"
              :src="newsletter.previewImage"
              :alt="newsletter.title"
              class="h-auto w-full object-cover"
            />

            <div class="p-4">
              <p
                class="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]"
              >
                Mobile PDF View
              </p>

              <h2 class="mt-2 text-lg font-bold tracking-tight text-slate-900">
                {{ newsletter.title }}
              </h2>

              <p class="mt-2 text-sm leading-6 text-slate-600">
                For the best reading experience on phones, open the newsletter in the browser’s full
                PDF view.
              </p>

              <div class="mt-4 flex flex-col gap-3">
                <a
                  :href="newsletter.pdfUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary)]"
                >
                  Open Newsletter
                </a>

                <a
                  :href="newsletter.pdfUrl"
                  download
                  class="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop / tablet embedded viewer -->
        <iframe
          :src="viewerSrc"
          class="hidden w-full bg-white md:block"
          style="height: 82vh"
          title="Newsletter PDF"
        />
      </template>

      <div
        v-else
        class="flex min-h-[320px] items-center justify-center px-6 py-12 text-center text-sm font-medium text-slate-500"
      >
        PDF not available.
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Newsletter } from '@/types/newsletter'

const props = defineProps<{
  newsletter: Newsletter
}>()

const viewerSrc = computed(() => {
  if (!props.newsletter.pdfUrl) return ''

  return `${props.newsletter.pdfUrl}#page=1&zoom=page-fit&toolbar=1&navpanes=0`
})
</script>
