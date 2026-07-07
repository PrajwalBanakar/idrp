<!-- src/views/AdminMentorsView.vue -->

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import AdminLayout from '@/components/admin/AdminLayout.vue'
import AdminFileUploadField from '@/components/admin/AdminFileUploadField.vue'
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
  profileImageUrl: '',
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
  form.profileImageUrl = ''
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
  form.profileImageUrl = mentor.profileImageUrl || ''
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
    profileImageUrl: form.profileImageUrl?.trim() || '',
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
  <AdminLayout>
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
      <section class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <div class="mb-5 flex items-center justify-between">
          <h2 class="text-xl font-bold text-slate-900">Mentor List</h2>
          <span class="text-sm font-medium text-slate-500">{{ mentors.length }} total</span>
        </div>

        <div v-if="loading" class="rounded-2xl bg-slate-50 p-6 text-center text-sm text-slate-500">
          Loading mentors...
        </div>

        <div
          v-else-if="mentors.length === 0"
          class="rounded-2xl bg-slate-50 p-6 text-center text-sm text-slate-500"
        >
          No mentors added yet.
        </div>

        <div v-else class="overflow-hidden rounded-2xl border border-slate-200">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Mentor
                </th>
                <th class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Organization
                </th>
                <th class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Status
                </th>
                <th class="px-4 py-3 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody class="divide-y divide-slate-200 bg-white">
              <tr
                v-for="mentor in mentors"
                :key="mentor.id"
                class="align-top transition hover:bg-slate-50"
              >
                <td class="px-4 py-4">
                  <div class="flex items-start gap-3">
                    <img
                      v-if="mentor.profileImageUrl"
                      :src="mentor.profileImageUrl"
                      :alt="mentor.name"
                      class="h-11 w-11 rounded-2xl border border-slate-200 object-cover"
                    />

                    <div
                      v-else
                      class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary-soft)] text-sm font-bold text-[var(--color-primary)]"
                    >
                      {{ mentor.name.charAt(0) }}
                    </div>

                    <div>
                      <p class="font-semibold text-slate-900">{{ mentor.name }}</p>
                      <p class="mt-1 text-xs text-slate-500">{{ mentor.email }}</p>
                    </div>
                  </div>
                </td>

                <td class="px-4 py-4 text-sm text-slate-600">
                  {{ mentor.organization || '—' }}
                </td>

                <td class="px-4 py-4">
                  <span
                    class="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                    :class="mentor.active ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'"
                  >
                    {{ mentor.active ? 'Active' : 'Inactive' }}
                  </span>
                </td>

                <td class="px-4 py-4">
                  <div class="flex justify-end gap-2">
                    <button
                      type="button"
                      class="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                      @click="editMentor(mentor)"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      class="rounded-full border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                      @click="removeMentor(mentor)"
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
          {{ isEditing ? 'Edit Mentor' : 'Add Mentor' }}
        </h2>

        <form class="mt-6 space-y-5" @submit.prevent="submitMentor">
          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.name"
              type="text"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="Mentor name"
            />
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Email <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.email"
              type="email"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="email@example.com"
            />
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label class="mb-1.5 block text-sm font-semibold text-slate-700">
                Phone
              </label>
              <input
                v-model="form.phone"
                type="text"
                class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
                placeholder="+91 9876543210"
              />
            </div>

            <div>
              <label class="mb-1.5 block text-sm font-semibold text-slate-700">
                Designation
              </label>
              <input
                v-model="form.designation"
                type="text"
                class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
                placeholder="Founder, ABC Ventures"
              />
            </div>
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Organization
            </label>
            <input
              v-model="form.organization"
              type="text"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="Organization name"
            />
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Expertise
            </label>
            <textarea
              v-model="form.expertise"
              rows="2"
              class="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="Product strategy, fundraising, deep tech..."
            />
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Bio
            </label>
            <textarea
              v-model="form.bio"
              rows="4"
              class="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="Short profile bio..."
            />
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              LinkedIn URL
            </label>
            <input
              v-model="form.linkedinUrl"
              type="text"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="https://www.linkedin.com/in/..."
            />
          </div>

          <AdminFileUploadField
            v-model="form.profileImageUrl"
            folder="mentors"
            label="Profile Image"
            placeholder="/mentors/name.jpg"
          />

          <label class="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
            <input
              v-model="form.active"
              type="checkbox"
              class="h-4 w-4 rounded border-slate-300 text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
            />
            <span class="text-sm font-semibold text-slate-700">
              Active
            </span>
          </label>

          <div class="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              :disabled="saving"
              class="inline-flex flex-1 items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{ saving ? 'Saving...' : isEditing ? 'Update Mentor' : 'Create Mentor' }}
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
  </AdminLayout>
</template>
