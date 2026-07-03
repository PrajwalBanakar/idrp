<template>
  <div class="investor-matchmaking-form-view">
    <!-- Hero Banner -->
    <section class="relative h-[48vh] min-h-[320px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/investor-matchmaking-hero.jfif"
        alt="Investor Matchmaking Form"
        class="absolute inset-0 h-full w-full object-cover object-center"
        @error="showHeroImage = false"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-emerald-950/85 to-teal-700/35"
      />
      <div
        class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
      />

      <div class="relative z-10 flex h-full max-w-3xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-emerald-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-emerald-300">
            Investor–Startup Matchmaking
          </span>
        </div>

        <h1 class="mb-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Investor Profile Submission
        </h1>

        <p class="max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
          Share your investment preferences so IDRP can surface startups aligned with your thesis,
          sector focus, stage preference, and cheque size.
        </p>
      </div>
    </section>

    <!-- Intro -->
    <section class="bg-white px-6 py-16 md:px-16">
      <div class="mx-auto max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-emerald-600">
          Investor Intake
        </span>
        <h2 class="mt-3 mb-6 text-3xl font-bold text-gray-900">
          Tell Us About Your Investment Focus
        </h2>
        <p class="text-lg leading-relaxed text-gray-600">
          This form captures the core investor details needed for startup-fit assessment, curated
          recommendations, and structured ecosystem introductions.
        </p>
        <div
          class="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400"
        />
      </div>
    </section>

    <!-- Info cards -->
    <section class="bg-gray-50 px-6 py-12 md:px-16">
      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        <article class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div class="mb-3 text-2xl">🎯</div>
          <h3 class="text-lg font-bold text-gray-900">Focused Discovery</h3>
          <p class="mt-2 text-sm leading-relaxed text-gray-600">
            Your profile helps identify startups aligned with your sector, stage, and cheque-size
            preferences.
          </p>
        </article>

        <article class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div class="mb-3 text-2xl">📁</div>
          <h3 class="text-lg font-bold text-gray-900">Structured Pipeline</h3>
          <p class="mt-2 text-sm leading-relaxed text-gray-600">
            We use your thesis and selection criteria to curate more relevant startup opportunities.
          </p>
        </article>

        <article class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div class="mb-3 text-2xl">🤝</div>
          <h3 class="text-lg font-bold text-gray-900">Meaningful Introductions</h3>
          <p class="mt-2 text-sm leading-relaxed text-gray-600">
            Better fit leads to stronger conversations, more efficient meetings, and higher-quality
            engagement.
          </p>
        </article>
      </div>
    </section>

    <!-- Form -->
    <section class="bg-white px-6 py-20 md:px-16">
      <div class="mx-auto max-w-5xl">
        <div class="mb-10 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Investor Form
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">Submit Your Investor Profile</h2>
          <p class="mx-auto mt-3 max-w-2xl text-gray-500">
            Fill in the details below to help us understand your investment thesis and support
            fit-based startup discovery.
          </p>
        </div>

        <form
          class="space-y-8 rounded-3xl border border-gray-100 bg-gray-50 p-8 md:p-10"
          @submit.prevent="submitForm"
        >
          <!-- Basic details -->
          <div>
            <h3 class="mb-5 text-xl font-bold text-gray-900">1. Basic Details</h3>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Investor / Fund Name <span class="text-red-500">*</span>
                </label>
                <input
                  v-model.trim="form.investorName"
                  type="text"
                  placeholder="Enter investor or fund name"
                  class="form-input"
                  required
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Primary Contact Name <span class="text-red-500">*</span>
                </label>
                <input
                  v-model.trim="form.contactName"
                  type="text"
                  placeholder="Enter contact name"
                  class="form-input"
                  required
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Email ID <span class="text-red-500">*</span>
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
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Phone Number <span class="text-red-500">*</span>
                </label>
                <input
                  v-model.trim="form.phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  class="form-input"
                  required
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Website / Fund Link
                </label>
                <input
                  v-model.trim="form.website"
                  type="url"
                  placeholder="https://"
                  class="form-input"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Geography / Base Location <span class="text-red-500">*</span>
                </label>
                <input
                  v-model.trim="form.geography"
                  type="text"
                  placeholder="City / State / Country"
                  class="form-input"
                  required
                />
              </div>
            </div>
          </div>

          <!-- Investor profile -->
          <div>
            <h3 class="mb-5 text-xl font-bold text-gray-900">2. Investment Profile</h3>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Investor Type <span class="text-red-500">*</span>
                </label>
                <select v-model="form.investorType" class="form-input" required>
                  <option value="" disabled>Select investor type</option>
                  <option v-for="option in investorTypeOptions" :key="option" :value="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Preferred Stage <span class="text-red-500">*</span>
                </label>
                <select v-model="form.preferredStage" class="form-input" required>
                  <option value="" disabled>Select preferred stage</option>
                  <option v-for="option in stageOptions" :key="option" :value="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Typical Cheque Size <span class="text-red-500">*</span>
                </label>
                <input
                  v-model.trim="form.chequeSize"
                  type="text"
                  placeholder="e.g. ₹25L – ₹2Cr"
                  class="form-input"
                  required
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Preferred Geography
                </label>
                <input
                  v-model.trim="form.preferredGeography"
                  type="text"
                  placeholder="e.g. India / Global / South India"
                  class="form-input"
                />
              </div>
            </div>

            <div class="mt-6">
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Investment Thesis / Focus Areas <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model.trim="form.investmentThesis"
                rows="4"
                placeholder="Describe your focus areas, thesis, strategic sectors, or what you look for in startups..."
                class="form-input resize-none"
                required
              />
            </div>
          </div>

          <!-- Preferred sectors -->
          <div>
            <h3 class="mb-5 text-xl font-bold text-gray-900">3. Sector Preference</h3>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Preferred Sectors <span class="text-red-500">*</span>
                </label>
                <select v-model="form.preferredSector" class="form-input" required>
                  <option value="" disabled>Select primary sector</option>
                  <option v-for="option in sectorOptions" :key="option" :value="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Additional Sector Interest
                </label>
                <input
                  v-model.trim="form.additionalSectorInterest"
                  type="text"
                  placeholder="e.g. AI, DeepTech, ClimateTech"
                  class="form-input"
                />
              </div>
            </div>

            <div class="mt-6">
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Sector Notes / Strategic Interest
              </label>
              <textarea
                v-model.trim="form.sectorNotes"
                rows="3"
                placeholder="Mention specific verticals, technologies, or themes you are most interested in..."
                class="form-input resize-none"
              />
            </div>
          </div>

          <!-- Engagement preferences -->
          <div>
            <h3 class="mb-5 text-xl font-bold text-gray-900">4. Engagement Preference</h3>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Preferred Engagement Type
                </label>
                <select v-model="form.engagementType" class="form-input">
                  <option value="" disabled>Select engagement type</option>
                  <option v-for="option in engagementTypeOptions" :key="option" :value="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Introduction Preference
                </label>
                <select v-model="form.introductionPreference" class="form-input">
                  <option value="" disabled>Select preference</option>
                  <option
                    v-for="option in introductionPreferenceOptions"
                    :key="option"
                    :value="option"
                  >
                    {{ option }}
                  </option>
                </select>
              </div>
            </div>

            <div class="mt-6">
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Additional Notes
              </label>
              <textarea
                v-model.trim="form.additionalNotes"
                rows="3"
                placeholder="Anything else startups or the ecosystem team should know about your preferences..."
                class="form-input resize-none"
              />
            </div>
          </div>

          <!-- Consent -->
          <div>
            <h3 class="mb-5 text-xl font-bold text-gray-900">5. Consent</h3>

            <div
              class="rounded-2xl border border-gray-200 bg-white p-5 text-sm leading-relaxed text-gray-500"
            >
              <p class="mb-2 font-semibold text-gray-700">Disclaimer &amp; Consent</p>
              <p>
                By submitting this form, I/We confirm that the information provided is voluntarily
                shared for the purpose of startup discovery, fit-based curation, and ecosystem
                engagement. Submission does not guarantee startup introductions, deal flow
                exclusivity, or allocation. Please avoid sharing confidential information unless you
                are comfortable disclosing it for preliminary review and matchmaking purposes.
              </p>
            </div>

            <div class="mt-5 flex items-start gap-3">
              <input
                id="investor-consent"
                v-model="form.consent"
                type="checkbox"
                class="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded accent-emerald-600"
                required
              />
              <label
                for="investor-consent"
                class="cursor-pointer text-sm leading-relaxed text-gray-600"
              >
                I have read and agree to the disclaimer and consent terms
              </label>
            </div>
          </div>

          <!-- Submit -->
          <div class="pt-2">
            <button
              type="submit"
              class="w-full rounded-xl bg-emerald-700 py-4 text-sm font-bold tracking-wide text-white transition-colors duration-200 hover:bg-emerald-800"
            >
              Submit Investor Profile
            </button>
          </div>

          <div
            v-if="submitted"
            class="flex items-center gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm font-medium text-emerald-700"
          >
            <span class="text-xl">✅</span>
            Thank you! Your investor profile has been submitted successfully.
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

