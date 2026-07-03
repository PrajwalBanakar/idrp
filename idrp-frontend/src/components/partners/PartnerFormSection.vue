<script setup lang="ts">
import { computed } from 'vue'
import GenericFormSection from '@/components/forms/GenericFormSection.vue'
import { partnerFormConfig } from '@/data/forms/partnerForm'

const formConfig = computed(() => partnerFormConfig)
</script>

<template>
  <section class="bg-white px-6 py-16 md:px-12 lg:px-16 lg:py-20">
    <div class="mx-auto max-w-6xl">
      <div class="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div class="max-w-xl">
          <span
            class="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]"
          >
            Collaborate With IDRP
          </span>

          <h2 class="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Interested in partnering with us?
          </h2>

          <p class="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            We work with academic institutions, technology organizations, ecosystem enablers, and
            strategic partners who share our commitment to innovation, entrepreneurship, and impact.
          </p>

          <p class="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            Share a few details about your organization and area of interest, and our team will
            connect with you.
          </p>
        </div>

        <div>
          <GenericFormSection
            :config="formConfig"
            card-class="rounded-3xl bg-white p-0 shadow-none"
          />
        </div>
      </div>
    </div>
  </section>
</template>
