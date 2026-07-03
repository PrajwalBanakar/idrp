<script setup lang="ts">
import { computed } from 'vue'
import GenericFormSection from '@/components/forms/GenericFormSection.vue'
import { createServiceFormConfig } from '@/data/forms/serviceForm'
import type { ServiceFormOption } from '@/types/service'

const academyProgramOptions: ServiceFormOption[] = [
  {
    label: 'Certification Courses',
    value: 'certification-courses',
  },
  {
    label: 'Innovation Entrepreneurship & Technology (IET)',
    value: 'iet',
  },
  {
    label: 'VLSI Design',
    value: 'vlsi-design',
  },
  {
    label: 'Agentic AI',
    value: 'agentic-ai',
  },
  {
    label: 'Workshops',
    value: 'workshops',
  },
  {
    label: 'Faculty Development Program (FDP)',
    value: 'fdp',
  },
  {
    label: 'Student Development Workshop (SDW)',
    value: 'student-development-workshop',
  },
  {
    label: 'Glimpses of AI Tools – Introductory',
    value: 'glimpses-of-ai-tools',
  },
  {
    label: 'Custom Institutional Training',
    value: 'custom-institutional-training',
  },
]

const formConfig = computed(() => createServiceFormConfig(academyProgramOptions))
</script>

<template>
  <GenericFormSection
    :config="formConfig"
    success-text="Your training enquiry has been submitted successfully."
  />
</template>
