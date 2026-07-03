<template>
  <div class="startup-matchmaking-form-view">
    <!-- Hero Banner -->
    <section class="relative h-[48vh] min-h-[320px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/startup-matchmaking-hero.jfif"
        alt="Startup Matchmaking Form"
        class="absolute inset-0 h-full w-full object-cover object-center"
        @error="showHeroImage = false"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-teal-950/85 to-teal-700/35"
      />
      <div
        class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
      />

      <div class="relative z-10 flex h-full max-w-3xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Investor–Startup Matchmaking
          </span>
        </div>

        <h1 class="mb-4 text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Startup Profile Submission
        </h1>

        <p class="max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
          Share your startup profile so IDRP can support structured discovery, relevant investor
          matching, and curated introductions.
        </p>
      </div>
    </section>

    <!-- Intro -->
    <section class="bg-white px-6 py-16 md:px-16">
      <div class="mx-auto max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          Founder Intake
        </span>
        <h2 class="mt-3 mb-6 text-3xl font-bold text-gray-900">Tell Us About Your Startup</h2>
        <p class="text-lg leading-relaxed text-gray-600">
          This form captures the core startup details needed for initial investor-fit assessment,
          ecosystem curation, and future matchmaking workflows.
        </p>
        <div
          class="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"
        />
      </div>
    </section>

    <!-- Info cards -->
    <section class="bg-gray-50 px-6 py-12 md:px-16">
      <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
        <article class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div class="mb-3 text-2xl">🧭</div>
          <h3 class="text-lg font-bold text-gray-900">Structured Discovery</h3>
          <p class="mt-2 text-sm leading-relaxed text-gray-600">
            Your profile helps identify relevant investors based on stage, sector, and funding fit.
          </p>
        </article>

        <article class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div class="mb-3 text-2xl">📊</div>
          <h3 class="text-lg font-bold text-gray-900">Readiness Snapshot</h3>
          <p class="mt-2 text-sm leading-relaxed text-gray-600">
            We capture traction, business model, and maturity indicators for better curation.
          </p>
        </article>

        <article class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div class="mb-3 text-2xl">🤝</div>
          <h3 class="text-lg font-bold text-gray-900">Curated Introductions</h3>
          <p class="mt-2 text-sm leading-relaxed text-gray-600">
            Good matches lead to more relevant meetings, investor conversations, and support.
          </p>
        </article>
      </div>
    </section>

    <!-- Form -->
    <section class="bg-white px-6 py-20 md:px-16">
      <div class="mx-auto max-w-5xl">
        <div class="mb-10 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            Startup Form
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">Submit Your Startup Profile</h2>
          <p class="mx-auto mt-3 max-w-2xl text-gray-500">
            Fill in the details below to help us understand your venture and enable fit-based
            investor discovery.
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
                  Startup Name <span class="text-red-500">*</span>
                </label>
                <input
                  v-model.trim="form.startupName"
                  type="text"
                  placeholder="Enter startup name"
                  class="form-input"
                  required
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Founder / Primary Contact Name <span class="text-red-500">*</span>
                </label>
                <input
                  v-model.trim="form.founderName"
                  type="text"
                  placeholder="Enter founder name"
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
                  Website / Product Link
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
                  Geography / Operating Location <span class="text-red-500">*</span>
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

          <!-- Startup profile -->
          <div>
            <h3 class="mb-5 text-xl font-bold text-gray-900">2. Startup Profile</h3>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Sector / Domain <span class="text-red-500">*</span>
                </label>
                <select v-model="form.sector" class="form-input" required>
                  <option value="" disabled>Select sector</option>
                  <option v-for="option in sectorOptions" :key="option" :value="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Startup Stage <span class="text-red-500">*</span>
                </label>
                <select v-model="form.stage" class="form-input" required>
                  <option value="" disabled>Select stage</option>
                  <option v-for="option in stageOptions" :key="option" :value="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Business Model <span class="text-red-500">*</span>
                </label>
                <select v-model="form.businessModel" class="form-input" required>
                  <option value="" disabled>Select business model</option>
                  <option v-for="option in businessModelOptions" :key="option" :value="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700"> Team Size </label>
                <input
                  v-model.trim="form.teamSize"
                  type="text"
                  placeholder="e.g. 5 members"
                  class="form-input"
                />
              </div>
            </div>

            <div class="mt-6">
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Startup Description <span class="text-red-500">*</span>
              </label>
              <textarea
                v-model.trim="form.startupDescription"
                rows="4"
                placeholder="Describe your startup, problem being solved, solution, and target users..."
                class="form-input resize-none"
                required
              />
            </div>
          </div>

          <!-- Funding and traction -->
          <div>
            <h3 class="mb-5 text-xl font-bold text-gray-900">3. Funding & Traction</h3>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Funding Ask <span class="text-red-500">*</span>
                </label>
                <input
                  v-model.trim="form.fundingAsk"
                  type="text"
                  placeholder="e.g. ₹50 Lakhs"
                  class="form-input"
                  required
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Current Revenue / Financial Stage
                </label>
                <input
                  v-model.trim="form.revenueStage"
                  type="text"
                  placeholder="e.g. Pre-revenue / ₹5L MRR"
                  class="form-input"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Current Traction
                </label>
                <input
                  v-model.trim="form.traction"
                  type="text"
                  placeholder="e.g. Users, pilots, paying customers"
                  class="form-input"
                />
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Pitch Deck / Profile Link
                </label>
                <input
                  v-model.trim="form.deckLink"
                  type="url"
                  placeholder="https://"
                  class="form-input"
                />
              </div>
            </div>

            <div class="mt-6">
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Key Milestones / Achievements
              </label>
              <textarea
                v-model.trim="form.milestones"
                rows="3"
                placeholder="Mention product launch, pilots, grants, partnerships, IP, customer traction, etc."
                class="form-input resize-none"
              />
            </div>
          </div>

          <!-- Investor preference -->
          <div>
            <h3 class="mb-5 text-xl font-bold text-gray-900">4. Investor Preference</h3>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Preferred Investor Type
                </label>
                <select v-model="form.investorType" class="form-input">
                  <option value="" disabled>Select investor type</option>
                  <option v-for="option in investorTypeOptions" :key="option" :value="option">
                    {{ option }}
                  </option>
                </select>
              </div>

              <div>
                <label class="mb-2 block text-sm font-semibold text-gray-700">
                  Preferred Geography of Investor
                </label>
                <input
                  v-model.trim="form.preferredInvestorGeography"
                  type="text"
                  placeholder="e.g. India / Global / South India"
                  class="form-input"
                />
              </div>
            </div>

            <div class="mt-6">
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                What kind of investor are you looking for?
              </label>
              <textarea
                v-model.trim="form.investorPreferenceNotes"
                rows="3"
                placeholder="Describe your ideal investor profile, value-add expectations, domain expertise, network needs, etc."
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
                shared for the purpose of startup discovery, investor-fit assessment, and ecosystem
                engagement. Submission does not guarantee investor introduction, funding, or
                selection. Please avoid sharing confidential information unless you are comfortable
                disclosing it for preliminary review and matchmaking purposes.
              </p>
            </div>

            <div class="mt-5 flex items-start gap-3">
              <input
                id="startup-consent"
                v-model="form.consent"
                type="checkbox"
                class="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded accent-teal-600"
                required
              />
              <label
                for="startup-consent"
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
              class="w-full rounded-xl bg-[var(--color-primary)] py-4 text-sm font-bold tracking-wide text-white transition-colors duration-200 hover:bg-teal-800"
            >
              Submit Startup Profile
            </button>
          </div>

          <div
            v-if="submitted"
            class="flex items-center gap-3 rounded-xl border border-[var(--color-primary)]/20 bg-[var(--color-primary-soft)] px-5 py-4 text-sm font-medium text-[var(--color-primary)]"
          >
            <span class="text-xl">✅</span>
            Thank you! Your startup profile has been submitted successfully.
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

