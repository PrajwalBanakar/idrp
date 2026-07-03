<script setup lang="ts">
import { computed } from 'vue'
import GenericFormSection from '@/components/forms/GenericFormSection.vue'
import { contactFormConfig } from '@/data/forms/contactForm'

const formConfig = computed(() => contactFormConfig)
</script>

<template>
  <div class="h-full w-full">
    <GenericFormSection :config="formConfig" />
  </div>
</template>
