<!-- src/views/AdminProgramsView.vue -->

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import {
  createAdminProgram,
  deleteAdminProgram,
  fetchAdminPrograms,
  updateAdminProgram,
  type ProgramAdminItem,
  type ProgramAdminPayload,
} from '@/services/programAdminService'

const programs = ref<ProgramAdminItem[]>([])
const loading = ref(false)
const saving = ref(false)
const error = ref('')
const successMessage = ref('')
const editingId = ref<number | null>(null)

const form = reactive<ProgramAdminPayload>({
  programName: '',
  category: '',
  duration: '',
  mode: '',
  eligibility: '',
  description: '',
})

const isEditing = computed(() => editingId.value !== null)

const resetForm = () => {
  editingId.value = null

  form.programName = ''
  form.category = ''
  form.duration = ''
  form.mode = ''
  form.eligibility = ''
  form.description = ''
}

const loadPrograms = async () => {
  loading.value = true
  error.value = ''

  try {
    programs.value = await fetchAdminPrograms()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load programs'
  } finally {
    loading.value = false
  }
}

const editProgram = (program: ProgramAdminItem) => {
  editingId.value = program.id

  form.programName = program.programName
  form.category = program.category || ''
  form.duration = program.duration || ''
  form.mode = program.mode || ''
  form.eligibility = program.eligibility || ''
  form.description = program.description || ''
}

const submitProgram = async () => {
  error.value = ''
  successMessage.value = ''

  if (!form.programName.trim()) {
    error.value = 'Program name is required'
    return
  }

  saving.value = true

  const payload: ProgramAdminPayload = {
    programName: form.programName.trim(),
    category: form.category?.trim() || '',
    duration: form.duration?.trim() || '',
    mode: form.mode?.trim() || '',
    eligibility: form.eligibility?.trim() || '',
    description: form.description?.trim() || '',
  }

  try {
    if (editingId.value) {
      await updateAdminProgram(editingId.value, payload)
      successMessage.value = 'Program updated successfully'
    } else {
      await createAdminProgram(payload)
      successMessage.value = 'Program created successfully'
    }

    resetForm()
    await loadPrograms()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to save program'
  } finally {
    saving.value = false
  }
}

const removeProgram = async (program: ProgramAdminItem) => {
  const confirmed = window.confirm(
    `Are you sure you want to delete "${program.programName}"?`,
  )

  if (!confirmed) return

  error.value = ''
  successMessage.value = ''

  try {
    await deleteAdminProgram(program.id)
    successMessage.value = 'Program deleted successfully'

    if (editingId.value === program.id) {
      resetForm()
    }

    await loadPrograms()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to delete program'
  }
}

onMounted(loadPrograms)
</script>

<template>
  <div class="space-y-8">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Admin Panel
        </p>
        <h1 class="mt-2 text-3xl font-bold text-slate-900">
          Programs
        </h1>
        <p class="mt-2 text-sm text-slate-600">
          Manage program details such as duration, mode, eligibility, and description.
        </p>
      </div>

      <button
        type="button"
        class="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
        @click="resetForm"
      >
        Add New Program
      </button>
    </div>

    <div
      v-if="error"
      class="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700"
    >
      {{ error }}
    </div>

    <div
      v-if="successMessage"
      class="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-700"
    >
      {{ successMessage }}
    </div>

    <div class="grid gap-8 lg:grid-cols-[1fr_420px]">
      <section class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div class="mb-5 flex items-center justify-between">
          <h2 class="text-xl font-bold text-slate-900">
            Program List
          </h2>
          <span class="text-sm font-medium text-slate-500">
            {{ programs.length }} total
          </span>
        </div>

        <div v-if="loading" class="rounded-2xl bg-slate-50 p-6 text-center text-sm text-slate-500">
          Loading programs...
        </div>

        <div
          v-else-if="programs.length === 0"
          class="rounded-2xl bg-slate-50 p-6 text-center text-sm text-slate-500"
        >
          No programs added yet.
        </div>

        <div v-else class="overflow-hidden rounded-2xl border border-slate-200">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Program
                </th>
                <th class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Category
                </th>
                <th class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Mode
                </th>
                <th class="px-4 py-3 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-slate-200 bg-white">
              <tr
                v-for="program in programs"
                :key="program.id"
                class="align-top transition hover:bg-slate-50"
              >
                <td class="px-4 py-4">
                  <p class="font-semibold text-slate-900">
                    {{ program.programName }}
                  </p>
                  <p v-if="program.duration" class="mt-1 text-xs text-slate-500">
                    {{ program.duration }}
                  </p>
                </td>

                <td class="px-4 py-4 text-sm text-slate-600">
                  {{ program.category || '—' }}
                </td>

                <td class="px-4 py-4 text-sm text-slate-600">
                  {{ program.mode || '—' }}
                </td>

                <td class="px-4 py-4">
                  <div class="flex justify-end gap-2">
                    <button
                      type="button"
                      class="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                      @click="editProgram(program)"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      class="rounded-full border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                      @click="removeProgram(program)"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 class="text-xl font-bold text-slate-900">
          {{ isEditing ? 'Edit Program' : 'Add Program' }}
        </h2>

        <form class="mt-6 space-y-5" @submit.prevent="submitProgram">
          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Program Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.programName"
              type="text"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="Yuva Udyami Pre Incubation Program"
            />
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Category
            </label>
            <input
              v-model="form.category"
              type="text"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="Pre-Incubation"
            />
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label class="mb-1.5 block text-sm font-semibold text-slate-700">
                Duration
              </label>
              <input
                v-model="form.duration"
                type="text"
                class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
                placeholder="18 Months"
              />
            </div>

            <div>
              <label class="mb-1.5 block text-sm font-semibold text-slate-700">
                Mode
              </label>
              <input
                v-model="form.mode"
                type="text"
                class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
                placeholder="Hybrid"
              />
            </div>
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Eligibility
            </label>
            <textarea
              v-model="form.eligibility"
              rows="3"
              class="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="Students, innovators, startups, aspiring founders..."
            />
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Description
            </label>
            <textarea
              v-model="form.description"
              rows="5"
              class="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="Briefly describe the program..."
            />
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              :disabled="saving"
              class="inline-flex flex-1 items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{ saving ? 'Saving...' : isEditing ? 'Update Program' : 'Create Program' }}
            </button>

            <button
              type="button"
              class="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
              @click="resetForm"
            >
              Cancel
            </button>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>