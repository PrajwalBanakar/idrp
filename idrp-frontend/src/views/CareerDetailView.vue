<template>
  <div v-if="job" class="career-detail-view">
    <section class="bg-white px-6 py-16 md:px-16">
      <div class="mx-auto max-w-4xl">
        <RouterLink
          to="/careers"
          class="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-[var(--color-primary)]"
        >
          ← Back to Careers
        </RouterLink>

        <div class="mb-6 flex flex-wrap items-center gap-3">
          <span
            class="inline-flex items-center rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--color-primary)]"
          >
            {{ job.department }}
          </span>
          <span
            class="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-600"
          >
            {{ job.employmentType }}
          </span>
          <span
            class="inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]"
            :class="
              job.status === 'OPEN'
                ? 'bg-emerald-100 text-emerald-700'
                : 'bg-slate-200 text-slate-500'
            "
          >
            {{ job.status === 'OPEN' ? 'Open' : 'Closed' }}
          </span>
        </div>

        <h1 class="text-4xl font-bold tracking-tight text-slate-900">{{ job.title }}</h1>
        <p class="mt-3 text-base text-slate-500">
          {{ job.location }}<template v-if="formattedDeadline"> · Apply by {{ formattedDeadline }}</template>
        </p>

        <div class="mt-10 space-y-8">
          <div>
            <h2 class="mb-3 text-xl font-bold text-slate-900">About the Role</h2>
            <p class="leading-7 text-slate-600">{{ job.description }}</p>
          </div>

          <div v-if="job.eligibility">
            <h2 class="mb-3 text-xl font-bold text-slate-900">Eligibility</h2>
            <p class="leading-7 text-slate-600">{{ job.eligibility }}</p>
          </div>
        </div>
      </div>
    </section>

    <section v-if="job.status === 'OPEN' && job.applyUrl" class="bg-gray-50 px-6 py-16 md:px-16">
      <div class="mx-auto max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          Application
        </span>
        <h2 class="mt-2 text-3xl font-bold text-gray-900">Apply for this Role</h2>
        <p class="mx-auto mt-3 max-w-xl text-slate-600">
          Applications for this role are collected via Google Forms. Click below to open the
          application form in a new tab.
        </p>
        <a
          :href="job.applyUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-8 inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-8 py-4 text-sm font-bold tracking-wide text-white transition-colors duration-200 hover:bg-teal-800"
        >
          Apply via Google Form ↗
        </a>
      </div>
    </section>

    <section v-else-if="job.status === 'OPEN'" class="bg-gray-50 px-6 py-16 md:px-16">
      <div class="mx-auto max-w-3xl">
        <div class="mb-10 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            Application
          </span>
          <h2 class="mt-2 text-3xl font-bold text-gray-900">Apply for this Role</h2>
        </div>

        <form
          class="space-y-6 rounded-3xl border border-gray-100 bg-white p-8 md:p-10"
          @submit.prevent="submitForm"
        >
          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Full Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model.trim="form.applicantName"
              type="text"
              placeholder="Enter your full name"
              class="form-input"
              required
            />
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Email <span class="text-red-500">*</span>
              </label>
              <input
                v-model.trim="form.email"
                type="email"
                placeholder="you@example.com"
                class="form-input"
                required
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700"> Phone Number </label>
              <input
                v-model.trim="form.phone"
                type="tel"
                placeholder="+91 98765 43210"
                class="form-input"
              />
            </div>
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Resume / Document Link <span class="text-red-500">*</span>
            </label>
            <input
              v-model.trim="form.resumeUrl"
              type="url"
              placeholder="Link to your resume (Drive, Dropbox, etc.)"
              class="form-input"
              required
            />
          </div>

          <div>
            <label class="mb-2 block text-sm font-semibold text-gray-700">
              Cover Letter / Message
            </label>
            <textarea
              v-model.trim="form.coverLetter"
              rows="4"
              placeholder="Tell us why you're a good fit for this role..."
              class="form-input resize-none"
            />
          </div>

          <div class="pt-2">
            <button
              type="submit"
              :disabled="submitting"
              class="w-full rounded-xl bg-[var(--color-primary)] py-4 text-sm font-bold tracking-wide text-white transition-colors duration-200 hover:bg-teal-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {{ submitting ? 'Submitting...' : 'Submit Application' }}
            </button>
          </div>

          <div
            v-if="errorMessage"
            class="flex items-center gap-3 rounded-xl border border-rose-200 bg-rose-50 px-5 py-4 text-sm font-medium text-rose-700"
          >
            {{ errorMessage }}
          </div>

          <div
            v-if="submitted"
            class="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-700"
          >
            <span class="text-xl">✅</span>
            Thank you! Your application has been submitted successfully.
          </div>
        </form>
      </div>
    </section>
  </div>

  <div v-else class="flex min-h-[50vh] flex-col items-center justify-center px-6 text-center">
    <h1 class="text-3xl font-bold text-slate-900">Job Not Found</h1>
    <p class="mt-3 max-w-md text-slate-600">
      This position may have been filled or removed. Explore our other open roles.
    </p>
    <RouterLink
      to="/careers"
      class="mt-8 inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[var(--color-primary)]"
    >
      View All Careers
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { getJobBySlug } from '@/data/careers'
import { useSimulatedSubmit } from '@/composables/useSimulatedSubmit'

// TODO(admin-integration): This form currently only simulates submission locally.
// Wire it to POST /api/job-applications once the Careers page is connected to the backend.
type ApplicationForm = {
  applicantName: string
  email: string
  phone: string
  resumeUrl: string
  coverLetter: string
}

const route = useRoute()

const slug = computed(() => String(route.params.slug ?? ''))
const job = computed(() => getJobBySlug(slug.value))

const formattedDeadline = computed(() => {
  if (!job.value?.deadline) return ''
  return new Date(job.value.deadline).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
})

const { submitting, submitted, errorMessage, submit } = useSimulatedSubmit()

const form = reactive<ApplicationForm>({
  applicantName: '',
  email: '',
  phone: '',
  resumeUrl: '',
  coverLetter: '',
})

function resetForm() {
  form.applicantName = ''
  form.email = ''
  form.phone = ''
  form.resumeUrl = ''
  form.coverLetter = ''
}

function submitForm() {
  submit(resetForm)
}
</script>

<style scoped>
.form-input {
  width: 100%;
  border-radius: 0.9rem;
  border: 1px solid rgb(229 231 235);
  background: white;
  padding: 0.85rem 1rem;
  font-size: 0.95rem;
  color: rgb(55 65 81);
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}

.form-input:focus {
  border-color: transparent;
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.28);
}

.form-input::placeholder {
  color: rgb(156 163 175);
}
</style>
