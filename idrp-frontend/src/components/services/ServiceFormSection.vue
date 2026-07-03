<script setup lang="ts">
import { computed } from 'vue'
import GenericFormSection from '@/components/forms/GenericFormSection.vue'
import { createServiceFormConfig } from '@/data/forms/serviceForm'
import type { ServiceFormOption } from '@/types/service'

const props = defineProps<{
  options?: ServiceFormOption[]
}>()

const formConfig = computed(() => createServiceFormConfig(props.options ?? []))
</script>

<template>
  <GenericFormSection :config="formConfig" />
</template>
