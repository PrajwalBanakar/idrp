<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import AdminLayout from '@/components/admin/AdminLayout.vue'
import AdminFileUploadField from '@/components/admin/AdminFileUploadField.vue'
import {
  startupAdminService,
  type StartupCategory,
  type StartupPerson,
  type StartupRequest,
  type StartupResponse,
} from '@/services/startupAdminService'

const startups = ref<StartupResponse[]>([])
const loading = ref(false)
const saving = ref(false)
const errorMessage = ref('')
const successMessage = ref('')
const editingId = ref<number | string | null>(null)
const galleryText = ref('')

const ALL_CATEGORIES: { value: StartupCategory; label: string }[] = [
  { value: 'PRE_INCUBATED', label: 'Pre-incubated' },
  { value: 'INCUBATED', label: 'Incubated' },
  { value: 'FUNDED', label: 'Funded' },
]

const emptyPerson = (): StartupPerson => ({
  name: '',
  role: '',
  linkedin: '',
  email: '',
})

const form = reactive<StartupRequest>({
  name: '',
  sector: '',
  categories: ['PRE_INCUBATED'],
  logo: '',
  website: '',
  onePager: '',
  brief: '',
  contactEmail: '',
  techFacultyMentors: [emptyPerson()],
  founders: [emptyPerson()],
  teamMembers: [],
  gallery: [],
})

const resetForm = () => {
  editingId.value = null
  form.name = ''
  form.sector = ''
  form.categories = ['PRE_INCUBATED']
  form.logo = ''
  form.website = ''
  form.onePager = ''
  form.brief = ''
  form.contactEmail = ''
  form.techFacultyMentors = [emptyPerson()]
  form.founders = [emptyPerson()]
  form.teamMembers = []
  form.gallery = []
  galleryText.value = ''
}

const cleanPeople = (people: StartupPerson[]) => people.filter((person) => person.name.trim())

const buildPayload = (): StartupRequest => ({
  ...form,
  techFacultyMentors: cleanPeople(form.techFacultyMentors),
  founders: cleanPeople(form.founders),
  teamMembers: cleanPeople(form.teamMembers),
  gallery: galleryText.value
    .split('\n')
    .map((item) => item.trim())
    .filter(Boolean),
})

const fetchStartups = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    startups.value = await startupAdminService.getAll()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to load startups'
  } finally {
    loading.value = false
  }
}

const submitForm = async () => {
  saving.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    const payload = buildPayload()

    if (editingId.value) {
      await startupAdminService.update(editingId.value, payload)
      successMessage.value = 'Startup updated successfully'
    } else {
      await startupAdminService.create(payload)
      successMessage.value = 'Startup added successfully'
    }

    resetForm()
    await fetchStartups()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to save startup'
  } finally {
    saving.value = false
  }
}

const editStartup = (startup: StartupResponse) => {
  editingId.value = startup.id
  form.name = startup.name
  form.sector = startup.sector
  form.categories = startup.categories?.length ? [...startup.categories] : ['PRE_INCUBATED']
  form.logo = startup.logo
  form.website = startup.website
  form.onePager = startup.onePager
  form.brief = startup.brief
  form.contactEmail = startup.contactEmail
  form.techFacultyMentors = startup.techFacultyMentors?.length
    ? startup.techFacultyMentors.map((person) => ({ ...emptyPerson(), ...person }))
    : [emptyPerson()]
  form.founders = startup.founders?.length
    ? startup.founders.map((person) => ({ ...emptyPerson(), ...person }))
    : [emptyPerson()]
  form.teamMembers = startup.teamMembers?.length
    ? startup.teamMembers.map((person) => ({ ...emptyPerson(), ...person }))
    : []
  form.gallery = startup.gallery ?? []
  galleryText.value = (startup.gallery ?? []).join('\n')
}

const toggleCategory = (category: StartupCategory) => {
  const index = form.categories.indexOf(category)

  if (index === -1) {
    form.categories.push(category)
  } else if (form.categories.length > 1) {
    form.categories.splice(index, 1)
  }
}

const deleteStartup = async (id: number | string) => {
  const confirmed = window.confirm('Are you sure you want to delete this startup?')
  if (!confirmed) return

  errorMessage.value = ''
  successMessage.value = ''

  try {
    await startupAdminService.delete(id)
    successMessage.value = 'Startup deleted successfully'
    await fetchStartups()
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Failed to delete startup'
  }
}

const addPerson = (list: StartupPerson[]) => {
  list.push(emptyPerson())
}

const removePerson = (list: StartupPerson[], index: number, keepOne = false) => {
  if (keepOne && list.length === 1) {
    list[0] = emptyPerson()
    return
  }

  list.splice(index, 1)
}

const categoryLabel = (category: StartupCategory) => {
  if (category === 'PRE_INCUBATED') return 'Pre-incubated'
  if (category === 'INCUBATED') return 'Incubated'
  return 'Funded'
}

