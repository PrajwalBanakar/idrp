<script setup lang="ts">
import AdminLayout from '@/components/admin/AdminLayout.vue'

const modules = [
  'Events',
  'Startups',
  'Programs',
  'Resources',
  'Partners',
  'Mentors',
  'Team Members',
  'Board Members',
]
</script>

<template>
  <AdminLayout>
    <div>
      <p class="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-primary)]">
        IDRP Admin
      </p>

      <h1 class="mt-2 text-3xl font-bold text-slate-950">
        Dashboard
      </h1>

      <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-600">
        Manage website content from one place. Start with Events, then continue with Startups, Resources, Programs, Partners, Mentors, Team, and Board.
      </p>
    </div>

    <section class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <article
        v-for="module in modules"
        :key="module"
        class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
      >
        <p class="text-lg font-bold text-slate-950">
          {{ module }}
        </p>
        <p class="mt-2 text-sm leading-6 text-slate-600">
          Manage {{ module.toLowerCase() }} content.
        </p>
      </article>
    </section>
  </AdminLayout>
</template>