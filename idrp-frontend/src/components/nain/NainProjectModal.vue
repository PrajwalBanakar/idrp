<template>
  <Teleport to="body">
    <div
      v-if="project"
      ref="modalRef"
      class="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      :aria-label="project.title"
      @click.self="emit('close')"
    >
      <div
        class="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-[28px] bg-white p-6 shadow-2xl sm:p-8"
      >
        <button
          ref="closeButtonRef"
          type="button"
          aria-label="Close project details"
          class="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-xl leading-none text-slate-600 transition hover:bg-slate-200"
          @click="emit('close')"
        >
          ×
        </button>

        <h3 class="pr-14 text-2xl font-bold leading-tight text-slate-900">
          {{ project.title }}
        </h3>

        <div class="mt-6 space-y-5 text-sm">
          <div v-if="project.description">
            <p class="font-semibold text-slate-900">Description</p>
            <p class="mt-1 leading-6 text-slate-600">{{ project.description }}</p>
          </div>

          <div class="grid gap-5 sm:grid-cols-2">
            <div>
              <p class="font-semibold text-slate-900">Faculty Guide Name</p>
              <p class="mt-1 text-slate-600">{{ project.facultyGuideName }}</p>
            </div>

            <div>
              <p class="font-semibold text-slate-900">Team Leader Name</p>
              <p class="mt-1 text-slate-600">{{ project.teamLeaderName }}</p>
            </div>
          </div>

          <div v-if="project.teamMembers.length">
            <p class="font-semibold text-slate-900">Team Members Name</p>
            <p class="mt-1 text-slate-600">{{ project.teamMembers.join(', ') }}</p>
          </div>

          <div v-if="project.patents?.length">
            <p class="font-semibold text-slate-900">Patents</p>
            <ul class="mt-1 list-disc space-y-1 pl-5 text-slate-600">
              <li v-for="patent in project.patents" :key="patent">{{ patent }}</li>
            </ul>
          </div>

          <div v-if="project.awards?.length">
            <p class="font-semibold text-slate-900">Awards</p>
            <ul class="mt-1 list-disc space-y-1 pl-5 text-slate-600">
              <li v-for="award in project.awards" :key="award">{{ award }}</li>
            </ul>
          </div>

          <div v-if="project.publications?.journals?.length">
            <p class="font-semibold text-slate-900">Publications — Journals</p>
            <ul class="mt-1 list-disc space-y-1 pl-5 text-slate-600">
              <li v-for="pub in project.publications.journals" :key="pub">{{ pub }}</li>
            </ul>
          </div>

          <div v-if="project.publications?.conferences?.length">
            <p class="font-semibold text-slate-900">Publications — Conferences</p>
            <ul class="mt-1 list-disc space-y-1 pl-5 text-slate-600">
              <li v-for="pub in project.publications.conferences" :key="pub">{{ pub }}</li>
            </ul>
          </div>

          <div v-if="project.projectLink">
            <a
              :href="project.projectLink"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 font-semibold text-[var(--color-primary)] transition hover:text-[var(--color-primary-dark)]"
            >
              View Project ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import type { NAINProject } from '@/types/nain'

const props = defineProps<{
  project: NAINProject | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const modalRef = ref<HTMLElement | null>(null)
const closeButtonRef = ref<HTMLButtonElement | null>(null)
let previouslyFocusedElement: HTMLElement | null = null

watch(
  () => props.project,
  async (project) => {
    if (project) {
      document.body.style.overflow = 'hidden'
      previouslyFocusedElement = document.activeElement as HTMLElement | null
      await nextTick()
      closeButtonRef.value?.focus()
    } else {
      document.body.style.overflow = ''
      previouslyFocusedElement?.focus()
      previouslyFocusedElement = null
    }
  },
)

function getFocusableElements(): HTMLElement[] {
  if (!modalRef.value) return []
  return Array.from(
    modalRef.value.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  )
}

function handleKeydown(event: KeyboardEvent) {
  if (!props.project) return

  if (event.key === 'Escape') {
    emit('close')
    return
  }

  if (event.key === 'Tab') {
    const focusable = getFocusableElements()
    if (focusable.length === 0) return

    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    if (!first || !last) return

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first.focus()
    }
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