onMounted(fetchStartups)
</script>

<template>
  <AdminLayout>
  <section class="space-y-8">
    <div>
      <p class="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
        Admin Panel
      </p>
      <h1 class="mt-2 text-3xl font-bold text-slate-900">Manage Startups</h1>
      <p class="mt-2 text-sm text-slate-600">Add, edit, and manage startup portfolio records.</p>
    </div>

    <div
      v-if="errorMessage"
      class="rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700"
    >
      {{ errorMessage }}
    </div>

    <div
      v-if="successMessage"
      class="rounded-2xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-medium text-green-700"
    >
      {{ successMessage }}
    </div>

    <form
      class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
      @submit.prevent="submitForm"
    >
      <div class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 class="text-xl font-bold text-slate-900">
            {{ editingId ? 'Edit Startup' : 'Add Startup' }}
          </h2>
          <p class="mt-1 text-sm text-slate-500">Fill the public startup profile details.</p>
        </div>

        <button
          v-if="editingId"
          type="button"
          class="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          @click="resetForm"
        >
          Cancel Edit
        </button>
      </div>

      <div class="grid gap-5 md:grid-cols-2">
        <div>
          <label class="text-sm font-semibold text-slate-700">Startup Name</label>
          <input
            v-model="form.name"
            required
            type="text"
            class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
          />
        </div>

        <div>
          <label class="text-sm font-semibold text-slate-700">Sector</label>
          <input
            v-model="form.sector"
            required
            type="text"
            placeholder="Example: Cybersecurity"
            class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
          />
        </div>

        <div class="md:col-span-2">
          <label class="text-sm font-semibold text-slate-700">Category</label>
          <div class="mt-2 flex flex-wrap gap-4">
            <label
              v-for="option in ALL_CATEGORIES"
              :key="option.value"
              class="flex items-center gap-2 text-sm text-slate-700"
            >
              <input
                type="checkbox"
                :checked="form.categories.includes(option.value)"
                @change="toggleCategory(option.value)"
              />
              {{ option.label }}
            </label>
          </div>
        </div>

        <div>
          <label class="text-sm font-semibold text-slate-700">Contact Email</label>
          <input
            v-model="form.contactEmail"
            type="email"
            class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
          />
        </div>

        <div>
          <label class="text-sm font-semibold text-slate-700">Website URL</label>
          <input
            v-model="form.website"
            type="url"
            placeholder="https://example.com"
            class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
          />
        </div>

        <AdminFileUploadField
          v-model="form.logo"
          folder="startups"
          label="Logo"
          placeholder="/startups/logo/example.png"
        />

        <AdminFileUploadField
          v-model="form.onePager"
          folder="startups"
          accept="application/pdf"
          preview="none"
          label="One Pager (PDF)"
          placeholder="/startups/one-pagers/example.pdf"
        />

        <div class="md:col-span-2">
          <label class="text-sm font-semibold text-slate-700">Brief Description</label>
          <textarea
            v-model="form.brief"
            required
            rows="4"
            class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
          />
        </div>

        <div class="md:col-span-2">
          <label class="text-sm font-semibold text-slate-700">Gallery Image URLs (one per line)</label>
          <textarea
            v-model="galleryText"
            rows="3"
            placeholder="/startups/gallery/example-1.jpg"
            class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
          />
        </div>
      </div>

      <div class="mt-8 space-y-8">
        <div class="rounded-3xl bg-slate-50 p-5">
          <div class="mb-4 flex items-center justify-between gap-4">
            <h3 class="text-lg font-bold text-slate-900">Founders / Co-founders</h3>
            <button
              type="button"
              class="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)] ring-1 ring-slate-200 hover:bg-slate-100"
              @click="addPerson(form.founders)"
            >
              Add Founder
            </button>
          </div>

          <div class="space-y-4">
            <div
              v-for="(person, index) in form.founders"
              :key="`founder-${index}`"
              class="grid gap-4 rounded-2xl bg-white p-4 ring-1 ring-slate-200 md:grid-cols-4"
            >
              <input
                v-model="person.name"
                type="text"
                placeholder="Name"
                class="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
              />

              <input
                v-model="person.role"
                type="text"
                placeholder="Role"
                class="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
              />

              <input
                v-model="person.linkedin"
                type="url"
                placeholder="LinkedIn URL"
                class="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
              />

              <div class="flex gap-2">
                <input
                  v-model="person.email"
                  type="email"
                  placeholder="Email"
                  class="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
                />

                <button
                  type="button"
                  class="rounded-xl border border-red-200 px-3 text-sm font-semibold text-red-600 hover:bg-red-50"
                  @click="removePerson(form.founders, index, true)"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-3xl bg-slate-50 p-5">
          <div class="mb-4 flex items-center justify-between gap-4">
            <h3 class="text-lg font-bold text-slate-900">Tech Faculty Mentors</h3>
            <button
              type="button"
              class="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)] ring-1 ring-slate-200 hover:bg-slate-100"
              @click="addPerson(form.techFacultyMentors)"
            >
              Add Mentor
            </button>
          </div>

          <div class="space-y-4">
            <div
              v-for="(person, index) in form.techFacultyMentors"
              :key="`mentor-${index}`"
              class="grid gap-4 rounded-2xl bg-white p-4 ring-1 ring-slate-200 md:grid-cols-4"
            >
              <input
                v-model="person.name"
                type="text"
                placeholder="Name"
                class="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
              />

              <input
                v-model="person.role"
                type="text"
                placeholder="Role"
                class="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
              />

              <input
                v-model="person.linkedin"
                type="url"
                placeholder="LinkedIn URL"
                class="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
              />

              <div class="flex gap-2">
                <input
                  v-model="person.email"
                  type="email"
                  placeholder="Email"
                  class="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
                />

                <button
                  type="button"
                  class="rounded-xl border border-red-200 px-3 text-sm font-semibold text-red-600 hover:bg-red-50"
                  @click="removePerson(form.techFacultyMentors, index, true)"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="rounded-3xl bg-slate-50 p-5">
          <div class="mb-4 flex items-center justify-between gap-4">
            <h3 class="text-lg font-bold text-slate-900">Team Members</h3>
            <button
              type="button"
              class="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--color-primary)] ring-1 ring-slate-200 hover:bg-slate-100"
              @click="addPerson(form.teamMembers)"
            >
              Add Team Member
            </button>
          </div>

          <div
            v-if="form.teamMembers.length === 0"
            class="rounded-2xl bg-white p-4 text-sm text-slate-500"
          >
            No team members added.
          </div>

          <div class="space-y-4">
            <div
              v-for="(person, index) in form.teamMembers"
              :key="`team-${index}`"
              class="grid gap-4 rounded-2xl bg-white p-4 ring-1 ring-slate-200 md:grid-cols-4"
            >
              <input
                v-model="person.name"
                type="text"
                placeholder="Name"
                class="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
              />

              <input
                v-model="person.role"
                type="text"
                placeholder="Role"
                class="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
              />

              <input
                v-model="person.linkedin"
                type="url"
                placeholder="LinkedIn URL"
                class="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
              />

              <div class="flex gap-2">
                <input
                  v-model="person.email"
                  type="email"
                  placeholder="Email"
                  class="min-w-0 flex-1 rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
                />

                <button
                  type="button"
                  class="rounded-xl border border-red-200 px-3 text-sm font-semibold text-red-600 hover:bg-red-50"
                  @click="removePerson(form.teamMembers, index)"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        :disabled="saving"
        class="mt-8 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {{ saving ? 'Saving...' : editingId ? 'Update Startup' : 'Add Startup' }}
      </button>
    </form>

    <div class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <h2 class="mb-5 text-xl font-bold text-slate-900">Startup List</h2>

      <p v-if="loading" class="text-sm text-slate-500">Loading startups...</p>

      <div v-else class="overflow-x-auto">
        <table class="w-full min-w-[900px] text-left text-sm">
          <thead>
            <tr class="border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500">
              <th class="px-4 py-3">Startup</th>
              <th class="px-4 py-3">Category</th>
              <th class="px-4 py-3">Sector</th>
              <th class="px-4 py-3">Contact</th>
              <th class="px-4 py-3">Founders</th>
              <th class="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr
              v-for="startup in startups"
              :key="startup.id"
              class="border-b border-slate-100 text-slate-700"
            >
              <td class="px-4 py-4">
                <div class="flex items-center gap-3">
                  <img
                    v-if="startup.logo"
                    :src="startup.logo"
                    :alt="startup.name"
                    class="h-10 w-10 rounded-xl object-contain ring-1 ring-slate-200"
                  />
                  <div>
                    <p class="font-semibold text-slate-900">{{ startup.name }}</p>
                    <p class="line-clamp-1 max-w-xs text-xs text-slate-500">
                      {{ startup.brief }}
                    </p>
                  </div>
                </div>
              </td>

              <td class="px-4 py-4">
                {{ startup.categories?.map(categoryLabel).join(', ') || '-' }}
              </td>

              <td class="px-4 py-4">{{ startup.sector }}</td>

              <td class="px-4 py-4">{{ startup.contactEmail || '-' }}</td>

              <td class="px-4 py-4">
                {{ startup.founders?.map((person) => person.name).join(', ') || '-' }}
              </td>

              <td class="px-4 py-4">
                <div class="flex justify-end gap-2">
                  <button
                    type="button"
                    class="rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                    @click="editStartup(startup)"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    class="rounded-full border border-red-200 px-4 py-2 text-xs font-semibold text-red-600 hover:bg-red-50"
                    @click="deleteStartup(startup.id)"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>

            <tr v-if="startups.length === 0">
              <td colspan="6" class="px-4 py-8 text-center text-slate-500">
                No startups added yet.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  </AdminLayout>
</template>
