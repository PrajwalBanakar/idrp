<!-- src/views/AdminTeamMembersView.vue -->

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import {
  createAdminTeamMember,
  deleteAdminTeamMember,
  fetchAdminTeamMembers,
  updateAdminTeamMember,
  type TeamMemberAdminItem,
  type TeamMemberAdminPayload,
} from '@/services/teamMemberAdminService'

const members = ref<TeamMemberAdminItem[]>([])
const loading = ref(false)
const saving = ref(false)
const error = ref('')
const successMessage = ref('')
const editingId = ref<number | null>(null)

const form = reactive<TeamMemberAdminPayload>({
  name: '',
  designation: '',
  department: '',
  bio: '',
  email: '',
  phone: '',
  profileImageUrl: '',
  linkedinUrl: '',
  displayOrder: 0,
  active: true,
})

const isEditing = computed(() => editingId.value !== null)

const resetForm = () => {
  editingId.value = null
  form.name = ''
  form.designation = ''
  form.department = ''
  form.bio = ''
  form.email = ''
  form.phone = ''
  form.profileImageUrl = ''
  form.linkedinUrl = ''
  form.displayOrder = 0
  form.active = true
}

const loadMembers = async () => {
  loading.value = true
  error.value = ''

  try {
    members.value = await fetchAdminTeamMembers()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load team members'
  } finally {
    loading.value = false
  }
}

const editMember = (member: TeamMemberAdminItem) => {
  editingId.value = member.id

  form.name = member.name
  form.designation = member.designation || ''
  form.department = member.department || ''
  form.bio = member.bio || ''
  form.email = member.email
  form.phone = member.phone || ''
  form.profileImageUrl = member.profileImageUrl || ''
  form.linkedinUrl = member.linkedinUrl || ''
  form.displayOrder = member.displayOrder ?? 0
  form.active = member.active ?? true
}

const submitMember = async () => {
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

  const payload: TeamMemberAdminPayload = {
    name: form.name.trim(),
    designation: form.designation?.trim() || '',
    department: form.department?.trim() || '',
    bio: form.bio?.trim() || '',
    email: form.email.trim(),
    phone: form.phone?.trim() || '',
    profileImageUrl: form.profileImageUrl?.trim() || '',
    linkedinUrl: form.linkedinUrl?.trim() || '',
    displayOrder: Number(form.displayOrder) || 0,
    active: form.active,
  }

  try {
    if (editingId.value) {
      await updateAdminTeamMember(editingId.value, payload)
      successMessage.value = 'Team member updated successfully'
    } else {
      await createAdminTeamMember(payload)
      successMessage.value = 'Team member created successfully'
    }

    resetForm()
    await loadMembers()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to save team member'
  } finally {
    saving.value = false
  }
}

const removeMember = async (member: TeamMemberAdminItem) => {
  const confirmed = window.confirm(`Delete "${member.name}"?`)
  if (!confirmed) return

  error.value = ''
  successMessage.value = ''

  try {
    await deleteAdminTeamMember(member.id)
    successMessage.value = 'Team member deleted successfully'

    if (editingId.value === member.id) {
      resetForm()
    }

    await loadMembers()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to delete team member'
  }
}

onMounted(loadMembers)
</script>

<template>
  <div class="space-y-8">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Admin Panel
        </p>
        <h1 class="mt-2 text-3xl font-bold text-slate-900">
          Team Members
        </h1>
        <p class="mt-2 text-sm text-slate-600">
          Manage IDRP team member profiles, roles, images, and display order.
        </p>
      </div>

      <button
        type="button"
        class="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
        @click="resetForm"
      >
        Add New Member
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
          <h2 class="text-xl font-bold text-slate-900">
            Team Member List
          </h2>
          <span class="text-sm font-medium text-slate-500">
            {{ members.length }} total
          </span>
        </div>

        <div v-if="loading" class="rounded-2xl bg-slate-50 p-6 text-center text-sm text-slate-500">
          Loading team members...
        </div>

        <div
          v-else-if="members.length === 0"
          class="rounded-2xl bg-slate-50 p-6 text-center text-sm text-slate-500"
        >
          No team members added yet.
        </div>

        <div v-else class="overflow-hidden rounded-2xl border border-slate-200">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Member
                </th>
                <th class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Role
                </th>
                <th class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Order
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
                v-for="member in members"
                :key="member.id"
                class="align-top transition hover:bg-slate-50"
              >
                <td class="px-4 py-4">
                  <div class="flex items-start gap-3">
                    <img
                      v-if="member.profileImageUrl"
                      :src="member.profileImageUrl"
                      :alt="member.name"
                      class="h-11 w-11 rounded-2xl border border-slate-200 object-cover"
                    />

                    <div
                      v-else
                      class="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary-soft)] text-sm font-bold text-[var(--color-primary)]"
                    >
                      {{ member.name.charAt(0) }}
                    </div>

                    <div>
                      <p class="font-semibold text-slate-900">
                        {{ member.name }}
                      </p>
                      <p class="mt-1 text-xs text-slate-500">
                        {{ member.email }}
                      </p>
                    </div>
                  </div>
                </td>

                <td class="px-4 py-4 text-sm text-slate-600">
                  {{ member.designation || '—' }}
                </td>

                <td class="px-4 py-4 text-sm text-slate-600">
                  {{ member.displayOrder ?? 0 }}
                </td>

                <td class="px-4 py-4">
                  <span
                    class="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                    :class="
                      member.active
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-slate-100 text-slate-500'
                    "
                  >
                    {{ member.active ? 'Active' : 'Inactive' }}
                  </span>
                </td>

                <td class="px-4 py-4">
                  <div class="flex justify-end gap-2">
                    <button
                      type="button"
                      class="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                      @click="editMember(member)"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      class="rounded-full border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                      @click="removeMember(member)"
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
          {{ isEditing ? 'Edit Team Member' : 'Add Team Member' }}
        </h2>

        <form class="mt-6 space-y-5" @submit.prevent="submitMember">
          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.name"
              type="text"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="Team member name"
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
                Designation
              </label>
              <input
                v-model="form.designation"
                type="text"
                class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
                placeholder="Program Associate"
              />
            </div>

            <div>
              <label class="mb-1.5 block text-sm font-semibold text-slate-700">
                Department
              </label>
              <input
                v-model="form.department"
                type="text"
                class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
                placeholder="Operations"
              />
            </div>
          </div>

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
              Profile Image URL
            </label>
            <input
              v-model="form.profileImageUrl"
              type="text"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="/team-name.jpeg"
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

          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label class="mb-1.5 block text-sm font-semibold text-slate-700">
                Display Order
              </label>
              <input
                v-model.number="form.displayOrder"
                type="number"
                class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              />
            </div>

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
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              :disabled="saving"
              class="inline-flex flex-1 items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{ saving ? 'Saving...' : isEditing ? 'Update Member' : 'Create Member' }}
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