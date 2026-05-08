<!-- src/views/AdminPartnersView.vue -->

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import {
  createAdminPartner,
  deleteAdminPartner,
  fetchAdminPartners,
  updateAdminPartner,
  type PartnerAdminItem,
  type PartnerAdminPayload,
} from '@/services/partnerAdminService'

const partners = ref<PartnerAdminItem[]>([])
const loading = ref(false)
const saving = ref(false)
const error = ref('')
const successMessage = ref('')
const editingId = ref<number | null>(null)

const form = reactive<PartnerAdminPayload>({
  name: '',
  category: '',
  websiteUrl: '',
  logoUrl: '',
  description: '',
  contactPerson: '',
  contactEmail: '',
  contactPhone: '',
  active: true,
})

const isEditing = computed(() => editingId.value !== null)

const resetForm = () => {
  editingId.value = null

  form.name = ''
  form.category = ''
  form.websiteUrl = ''
  form.logoUrl = ''
  form.description = ''
  form.contactPerson = ''
  form.contactEmail = ''
  form.contactPhone = ''
  form.active = true
}

const loadPartners = async () => {
  loading.value = true
  error.value = ''

  try {
    partners.value = await fetchAdminPartners()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load partners'
  } finally {
    loading.value = false
  }
}

const editPartner = (partner: PartnerAdminItem) => {
  editingId.value = partner.id

  form.name = partner.name
  form.category = partner.category || ''
  form.websiteUrl = partner.websiteUrl || ''
  form.logoUrl = partner.logoUrl || ''
  form.description = partner.description || ''
  form.contactPerson = partner.contactPerson || ''
  form.contactEmail = partner.contactEmail || ''
  form.contactPhone = partner.contactPhone || ''
  form.active = partner.active ?? true
}

const submitPartner = async () => {
  error.value = ''
  successMessage.value = ''

  if (!form.name.trim()) {
    error.value = 'Partner name is required'
    return
  }

  saving.value = true

  const payload: PartnerAdminPayload = {
    name: form.name.trim(),
    category: form.category?.trim() || '',
    websiteUrl: form.websiteUrl?.trim() || '',
    logoUrl: form.logoUrl?.trim() || '',
    description: form.description?.trim() || '',
    contactPerson: form.contactPerson?.trim() || '',
    contactEmail: form.contactEmail?.trim() || '',
    contactPhone: form.contactPhone?.trim() || '',
    active: form.active,
  }

  try {
    if (editingId.value) {
      await updateAdminPartner(editingId.value, payload)
      successMessage.value = 'Partner updated successfully'
    } else {
      await createAdminPartner(payload)
      successMessage.value = 'Partner created successfully'
    }

    resetForm()
    await loadPartners()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to save partner'
  } finally {
    saving.value = false
  }
}

const removePartner = async (partner: PartnerAdminItem) => {
  const confirmed = window.confirm(`Are you sure you want to delete "${partner.name}"?`)

  if (!confirmed) return

  error.value = ''
  successMessage.value = ''

  try {
    await deleteAdminPartner(partner.id)
    successMessage.value = 'Partner deleted successfully'

    if (editingId.value === partner.id) {
      resetForm()
    }

    await loadPartners()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to delete partner'
  }
}

onMounted(loadPartners)
</script>

<template>
  <div class="space-y-8">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Admin Panel
        </p>
        <h1 class="mt-2 text-3xl font-bold text-slate-900">
          Partners
        </h1>
        <p class="mt-2 text-sm text-slate-600">
          Manage ecosystem, academic, technology, investor, and corporate partners.
        </p>
      </div>

      <button
        type="button"
        class="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
        @click="resetForm"
      >
        Add New Partner
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
            Partner List
          </h2>
          <span class="text-sm font-medium text-slate-500">
            {{ partners.length }} total
          </span>
        </div>

        <div v-if="loading" class="rounded-2xl bg-slate-50 p-6 text-center text-sm text-slate-500">
          Loading partners...
        </div>

        <div
          v-else-if="partners.length === 0"
          class="rounded-2xl bg-slate-50 p-6 text-center text-sm text-slate-500"
        >
          No partners added yet.
        </div>

        <div v-else class="overflow-hidden rounded-2xl border border-slate-200">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Partner
                </th>
                <th class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Category
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
                v-for="partner in partners"
                :key="partner.id"
                class="align-top transition hover:bg-slate-50"
              >
                <td class="px-4 py-4">
                  <div class="flex items-start gap-3">
                    <img
                      v-if="partner.logoUrl"
                      :src="partner.logoUrl"
                      :alt="partner.name"
                      class="h-10 w-10 rounded-xl border border-slate-200 object-contain p-1"
                    />
                    <div
                      v-else
                      class="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-primary-soft)] text-sm font-bold text-[var(--color-primary)]"
                    >
                      {{ partner.name.charAt(0) }}
                    </div>

                    <div>
                      <p class="font-semibold text-slate-900">
                        {{ partner.name }}
                      </p>
                      <a
                        v-if="partner.websiteUrl"
                        :href="partner.websiteUrl"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mt-1 inline-block text-xs font-semibold text-[var(--color-primary)] hover:underline"
                      >
                        Visit website
                      </a>
                      <p v-if="partner.contactEmail" class="mt-1 text-xs text-slate-500">
                        {{ partner.contactEmail }}
                      </p>
                    </div>
                  </div>
                </td>

                <td class="px-4 py-4 text-sm text-slate-600">
                  {{ partner.category || '—' }}
                </td>

                <td class="px-4 py-4">
                  <span
                    class="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                    :class="
                      partner.active
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-slate-100 text-slate-500'
                    "
                  >
                    {{ partner.active ? 'Active' : 'Inactive' }}
                  </span>
                </td>

                <td class="px-4 py-4">
                  <div class="flex justify-end gap-2">
                    <button
                      type="button"
                      class="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                      @click="editPartner(partner)"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      class="rounded-full border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                      @click="removePartner(partner)"
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
          {{ isEditing ? 'Edit Partner' : 'Add Partner' }}
        </h2>

        <form class="mt-6 space-y-5" @submit.prevent="submitPartner">
          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Partner Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.name"
              type="text"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="Partner name"
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
              placeholder="Academic / Technology / Ecosystem"
            />
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Website URL
            </label>
            <input
              v-model="form.websiteUrl"
              type="text"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="https://example.com"
            />
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Logo URL
            </label>
            <input
              v-model="form.logoUrl"
              type="text"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="/partners/logo.png"
            />
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Description
            </label>
            <textarea
              v-model="form.description"
              rows="4"
              class="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="Brief description about this partner..."
            />
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Contact Person
            </label>
            <input
              v-model="form.contactPerson"
              type="text"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="Contact person name"
            />
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label class="mb-1.5 block text-sm font-semibold text-slate-700">
                Contact Email
              </label>
              <input
                v-model="form.contactEmail"
                type="email"
                class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label class="mb-1.5 block text-sm font-semibold text-slate-700">
                Contact Phone
              </label>
              <input
                v-model="form.contactPhone"
                type="text"
                class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
                placeholder="+91 9876543210"
              />
            </div>
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

          <div class="flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              :disabled="saving"
              class="inline-flex flex-1 items-center justify-center rounded-full bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{ saving ? 'Saving...' : isEditing ? 'Update Partner' : 'Create Partner' }}
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