type StartupForm = {
  startupName: string
  founderName: string
  email: string
  phone: string
  website: string
  geography: string
  sector: string
  stage: string
  businessModel: string
  teamSize: string
  startupDescription: string
  fundingAsk: string
  revenueStage: string
  traction: string
  deckLink: string
  milestones: string
  investorType: string
  preferredInvestorGeography: string
  investorPreferenceNotes: string
  consent: boolean
}

const showHeroImage = ref(true)
const submitted = ref(false)

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

const stageOptions: string[] = [
  'Idea Stage',
  'Prototype / MVP',
  'Early Traction',
  'Revenue Stage',
  'Growth Stage',
]

const businessModelOptions: string[] = [
  'B2B',
  'B2C',
  'B2B2C',
  'D2C',
  'Marketplace',
  'SaaS',
  'Enterprise',
  'Other',
]

const investorTypeOptions: string[] = [
  'Angel Investor',
  'Seed Fund',
  'Venture Capital',
  'Corporate Investor',
  'Strategic Investor',
  'Impact Investor',
  'Open to Any Relevant Investor',
]

const form = reactive<StartupForm>({
  startupName: '',
  founderName: '',
  email: '',
  phone: '',
  website: '',
  geography: '',
  sector: '',
  stage: '',
  businessModel: '',
  teamSize: '',
  startupDescription: '',
  fundingAsk: '',
  revenueStage: '',
  traction: '',
  deckLink: '',
  milestones: '',
  investorType: '',
  preferredInvestorGeography: '',
  investorPreferenceNotes: '',
  consent: false,
})

function resetForm() {
  form.startupName = ''
  form.founderName = ''
  form.email = ''
  form.phone = ''
  form.website = ''
  form.geography = ''
  form.sector = ''
  form.stage = ''
  form.businessModel = ''
  form.teamSize = ''
  form.startupDescription = ''
  form.fundingAsk = ''
  form.revenueStage = ''
  form.traction = ''
  form.deckLink = ''
  form.milestones = ''
  form.investorType = ''
  form.preferredInvestorGeography = ''
  form.investorPreferenceNotes = ''
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
  box-shadow: 0 0 0 3px rgba(45, 212, 191, 0.28);
}

.form-input::placeholder {
  color: rgb(156 163 175);
}
</style>
