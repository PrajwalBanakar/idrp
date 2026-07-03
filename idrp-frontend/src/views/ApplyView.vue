<template>
  <div>
    <ApplicationHeroSection :program="currentProgram" @back="goBack" />

    <section class="px-6 py-16 md:px-16">
      <div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
        <ApplicationFormSection :program="currentProgram" :support-options="supportOptions" />

        <ApplicationSidebarSection
          :program="currentProgram"
          :evaluation-points="evaluationPoints"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { programs, supportOptions, evaluationPoints } from '@/data/application'
import type { ProgramKey } from '@/types/application'

import ApplicationHeroSection from '@/components/application/ApplicationHeroSection.vue'
import ApplicationFormSection from '@/components/application/ApplicationFormSection.vue'
import ApplicationSidebarSection from '@/components/application/ApplicationSidebarSection.vue'

const route = useRoute()
const router = useRouter()

function isProgramKey(value: string): value is ProgramKey {
  return value in programs
}

const programKey = computed<ProgramKey>(() => {
  const param = route.params.program

  if (typeof param === 'string' && isProgramKey(param)) {
    return param
  }

  return 'pre-incubation'
})

const currentProgram = computed(() => programs[programKey.value])

function goBack() {
  if (window.history.length > 1) {
    router.back()
    return
  }

  router.push('/')
}
</script>
