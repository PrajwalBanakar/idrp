<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import AdminLayout from '@/components/admin/AdminLayout.vue'
import { uploadAdminFile } from '@/services/fileUploadService'
import {
  createAdminEvent,
  deleteAdminEvent,
  getAdminEvents,
  updateAdminEvent,
  type AdminEvent,
  type AdminEventPayload,
} from '@/services/eventAdminService'

const events = ref<AdminEvent[]>([])
const loading = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const successMessage = ref('')
const editingId = ref<number | null>(null)
const galleryText = ref('')
const uploadingCover = ref(false)
const uploadingGallery = ref(false)

const form = reactive<AdminEventPayload>({
  title: '',
  category: '',
  description: '',
  startDate: '',
  endDate: '',
  displayDate: '',
  time: '',
  location: '',
  mode: 'Offline',
  image: '',
  imageFit: 'cover',
  registerUrl: '',
  visible: true,
  slug: '',
  gallery: [],
})

const resetForm = () => {
  editingId.value = null

  form.title = ''
  form.category = ''
  form.description = ''
  form.startDate = ''
  form.endDate = ''
  form.displayDate = ''
  form.time = ''
  form.location = ''
  form.mode = 'Offline'
  form.image = ''
  form.imageFit = 'cover'
  form.registerUrl = ''
  form.visible = true
  form.slug = ''
  form.gallery = []
  galleryText.value = ''
}

const loadEvents = async () => {
  try {
    loading.value = true
    errorMessage.value = ''
    events.value = await getAdminEvents()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to load events'
  } finally {
    loading.value = false
  }
}

const handleSubmit = async () => {
  try {
    saving.value = true
    errorMessage.value = ''
    successMessage.value = ''
    form.gallery = galleryText.value
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean)

    if (editingId.value) {
      await updateAdminEvent(editingId.value, form)
      successMessage.value = 'Event updated successfully'
    } else {
      await createAdminEvent(form)
      successMessage.value = 'Event created successfully'
    }

    resetForm()
    await loadEvents()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to save event'
  } finally {
    saving.value = false
  }
}

const editEvent = (event: AdminEvent) => {
  editingId.value = event.id

  form.title = event.title || ''
  form.category = event.category || ''
  form.description = event.description || ''
  form.startDate = event.startDate || ''
  form.endDate = event.endDate || ''
  form.displayDate = event.displayDate || ''
  form.time = event.time || ''
  form.location = event.location || ''
  form.mode = event.mode || 'Offline'
  form.image = event.image || ''
  form.imageFit = event.imageFit || 'cover'
  form.registerUrl = event.registerUrl || ''
  form.visible = event.visible !== false
  form.slug = event.slug || ''
  form.gallery = event.gallery || []
  galleryText.value = event.gallery?.join('\n') || ''
}

const removeEvent = async (id: number) => {
  const confirmed = window.confirm('Delete this event?')

  if (!confirmed) return

  try {
    errorMessage.value = ''
    successMessage.value = ''
    await deleteAdminEvent(id)
    successMessage.value = 'Event deleted successfully'
    await loadEvents()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to delete event'
  }
}

const handleCoverUpload = async (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]

  if (!file) return

  try {
    uploadingCover.value = true
    errorMessage.value = ''

    const uploadedFile = await uploadAdminFile(file, 'events')
    form.image = uploadedFile.fileUrl
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to upload cover image'
  } finally {
    uploadingCover.value = false
    input.value = ''
  }
}

const handleGalleryUpload = async (event: Event) => {
  const input = event.target as HTMLInputElement
  const files = Array.from(input.files || [])

  if (!files.length) return

  try {
    uploadingGallery.value = true
    errorMessage.value = ''

    const uploadedFiles = await Promise.all(files.map((file) => uploadAdminFile(file, 'events')))

    const uploadedUrls = uploadedFiles.map((file) => file.fileUrl)

    galleryText.value = [galleryText.value, ...uploadedUrls].filter(Boolean).join('\n')
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to upload gallery images'
  } finally {
    uploadingGallery.value = false
    input.value = ''
  }
}

onMounted(loadEvents)
</script>

