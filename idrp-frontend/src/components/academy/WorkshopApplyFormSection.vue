<script setup lang="ts">
import { computed } from 'vue'
import GenericFormSection from '@/components/forms/GenericFormSection.vue'
import { createWorkshopApplicationFormConfig } from '@/data/forms/workshopApplyForm'
import type { Workshop } from '@/types/academy'

const props = defineProps<{
  workshop: Workshop
}>()

const formConfig = computed(() => createWorkshopApplicationFormConfig(props.workshop))
</script>

<template>
  <GenericFormSection :config="formConfig" />
</template>
