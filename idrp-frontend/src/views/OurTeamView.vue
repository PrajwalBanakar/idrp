<template>
  <div class="our-team-view">
    <TeamHeroSection v-bind="teamHero" />
    <TeamGridSection :members="teamMembers" />
    <TeamCTASection v-bind="teamCTA" />
  </div>
</template>

<script setup lang="ts">
import TeamHeroSection from '@/components/team/TeamHeroSection.vue'
import TeamGridSection from '@/components/team/TeamGridSection.vue'
import TeamCTASection from '@/components/team/TeamCTASection.vue'

import { teamMembers, teamHero, teamCTA } from '@/data/team'
</script>
