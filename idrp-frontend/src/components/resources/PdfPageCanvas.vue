<template>
  <div class="flex h-full items-center justify-center bg-white">
    <div v-if="loading" class="text-sm text-slate-500">Loading page...</div>

    <div v-else-if="error" class="text-sm text-rose-600">
      {{ error }}
    </div>

    <canvas v-else ref="canvasRef" class="max-h-full max-w-full rounded-lg shadow-sm" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import * as pdfjsLib from 'pdfjs-dist'
import pdfWorker from 'pdfjs-dist/build/pdf.worker?url'

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker

const props = withDefaults(
  defineProps<{
    pdfUrl: string
    pageNumber: number
    scale?: number
  }>(),
  {
    scale: 1.15,
  },
)

const canvasRef = ref<HTMLCanvasElement | null>(null)
const loading = ref(false)
const error = ref('')

async function renderPage() {
  if (!canvasRef.value || !props.pdfUrl || !props.pageNumber) return

  try {
    loading.value = true
    error.value = ''

    const pdf = await pdfjsLib.getDocument(props.pdfUrl).promise
    const page = await pdf.getPage(props.pageNumber)

    const viewport = page.getViewport({ scale: props.scale })
    const canvas = canvasRef.value
    const context = canvas.getContext('2d')

    if (!context) {
      error.value = 'Canvas rendering is unavailable.'
      return
    }

    const ratio = window.devicePixelRatio || 1

    canvas.width = Math.floor(viewport.width * ratio)
    canvas.height = Math.floor(viewport.height * ratio)
    canvas.style.width = `${viewport.width}px`
    canvas.style.height = `${viewport.height}px`

    context.setTransform(ratio, 0, 0, ratio, 0, 0)

    await page.render({
      canvas,
      viewport,
    }).promise
  } catch (err) {
    console.error(err)
    error.value = 'Unable to load this page.'
  } finally {
    loading.value = false
  }
}

onMounted(renderPage)

watch(
  () => [props.pdfUrl, props.pageNumber, props.scale],
  () => {
    renderPage()
  },
)
</script>
