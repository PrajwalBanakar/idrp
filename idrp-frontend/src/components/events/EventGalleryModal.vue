<template>
  <Teleport to="body">
    <div
      v-if="open"
      class="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-sm sm:p-4"
      @click.self="emit('close')"
    >
      <div class="relative w-full max-w-5xl">
        <div class="overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
          <button
            type="button"
            class="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/70 text-2xl text-white transition hover:bg-slate-800 sm:right-4 sm:top-4 sm:h-11 sm:w-11"
            @click="emit('close')"
          >
            ×
          </button>

          <div
            class="relative flex items-center justify-center bg-slate-950 px-3 py-4 sm:px-6 sm:py-6"
          >
            <div
              class="relative flex h-[42vh] w-full max-w-4xl items-center justify-center overflow-hidden rounded-2xl bg-slate-950 sm:h-[58vh] md:h-[62vh]"
            >
              <img
                :src="images[currentIndex]"
                :alt="`${altPrefix} ${currentIndex + 1}`"
                class="max-h-full max-w-full object-contain"
              />

              <button
                v-if="images.length > 1"
                type="button"
                class="absolute left-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20 sm:left-4 sm:h-12 sm:w-12 sm:text-2xl"
                @click="previousImage"
              >
                ‹
              </button>

              <button
                v-if="images.length > 1"
                type="button"
                class="absolute right-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-xl text-white transition hover:bg-white/20 sm:right-4 sm:h-12 sm:w-12 sm:text-2xl"
                @click="nextImage"
              >
                ›
              </button>
            </div>
          </div>

          <div
            class="border-t border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300 sm:px-5 sm:py-4"
          >
            <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p>Image {{ currentIndex + 1 }} of {{ images.length }}</p>

              <div v-if="images.length > 1" class="flex gap-2 overflow-x-auto pb-1 sm:max-w-[70%]">
                <button
                  v-for="(image, index) in images"
                  :key="`${image}-${index}`"
                  type="button"
                  class="h-12 w-16 shrink-0 overflow-hidden rounded-xl border-2 transition sm:h-14 sm:w-20"
                  :class="
                    index === currentIndex
                      ? 'border-white'
                      : 'border-transparent hover:border-slate-500'
                  "
                  @click="currentIndex = index"
                >
                  <img
                    :src="image"
                    :alt="`${altPrefix} thumbnail ${index + 1}`"
                    class="h-full w-full object-cover"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{
  open: boolean
  images: string[]
  altPrefix: string
  startIndex?: number
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const currentIndex = ref(props.startIndex ?? 0)

watch(
  () => props.open,
  (isOpen) => {
    if (isOpen) {
      currentIndex.value = props.startIndex ?? 0
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  },
)

watch(
  () => props.startIndex,
  (value) => {
    currentIndex.value = value ?? 0
  },
)

function previousImage() {
  currentIndex.value = currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1
}

function nextImage() {
  currentIndex.value = currentIndex.value === props.images.length - 1 ? 0 : currentIndex.value + 1
}

function handleKeydown(event: KeyboardEvent) {
  if (!props.open) return

  if (event.key === 'Escape') {
    emit('close')
  }

  if (event.key === 'ArrowLeft') {
    event.preventDefault()
    previousImage()
  }

  if (event.key === 'ArrowRight') {
    event.preventDefault()
    nextImage()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>
