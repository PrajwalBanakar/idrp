<!-- src/views/AdminResourcesView.vue -->

<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import {
  createAdminResource,
  deleteAdminResource,
  fetchAdminResources,
  updateAdminResource,
  type ResourceAdminItem,
  type ResourceAdminPayload,
  type ResourceType,
} from '@/services/resourceAdminService'

const resources = ref<ResourceAdminItem[]>([])
const loading = ref(false)
const saving = ref(false)
const error = ref('')
const successMessage = ref('')
const editingId = ref<number | null>(null)

const resourceTypes: ResourceType[] = ['NEWSLETTER', 'BLOG', 'RESEARCH']

const form = reactive<ResourceAdminPayload>({
  title: '',
  slug: '',
  type: 'NEWSLETTER',
  summary: '',
  content: '',
  fileUrl: '',
  coverImageUrl: '',
  publishDate: '',
  author: '',
  active: true,
  displayOrder: 0,
})

const isEditing = computed(() => editingId.value !== null)

const generateSlug = (value: string) => {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

const handleTitleInput = () => {
  if (!isEditing.value && form.title.trim()) {
    form.slug = generateSlug(form.title)
  }
}

const resetForm = () => {
  editingId.value = null

  form.title = ''
  form.slug = ''
  form.type = 'NEWSLETTER'
  form.summary = ''
  form.content = ''
  form.fileUrl = ''
  form.coverImageUrl = ''
  form.publishDate = ''
  form.author = ''
  form.active = true
  form.displayOrder = 0
}

const loadResources = async () => {
  loading.value = true
  error.value = ''

  try {
    resources.value = await fetchAdminResources()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to load resources'
  } finally {
    loading.value = false
  }
}

const editResource = (resource: ResourceAdminItem) => {
  editingId.value = resource.id

  form.title = resource.title
  form.slug = resource.slug
  form.type = resource.type
  form.summary = resource.summary || ''
  form.content = resource.content || ''
  form.fileUrl = resource.fileUrl || ''
  form.coverImageUrl = resource.coverImageUrl || ''
  form.publishDate = resource.publishDate || ''
  form.author = resource.author || ''
  form.active = resource.active ?? true
  form.displayOrder = resource.displayOrder ?? 0
}

const submitResource = async () => {
  error.value = ''
  successMessage.value = ''

  if (!form.title.trim()) {
    error.value = 'Title is required'
    return
  }

  if (!form.slug.trim()) {
    error.value = 'Slug is required'
    return
  }

  saving.value = true

  const payload: ResourceAdminPayload = {
    title: form.title.trim(),
    slug: form.slug.trim(),
    type: form.type,
    summary: form.summary?.trim() || '',
    content: form.content?.trim() || '',
    fileUrl: form.fileUrl?.trim() || '',
    coverImageUrl: form.coverImageUrl?.trim() || '',
    publishDate: form.publishDate || '',
    author: form.author?.trim() || '',
    active: form.active,
    displayOrder: Number(form.displayOrder) || 0,
  }

  try {
    if (editingId.value) {
      await updateAdminResource(editingId.value, payload)
      successMessage.value = 'Resource updated successfully'
    } else {
      await createAdminResource(payload)
      successMessage.value = 'Resource created successfully'
    }

    resetForm()
    await loadResources()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to save resource'
  } finally {
    saving.value = false
  }
}

const removeResource = async (resource: ResourceAdminItem) => {
  const confirmed = window.confirm(`Are you sure you want to delete "${resource.title}"?`)

  if (!confirmed) return

  error.value = ''
  successMessage.value = ''

  try {
    await deleteAdminResource(resource.id)
    successMessage.value = 'Resource deleted successfully'

    if (editingId.value === resource.id) {
      resetForm()
    }

    await loadResources()
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to delete resource'
  }
}

onMounted(loadResources)
</script>

<template>
  <div class="space-y-8">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Admin Panel
        </p>
        <h1 class="mt-2 text-3xl font-bold text-slate-900">
          Resources
        </h1>
        <p class="mt-2 text-sm text-slate-600">
          Manage newsletters, blogs, research papers, PDFs, and published resources.
        </p>
      </div>

      <button
        type="button"
        class="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
        @click="resetForm"
      >
        Add New Resource
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
            Resource List
          </h2>
          <span class="text-sm font-medium text-slate-500">
            {{ resources.length }} total
          </span>
        </div>

        <div v-if="loading" class="rounded-2xl bg-slate-50 p-6 text-center text-sm text-slate-500">
          Loading resources...
        </div>

        <div
          v-else-if="resources.length === 0"
          class="rounded-2xl bg-slate-50 p-6 text-center text-sm text-slate-500"
        >
          No resources added yet.
        </div>

        <div v-else class="overflow-hidden rounded-2xl border border-slate-200">
          <table class="min-w-full divide-y divide-slate-200">
            <thead class="bg-slate-50">
              <tr>
                <th class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Resource
                </th>
                <th class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
                  Type
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
                v-for="resource in resources"
                :key="resource.id"
                class="align-top transition hover:bg-slate-50"
              >
                <td class="px-4 py-4">
                  <p class="font-semibold text-slate-900">
                    {{ resource.title }}
                  </p>
                  <p class="mt-1 text-xs text-slate-500">
                    /{{ resource.slug }}
                  </p>
                  <p v-if="resource.publishDate" class="mt-1 text-xs text-slate-500">
                    Published: {{ resource.publishDate }}
                  </p>
                </td>

                <td class="px-4 py-4 text-sm text-slate-600">
                  {{ resource.type }}
                </td>

                <td class="px-4 py-4">
                  <span
                    class="inline-flex rounded-full px-3 py-1 text-xs font-semibold"
                    :class="
                      resource.active
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-slate-100 text-slate-500'
                    "
                  >
                    {{ resource.active ? 'Active' : 'Inactive' }}
                  </span>
                </td>

                <td class="px-4 py-4">
                  <div class="flex justify-end gap-2">
                    <button
                      type="button"
                      class="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-slate-100"
                      @click="editResource(resource)"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      class="rounded-full border border-red-200 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                      @click="removeResource(resource)"
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
          {{ isEditing ? 'Edit Resource' : 'Add Resource' }}
        </h2>

        <form class="mt-6 space-y-5" @submit.prevent="submitResource">
          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Title <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.title"
              type="text"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="Jan-Mar 2026 Newsletter"
              @input="handleTitleInput"
            />
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Slug <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.slug"
              type="text"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="jan-mar-2026-newsletter"
            />
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label class="mb-1.5 block text-sm font-semibold text-slate-700">
                Type
              </label>
              <select
                v-model="form.type"
                class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              >
                <option v-for="type in resourceTypes" :key="type" :value="type">
                  {{ type }}
                </option>
              </select>
            </div>

            <div>
              <label class="mb-1.5 block text-sm font-semibold text-slate-700">
                Publish Date
              </label>
              <input
                v-model="form.publishDate"
                type="date"
                class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              />
            </div>
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Author
            </label>
            <input
              v-model="form.author"
              type="text"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="IDRP"
            />
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Summary
            </label>
            <textarea
              v-model="form.summary"
              rows="3"
              class="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="Short summary shown on the resources page..."
            />
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Content
            </label>
            <textarea
              v-model="form.content"
              rows="5"
              class="w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="Detailed blog or research content. For newsletters, this can be optional."
            />
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              File URL
            </label>
            <input
              v-model="form.fileUrl"
              type="text"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="/newsletters/05-jan-mar-2026-edition.pdf"
            />
          </div>

          <div>
            <label class="mb-1.5 block text-sm font-semibold text-slate-700">
              Cover Image URL
            </label>
            <input
              v-model="form.coverImageUrl"
              type="text"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
              placeholder="/resources-hero.jfif"
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
              {{ saving ? 'Saving...' : isEditing ? 'Update Resource' : 'Create Resource' }}
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