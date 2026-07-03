<!-- <template>
  <div class="our-team-view">
    <TeamHeroSection v-bind="teamHero" />

    <section v-if="loading" class="bg-white px-6 py-16 md:px-12 lg:px-16">
      <div class="mx-auto max-w-7xl rounded-3xl bg-slate-50 p-8 text-center text-slate-600">
        Loading team members...
      </div>
    </section>

    <section v-else-if="errorMessage" class="bg-white px-6 py-16 md:px-12 lg:px-16">
      <div
        class="mx-auto max-w-7xl rounded-3xl border border-red-200 bg-red-50 p-8 text-center text-red-700"
      >
        {{ errorMessage }}
      </div>
    </section>

    <TeamGridSection v-else :members="members" />

    <TeamCTASection v-bind="teamCTA" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import TeamHeroSection from '@/components/team/TeamHeroSection.vue'
import TeamGridSection from '@/components/team/TeamGridSection.vue'
import TeamCTASection from '@/components/team/TeamCTASection.vue'

import { teamHero, teamCTA } from '@/data/team'

import { teamMemberService } from '@/services/teamMemberService'
import type { TeamMember } from '@/types/team'

const members = ref<TeamMember[]>([])

const loading = ref(false)
const errorMessage = ref('')

const fetchTeamMembers = async () => {
  loading.value = true
  errorMessage.value = ''

  try {
    members.value = await teamMemberService.getAll()
  } catch (error) {
    errorMessage.value =
      error instanceof Error ? error.message : 'Failed to load team members'
  } finally {
    loading.value = false
  }
}

onMounted(fetchTeamMembers)
</script> -->

<!-- ========================================================= -->
<!-- 🔒 OLD STATIC VERSION (FALLBACK / REFERENCE)              -->
<!-- ========================================================= -->


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
