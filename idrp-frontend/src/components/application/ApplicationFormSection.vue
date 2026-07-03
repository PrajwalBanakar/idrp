<script setup lang="ts">
import { computed } from 'vue'
import GenericFormSection from '@/components/forms/GenericFormSection.vue'
import { createApplicationFormConfig } from '@/data/forms/applicationForm'
import type { ProgramMeta } from '@/types/application'

const props = defineProps<{
  program: ProgramMeta
  supportOptions: string[]
}>()

const formConfig = computed(() => createApplicationFormConfig(props.program, props.supportOptions))
</script>

<template>
  <GenericFormSection :config="formConfig" />
</template>
