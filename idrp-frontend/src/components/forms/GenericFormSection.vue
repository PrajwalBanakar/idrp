<script setup lang="ts">
import BaseForm from '@/components/forms/BaseForm.vue'
import type { FormConfig } from '@/types/form'

defineProps<{
  config: FormConfig
  successText?: string
  cardClass?: string
}>()
</script>

<template>
  <div :class="cardClass || 'h-full rounded-3xl bg-white p-8 shadow-xl'">
    <BaseForm :config="config" />
  </div>
</template>
