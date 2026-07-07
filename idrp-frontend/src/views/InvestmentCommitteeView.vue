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
