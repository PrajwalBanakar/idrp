<script setup lang="ts">
import type { TeamMember } from '@/types/team'
import PersonCard from '@/components/common/PersonCard.vue'

defineProps<{
  member: TeamMember
}>()
</script>

<template>
  <PersonCard
    :name="member.name"
    :image="member.image"
    :image-alt="member.imageAlt ?? member.name"
    :role="member.role"
    size="md"
    :profile-url="member.profileUrl"
    :linkedin-url="member.linkedinUrl"
  />
</template>
