<!-- <template>
  <div class="investment-committee-view">
    <TeamHeroSection v-bind="investmentCommitteeHero" />

    <section v-if="loading" class="bg-white px-6 py-16 md:px-12 lg:px-16">
      <div class="mx-auto max-w-7xl rounded-3xl bg-slate-50 p-8 text-center text-slate-600">
        Loading investment committee members...
      </div>
    </section>

    <section v-else-if="errorMessage" class="bg-white px-6 py-16 md:px-12 lg:px-16">
      <div
        class="mx-auto max-w-7xl rounded-3xl border border-red-200 bg-red-50 p-8 text-center text-red-700"
      >
        {{ errorMessage }}
      </div>
    </section>

    <TeamGridSection
      v-else
      eyebrow="Committee Members"
      title="People Guiding Investment Readiness"
      description="A focused group of leaders supporting venture evaluation, strategic direction, and investment readiness within the IDRP ecosystem."
      :members="members"
    />

    <TeamCTASection v-bind="investmentCommitteeCTA" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import TeamCTASection from '@/components/team/TeamCTASection.vue'
import TeamGridSection from '@/components/team/TeamGridSection.vue'
import TeamHeroSection from '@/components/team/TeamHeroSection.vue'

import {
  investmentCommitteeCTA,
  investmentCommitteeHero,
} from '@/data/investmentCommittee'

import { investmentCommitteeService } from '@/services/investmentCommitteeService'
import type { TeamMember } from '@/types/team'

const members = ref<TeamMember[]>([])

const loading = ref(false)
const errorMessage = ref('')

const fetchInvestmentCommitteeMembers = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    members.value = await investmentCommitteeService.getAll()
  } catch (error) {
    errorMessage.value =
      error instanceof Error
        ? error.message
        : 'Failed to load investment committee members'
  } finally {
    loading.value = false
  }
}

onMounted(fetchInvestmentCommitteeMembers)
</script> -->

<!-- ========================================================= -->
<!-- 🔒 OLD STATIC VERSION (FALLBACK / REFERENCE)              -->
<!-- ========================================================= -->




<script setup lang="ts">
import TeamCTASection from '@/components/team/TeamCTASection.vue'
import TeamGridSection from '@/components/team/TeamGridSection.vue'
import TeamHeroSection from '@/components/team/TeamHeroSection.vue'

import {
  investmentCommitteeCTA,
  investmentCommitteeHero,
  investmentCommitteeMembers,
} from '@/data/investmentCommittee'
</script>

<template>
  <div class="investment-committee-view">
    <TeamHeroSection v-bind="investmentCommitteeHero" />

    <TeamGridSection
      eyebrow="Committee Members"
      title="People Guiding Investment Readiness"
      description="A focused group of leaders supporting venture evaluation, strategic direction, and investment readiness within the IDRP ecosystem."
      :members="investmentCommitteeMembers"
    />

    <TeamCTASection v-bind="investmentCommitteeCTA" />
  </div>
</template>