type InvestorForm = {
  investorName: string
  contactName: string
  email: string
  phone: string
  website: string
  geography: string
  investorType: string
  preferredStage: string
  chequeSize: string
  preferredGeography: string
  investmentThesis: string
  preferredSector: string
  additionalSectorInterest: string
  sectorNotes: string
  engagementType: string
  introductionPreference: string
  additionalNotes: string
  consent: boolean
}

const showHeroImage = ref(true)
const submitted = ref(false)

const investorTypeOptions: string[] = [
  'Angel Investor',
  'Angel Network',
  'Seed Fund',
  'Venture Capital Fund',
  'Corporate Investor',
  'Strategic Investor',
  'Impact Investor',
  'Family Office',
  'Other',
]

const stageOptions: string[] = [
  'Idea Stage',
  'Prototype / MVP',
  'Early Traction',
  'Revenue Stage',
  'Growth Stage',
  'Open to Multiple Stages',
]

const sectorOptions: string[] = [
  'AI / ML',
  'HealthTech',
  'FinTech',
  'EdTech',
  'AgriTech',
  'ClimateTech',
  'DeepTech',
  'SaaS',
  'Manufacturing',
  'Mobility',
  'IoT / Embedded Systems',
  'Cybersecurity',
  'Other',
]

const engagementTypeOptions: string[] = [
  '1:1 Introduction',
  'Demo Day / Showcase',
  'Thematic Startup Pipeline',
  'Mentor + Investor Interaction',
  'Open to Multiple Formats',
]

