<script setup lang="ts">
import TeamMemberCard from '@/components/team/TeamMemberCard.vue'
import type { TeamMember } from '@/types/team'

type Props = {
  eyebrow?: string
  title?: string
  description?: string
  members: TeamMember[]
}

withDefaults(defineProps<Props>(), {
  eyebrow: 'Core Team',
  title: 'The Team Behind IDRP',
  description:
    'A dedicated group working across operations, ecosystem building, founder support, and program execution to help innovation move forward.',
})
</script>

<template>
  <section class="bg-slate-50 px-6 py-16 md:px-12 lg:px-16 lg:py-20">
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-wrap justify-center gap-6">
        <div
          v-for="member in members"
          :key="member.name"
          class="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
        >
          <TeamMemberCard :member="member" />
        </div>
      </div>
    </div>
  </section>
</template>
