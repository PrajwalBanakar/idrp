<script setup lang="ts">
import { computed } from 'vue'
import GenericFormSection from '@/components/forms/GenericFormSection.vue'
import { createEventRegistrationFormConfig } from '@/data/forms/eventRegistrationForm'
import type { EventItem } from '@/types/events'

const props = defineProps<{
  event: EventItem
}>()

const formConfig = computed(() => createEventRegistrationFormConfig(props.event))
</script>

<template>
  <GenericFormSection :config="formConfig" />
</template>
