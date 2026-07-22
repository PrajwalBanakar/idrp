<script setup lang="ts">
import type { Mentor } from '@/types/mentors'
import PersonCard from '@/components/common/PersonCard.vue'

defineProps<{
  mentor: Mentor
}>()
</script>

<template>
  <PersonCard
    :name="mentor.name"
    :image="mentor.image"
    :image-alt="mentor.imageAlt ?? mentor.name"
    :role="mentor.role"
    :subtitle="mentor.organization"
    size="lg"
    :profile-url="mentor.profileUrl"
    :linkedin-url="mentor.linkedin"
  />
</template>
