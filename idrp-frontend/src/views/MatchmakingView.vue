<template>
  <div class="matchmaking-view">
    <!-- Hero Banner -->
    <section class="relative h-[52vh] min-h-[360px] overflow-hidden">
      <img
        v-if="showHeroImage"
        src="/matchmaking-hero.jfif"
        alt="Investor Startup Matchmaking"
        class="absolute inset-0 h-full w-full object-cover object-center"
        @error="showHeroImage = false"
      />
      <div
        class="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-teal-950/85 to-emerald-800/40"
      />
      <div
        class="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"
      />

      <div class="relative z-10 flex h-full max-w-3xl flex-col justify-center px-10 md:px-20">
        <div class="mb-4 flex items-center gap-3">
          <div class="h-8 w-1 rounded-full bg-teal-400" />
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-300">
            Ecosystem Enablement
          </span>
        </div>

        <h1 class="mb-5 text-4xl font-extrabold leading-tight text-white md:text-6xl">
          Investor–Startup Matchmaking
        </h1>

        <p class="max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
          A structured platform to connect promising startups with relevant investors through domain
          fit, stage alignment, funding compatibility, and curated introductions.
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <RouterLink
            to="/matchmaking/startup"
            class="inline-flex items-center justify-center rounded-xl bg-teal-600 px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[var(--color-primary)]"
          >
            Apply as Startup
          </RouterLink>

          <RouterLink
            to="/matchmaking/investor"
            class="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-emerald-700"
          >
            Join as Investor
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Intro -->
    <section class="bg-white px-6 py-20 md:px-16">
      <div class="mx-auto max-w-3xl text-center">
        <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
          Why Matchmaking
        </span>
        <h2 class="mt-3 mb-6 text-3xl font-bold text-gray-900">
          Curated Connections, Not Random Discovery
        </h2>
        <p class="mb-5 text-lg leading-relaxed text-gray-600">
          Startups often struggle to find the right investors, and investors often see too many
          opportunities without enough relevance filtering.
        </p>
        <p class="text-lg leading-relaxed text-gray-600">
          This platform is designed to improve quality of interactions by aligning startups and
          investors on sector, maturity, capital needs, strategic interests, and ecosystem fit.
        </p>
        <div
          class="mx-auto mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-teal-500 to-cyan-400"
        />
      </div>
    </section>

    <!-- Value Cards -->
    <section class="bg-gray-50 px-6 py-20 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            Who It Helps
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">Built for Both Sides</h2>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article
            class="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-lg"
          >
            <div class="mb-5 flex items-center gap-4">
              <div
                class="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-600 text-2xl text-white"
              >
                🚀
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">For Startups</h3>
                <p class="text-sm font-medium text-[var(--color-primary)]">
                  Discover relevant investors
                </p>
              </div>
            </div>

            <p class="leading-relaxed text-gray-600">
              Founders can present their venture in a structured way and discover investors whose
              thesis, sector focus, and cheque size align with the startup’s current stage and
              ambition.
            </p>

            <ul class="mt-6 space-y-3 text-sm leading-relaxed text-gray-600">
              <li>• Showcase startup profile, domain, stage, traction, and funding ask</li>
              <li>• Get matched with investors based on fit rather than broad search</li>
              <li>• Improve pitch readiness through curated ecosystem support</li>
              <li>• Track meaningful introductions and potential interest</li>
            </ul>

            <div class="mt-8">
              <RouterLink
                to="/matchmaking/startup"
                class="inline-flex items-center justify-center rounded-xl bg-[var(--color-primary)] px-5 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-teal-800"
              >
                Apply as Startup
              </RouterLink>
            </div>
          </article>

          <article
            class="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-lg"
          >
            <div class="mb-5 flex items-center gap-4">
              <div
                class="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-600 text-2xl text-white"
              >
                💰
              </div>
              <div>
                <h3 class="text-2xl font-bold text-gray-900">For Investors</h3>
                <p class="text-sm font-medium text-emerald-600">Access curated startup pipeline</p>
              </div>
            </div>

            <p class="leading-relaxed text-gray-600">
              Investors can define their investment preferences and receive access to startup
              opportunities that are more aligned with their strategy, stage preference, and risk
              profile.
            </p>

            <ul class="mt-6 space-y-3 text-sm leading-relaxed text-gray-600">
              <li>• Specify sector interests, stages, geography, and ticket size</li>
              <li>• Discover startups through fit-based curation</li>
              <li>• Review structured startup summaries and readiness signals</li>
              <li>• Enable focused meetings, demo sessions, and introductions</li>
            </ul>

            <div class="mt-8">
              <RouterLink
                to="/matchmaking/investor"
                class="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-emerald-700"
              >
                Join as Investor
              </RouterLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Matching Criteria -->
    <section class="bg-white px-6 py-20 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            Matching Logic
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">How Matching Will Work</h2>
          <p class="mx-auto mt-4 max-w-3xl text-gray-500">
            The first version can use structured fit parameters to recommend relevant matches and
            enable curated engagement.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
          <article
            v-for="criterion in matchCriteria"
            :key="criterion.title"
            class="rounded-2xl border border-gray-100 bg-gray-50 p-6 text-center"
          >
            <div
              class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm"
            >
              {{ criterion.icon }}
            </div>
            <h3 class="mt-4 text-lg font-bold text-gray-900">{{ criterion.title }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-gray-600">
              {{ criterion.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="bg-gray-50 px-6 py-20 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            Process
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">How the Flow Works</h2>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <article
            v-for="step in processSteps"
            :key="step.step"
            class="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            <span class="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
              Step {{ step.step }}
            </span>
            <h3 class="mt-3 text-xl font-bold text-gray-900">{{ step.title }}</h3>
            <p class="mt-3 text-sm leading-relaxed text-gray-600">
              {{ step.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- What each form captures -->
    <section class="bg-white px-6 py-20 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            Profile Data
          </span>
          <h2 class="mt-2 text-4xl font-bold text-gray-900">What We Will Capture</h2>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article class="rounded-3xl border border-gray-100 bg-gray-50 p-8">
            <h3 class="text-2xl font-bold text-gray-900">Startup Profile</h3>
            <p class="mt-3 leading-relaxed text-gray-600">
              The startup form will collect structured information needed for quality matching.
            </p>

            <div class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div
                v-for="field in startupFields"
                :key="field"
                class="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700"
              >
                {{ field }}
              </div>
            </div>
          </article>

          <article class="rounded-3xl border border-gray-100 bg-gray-50 p-8">
            <h3 class="text-2xl font-bold text-gray-900">Investor Profile</h3>
            <p class="mt-3 leading-relaxed text-gray-600">
              The investor form will capture thesis and preference details for targeted discovery.
            </p>

            <div class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div
                v-for="field in investorFields"
                :key="field"
                class="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700"
              >
                {{ field }}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-white px-6 py-24 md:px-16">
      <div class="mx-auto max-w-5xl">
        <div
          class="rounded-3xl border border-gray-100 bg-gradient-to-r from-teal-700 to-emerald-700 p-8 text-center text-white md:p-12"
        >
          <span class="text-sm font-semibold uppercase tracking-widest text-teal-100">
            Get Started
          </span>
          <h2 class="mt-3 text-3xl font-bold md:text-4xl">Choose Your Matchmaking Path</h2>
          <p class="mx-auto mt-4 max-w-2xl leading-relaxed text-teal-50">
            Submit your startup profile or register as an investor to begin structured discovery,
            curated matching, and meaningful ecosystem engagement.
          </p>

          <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <RouterLink
              to="/matchmaking/startup"
              class="inline-flex items-center justify-center rounded-xl bg-teal-600 px-6 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-[var(--color-primary)]"
            >
              Startup Form
            </RouterLink>

            <RouterLink
              to="/matchmaking/investor"
              class="inline-flex items-center justify-center rounded-xl bg-emerald-900/30 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/30 transition-colors duration-200 hover:bg-emerald-900/40"
            >
              Investor Form
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

type MatchCriterion = {
  title: string
  description: string
  icon: string
}

type ProcessStep = {
  step: string
  title: string
  description: string
}

const showHeroImage = ref(true)

const matchCriteria: MatchCriterion[] = [
  {
    title: 'Sector Fit',
    description: 'Align startups and investors based on domain relevance and thesis overlap.',
    icon: '🏭',
  },
  {
    title: 'Stage Fit',
    description: 'Match by idea, MVP, early traction, growth, or scale stage.',
    icon: '📈',
  },
  {
    title: 'Funding Fit',
    description: 'Compare startup ask with investor cheque size and investment range.',
    icon: '💳',
  },
  {
    title: 'Geography Fit',
    description: 'Support local, regional, national, or global preference alignment.',
    icon: '🌍',
  },
  {
    title: 'Strategic Fit',
    description: 'Consider long-term interest, value-add potential, and ecosystem compatibility.',
    icon: '🤝',
  },
]

const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Create Profile',
    description:
      'Startups and investors submit structured profiles with the right discovery information.',
  },
  {
    step: '02',
    title: 'Evaluate Fit',
    description:
      'The platform checks alignment across sector, stage, funding, geography, and strategy.',
  },
  {
    step: '03',
    title: 'Curate Matches',
    description:
      'Relevant potential matches are shortlisted instead of showing broad unrelated listings.',
  },
  {
    step: '04',
    title: 'Enable Introductions',
    description:
      'Qualified introductions, meetings, and ecosystem engagement can then be facilitated.',
  },
]

const startupFields: string[] = [
  'Startup Name',
  'Sector / Domain',
  'Stage',
  'Funding Ask',
  'Business Model',
  'Geography',
  'Traction Metrics',
  'Founder Details',
  'Website / Deck Link',
  'Investor Preference',
]

const investorFields: string[] = [
  'Investor / Fund Name',
  'Preferred Sectors',
  'Preferred Stages',
  'Cheque Size',
  'Geography Preference',
  'Investment Thesis',
  'Portfolio Interests',
  'Introduction Preference',
  'Website / Fund Link',
  'Contact Details',
]
</script>
