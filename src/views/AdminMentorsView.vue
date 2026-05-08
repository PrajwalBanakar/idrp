<!-- src/views/AdminMentorsView.vue -->

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import {
  createAdminMentor,
  deleteAdminMentor,
  fetchAdminMentors,
  updateAdminMentor,
  type MentorAdminItem,
  type MentorAdminPayload,
} from '@/services/mentorAdminService'

const mentors = ref<MentorAdminItem[]>([])
const loading = ref(false)
const saving = ref(false)
const error = ref('')
const successMessage = ref('')
const editingId = ref<number | null>(null)

const form = reactive<MentorAdminPayload>({
  name: '',
  email: '',
  phone: '',
  designation: '',
  organization: '',
  expertise: '',
  bio: '',
  linkedinUrl: '',
  active: true,
})

const isEditing = computed(() => editingId.value !== null)

const resetForm = () => {
  editingId.value = null

  form.name = ''
  form.email = ''
  form.phone = ''
  form.designation = ''
  form.organization = ''
  form.expertise = ''
  form.bio = ''
  form.linkedinUrl = ''
  form.active = true
}

const loadMentors = async () => {
  loading.value = true
  error.value = ''

  try {
    mentors.value = await fetchAdminMentors()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load mentors'
  } finally {
    loading.value = false
  }
}

const editMentor = (mentor: MentorAdminItem) => {
  editingId.value = mentor.id

  form.name = mentor.name
  form.email = mentor.email
  form.phone = mentor.phone || ''
  form.designation = mentor.designation || ''
  form.organization = mentor.organization || ''
  form.expertise = mentor.expertise || ''
  form.bio = mentor.bio || ''
  form.linkedinUrl = mentor.linkedinUrl || ''
  form.active = mentor.active ?? true
}

const submitMentor = async () => {
  error.value = ''
  successMessage.value = ''

  if (!form.name.trim()) {
    error.value = 'Name is required'
    return
  }

  if (!form.email.trim()) {
    error.value = 'Email is required'
    return
  }

  saving.value = true

  const payload: MentorAdminPayload = {
    name: form.name.trim(),
    email: form.email.trim(),
    phone: form.phone?.trim() || '',
    designation: form.designation?.trim() || '',
    organization: form.organization?.trim() || '',
    expertise: form.expertise?.trim() || '',
    bio: form.bio?.trim() || '',
    linkedinUrl: form.linkedinUrl?.trim() || '',
    active: form.active,
  }

  try {
    if (editingId.value) {
      await updateAdminMentor(editingId.value, payload)
      successMessage.value = 'Mentor updated successfully'
    } else {
      await createAdminMentor(payload)
      successMessage.value = 'Mentor created successfully'
    }

    resetForm()
    await loadMentors()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to save mentor'
  } finally {
    saving.value = false
  }
}

const removeMentor = async (mentor: MentorAdminItem) => {
  const confirmed = window.confirm(`Delete "${mentor.name}"?`)
  if (!confirmed) return

  error.value = ''
  successMessage.value = ''

  try {
    await deleteAdminMentor(mentor.id)
    successMessage.value = 'Mentor deleted successfully'

    if (editingId.value === mentor.id) {
      resetForm()
    }

    await loadMentors()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to delete mentor'
  }
}

onMounted(loadMentors)
</script>

<template>
  <div class="space-y-8">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Admin Panel
        </p>
        <h1 class="mt-2 text-3xl font-bold text-slate-900">
          Mentors
        </h1>
        <p class="mt-2 text-sm text-slate-600">
          Manage mentor profiles and contact details.
        </p>
      </div>

      <button
        type="button"
        class="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
        @click="resetForm"
      >
        Add New Mentor
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

    <div class="grid gap-8 xl:grid-cols-[1fr_460px]">
      <!-- TABLE -->
      <section class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div class="mb-5 flex items-center justify-between">
          <h2 class="text-xl font-bold text-slate-900">Mentor List</h2>
          <span class="text-sm text-slate-500">{{ mentors.length }} total</span>
        </div>

        <div v-if="loading" class="p-6 text-center text-sm text-slate-500">
          Loading mentors...
        </div>

        <div v-else-if="mentors.length === 0" class="p-6 text-center text-sm text-slate-500">
          No mentors found.
        </div>

        <div v-else class="overflow-hidden rounded-2xl border border-slate-200">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-bold text-slate-500">Mentor</th>
                <th class="px-4 py-3 text-left text-xs font-bold text-slate-500">Organization</th>
                <th class="px-4 py-3 text-left text-xs font-bold text-slate-500">Status</th>
                <th class="px-4 py-3 text-right text-xs font-bold text-slate-500">Actions</th>
              </tr>
            </thead>

            <tbody class="divide-y divide-slate-200">
              <tr v-for="mentor in mentors" :key="mentor.id">
                <td class="px-4 py-4">
                  <p class="font-semibold text-slate-900">{{ mentor.name }}</p>
                  <p class="text-xs text-slate-500">{{ mentor.email }}</p>
                </td>

                <td class="px-4 py-4 text-sm text-slate-600">
                  {{ mentor.organization || '—' }}
                </td>

                <td class="px-4 py-4">
                  <span
                    class="rounded-full px-3 py-1 text-xs font-semibold"
                    :class="mentor.active ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'"
                  >
                    {{ mentor.active ? 'Active' : 'Inactive' }}
                  </span>
                </td>

                <td class="px-4 py-4 text-right">
                  <button class="mr-2 text-sm text-blue-600" @click="editMentor(mentor)">Edit</button>
                  <button class="text-sm text-red-600" @click="removeMentor(mentor)">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- FORM -->
      <section class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 class="text-xl font-bold text-slate-900">
          {{ isEditing ? 'Edit Mentor' : 'Add Mentor' }}
        </h2>

        <form class="mt-6 space-y-4" @submit.prevent="submitMentor">
          <input v-model="form.name" placeholder="Name" class="input" />
          <input v-model="form.email" placeholder="Email" class="input" />
          <input v-model="form.phone" placeholder="Phone" class="input" />
          <input v-model="form.designation" placeholder="Designation" class="input" />
          <input v-model="form.organization" placeholder="Organization" class="input" />
          <textarea v-model="form.expertise" placeholder="Expertise" class="input" />
          <textarea v-model="form.bio" placeholder="Bio" class="input" />
          <input v-model="form.linkedinUrl" placeholder="LinkedIn URL" class="input" />

          <label class="flex items-center gap-2">
            <input type="checkbox" v-model="form.active" />
            Active
          </label>

          <button class="btn-primary" :disabled="saving">
            {{ saving ? 'Saving...' : isEditing ? 'Update' : 'Create' }}
          </button>
        </form>
      </section>
    </div>
  </div>
</template>