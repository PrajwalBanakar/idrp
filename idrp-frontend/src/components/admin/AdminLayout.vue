<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import { getAdminUser, logoutAdmin } from '@/services/authService'

const router = useRouter()
const adminUser = getAdminUser()

const navItems = [
  { label: 'Dashboard', to: '/admin/dashboard' },
  { label: 'Events', to: '/admin/events' },
  { label: 'Startups', to: '/admin/startups' },
  { label: 'Programs', to: '/admin/programs' },
  { label: 'Resources', to: '/admin/resources' },
  { label: 'Partners', to: '/admin/partners' },
  { label: 'Mentors', to: '/admin/mentors' },
  { label: 'Team Members', to: '/admin/team-members' },
  { label: 'Board Members', to: '/admin/board-members' },
]

const handleLogout = async () => {
  await logoutAdmin()
  router.push('/admin/login')
}
</script>

<template>
  <main class="min-h-screen bg-slate-50">
    <aside class="fixed left-0 top-0 hidden h-screen w-72 border-r border-slate-200 bg-white p-6 lg:block">
      <RouterLink to="/admin/dashboard" class="flex items-center gap-3">
        <img src="/idrp.jfif" alt="IDRP" class="h-12 w-12 rounded-2xl object-cover" />
        <div>
          <p class="text-lg font-bold text-slate-950">IDRP</p>
          <p class="text-xs font-semibold uppercase tracking-widest text-slate-500">Admin Panel</p>
        </div>
      </RouterLink>

      <nav class="mt-8 space-y-2">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary)]"
          active-class="bg-[var(--color-primary-soft)] text-[var(--color-primary)]"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </aside>

    <section class="lg:pl-72">
      <header class="sticky top-0 z-20 border-b border-slate-200 bg-white/90 px-6 py-4 backdrop-blur">
        <div class="flex items-center justify-between gap-4">
          <div>
            <p class="text-sm font-semibold text-slate-500">Logged in as</p>
            <p class="text-base font-bold text-slate-950">{{ adminUser?.name || 'Admin' }}</p>
          </div>

          <button
            type="button"
            class="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            @click="handleLogout"
          >
            Logout
          </button>
        </div>
      </header>

      <div class="p-6 lg:p-8">
        <slot />
      </div>
    </section>
  </main>
</template>