<template>
  <AdminLayout>
    <div>
      <p class="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-primary)]">
        Content Management
      </p>

      <h1 class="mt-2 text-3xl font-bold text-slate-950">Events</h1>

      <p class="mt-3 text-sm text-slate-600">Create, update, and delete IDRP events.</p>
    </div>

    <div class="mt-8 grid gap-8 lg:grid-cols-[420px_1fr]">
      <form
        class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
        @submit.prevent="handleSubmit"
      >
        <h2 class="text-xl font-bold text-slate-950">
          {{ editingId ? 'Edit Event' : 'Add Event' }}
        </h2>

        <div class="mt-6 space-y-4">
          <input
            v-model="form.slug"
            required
            placeholder="Slug, example: startup-school-series-8"
            class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
          />
          <input
            v-model="form.title"
            required
            placeholder="Title"
            class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
          />
          <input
            v-model="form.category"
            required
            placeholder="Category"
            class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
          />

          <textarea
            v-model="form.description"
            required
            rows="4"
            placeholder="Description"
            class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
          />

          <div class="grid gap-4 sm:grid-cols-2">
            <input
              v-model="form.startDate"
              required
              type="date"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
            />
            <input
              v-model="form.endDate"
              required
              type="date"
              class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
            />
          </div>

          <input
            v-model="form.displayDate"
            required
            placeholder="Display Date"
            class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
          />
          <input
            v-model="form.time"
            placeholder="Time"
            class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
          />
          <input
            v-model="form.location"
            required
            placeholder="Location"
            class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
          />

          <select
            v-model="form.mode"
            class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
          >
            <option>Offline</option>
            <option>Online</option>
            <option>Hybrid</option>
          </select>

          <div>
            <label class="mb-2 block text-sm font-semibold text-slate-700">
              Cover / Brochure Image
            </label>

            <input
              type="file"
              accept="image/*"
              class="w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700"
              @change="handleCoverUpload"
            />

            <p v-if="uploadingCover" class="mt-2 text-sm text-slate-500">
              Uploading cover image...
            </p>

            <img
              v-if="form.image"
              :src="form.image"
              alt="Event cover preview"
              class="mt-3 h-32 w-full rounded-2xl object-cover"
            />
          </div>

          <input
            v-model="form.image"
            placeholder="Image path or URL"
            class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
          />

          <select
            v-model="form.imageFit"
            class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
          >
            <option value="cover">cover</option>
            <option value="contain">contain</option>
          </select>

          <input
            v-model="form.registerUrl"
            placeholder="Register / Meet URL"
            class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
          />

          <div>
            <label class="mb-2 block text-sm font-semibold text-slate-700"> Gallery Images </label>

            <input
              type="file"
              accept="image/*"
              multiple
              class="w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700"
              @change="handleGalleryUpload"
            />

            <p v-if="uploadingGallery" class="mt-2 text-sm text-slate-500">
              Uploading gallery images...
            </p>
          </div>
          <textarea
            v-model="galleryText"
            rows="4"
            placeholder="Gallery image URLs, one per line"
            class="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
          />
          <label class="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <input v-model="form.visible" type="checkbox" />
            Visible on website
          </label>
        </div>

        <p v-if="errorMessage" class="mt-4 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {{ errorMessage }}
        </p>

        <p
          v-if="successMessage"
          class="mt-4 rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700"
        >
          {{ successMessage }}
        </p>

        <div class="mt-6 flex gap-3">
          <button
            type="submit"
            :disabled="saving"
            class="rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white disabled:opacity-60"
          >
            {{ saving ? 'Saving...' : editingId ? 'Update Event' : 'Create Event' }}
          </button>

          <button
            v-if="editingId"
            type="button"
            class="rounded-full bg-slate-100 px-6 py-3 text-sm font-bold text-slate-700"
            @click="resetForm"
          >
            Cancel
          </button>
        </div>
      </form>

      <section class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
        <h2 class="text-xl font-bold text-slate-950">Existing Events</h2>

        <p v-if="loading" class="mt-6 text-sm text-slate-500">Loading events...</p>

        <div v-else class="mt-6 space-y-4">
          <article
            v-for="event in events"
            :key="event.id"
            class="rounded-2xl border border-slate-200 p-4"
          >
            <div class="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p class="text-lg font-bold text-slate-950">
                  {{ event.title }}
                </p>

                <p class="mt-1 text-sm text-slate-500">
                  {{ event.displayDate }} · {{ event.category }} · {{ event.mode }}
                </p>

                <p class="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">
                  {{ event.description }}
                </p>
              </div>

              <div class="flex gap-2">
                <button
                  type="button"
                  class="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700"
                  @click="editEvent(event)"
                >
                  Edit
                </button>

                <button
                  type="button"
                  class="rounded-full bg-red-50 px-4 py-2 text-sm font-bold text-red-700"
                  @click="removeEvent(event.id)"
                >
                  Delete
                </button>
              </div>
            </div>
          </article>

          <p v-if="!events.length" class="text-sm text-slate-500">No events found.</p>
        </div>
      </section>
    </div>
  </AdminLayout>
</template>
