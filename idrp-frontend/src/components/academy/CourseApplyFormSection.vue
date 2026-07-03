<script setup lang="ts">
import { computed } from 'vue'
import GenericFormSection from '@/components/forms/GenericFormSection.vue'
import { createCourseApplicationFormConfig } from '@/data/forms/courseApplyForm'
import type { CertificationCourse } from '@/types/academy'

const props = defineProps<{
  course: CertificationCourse
}>()

const formConfig = computed(() => createCourseApplicationFormConfig(props.course))
</script>

<template>
  <GenericFormSection :config="formConfig" />
</template>