const introductionPreferenceOptions: string[] = [
  'Warm Introductions Only',
  'Screened Startup Recommendations',
  'Direct Startup Outreach is Fine',
  'Open to All Relevant Introductions',
]

const form = reactive<InvestorForm>({
  investorName: '',
  contactName: '',
  email: '',
  phone: '',
  website: '',
  geography: '',
  investorType: '',
  preferredStage: '',
  chequeSize: '',
  preferredGeography: '',
  investmentThesis: '',
  preferredSector: '',
  additionalSectorInterest: '',
  sectorNotes: '',
  engagementType: '',
  introductionPreference: '',
  additionalNotes: '',
  consent: false,
})

function resetForm() {
  form.investorName = ''
  form.contactName = ''
  form.email = ''
  form.phone = ''
  form.website = ''
  form.geography = ''
  form.investorType = ''
  form.preferredStage = ''
  form.chequeSize = ''
  form.preferredGeography = ''
  form.investmentThesis = ''
  form.preferredSector = ''
  form.additionalSectorInterest = ''
  form.sectorNotes = ''
  form.engagementType = ''
  form.introductionPreference = ''
  form.additionalNotes = ''
  form.consent = false
}

function submitForm() {
  submitted.value = true
  resetForm()

  window.setTimeout(() => {
    submitted.value = false
  }, 6000)
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
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.28);
}

.form-input::placeholder {
  color: rgb(156 163 175);
}
</style>
