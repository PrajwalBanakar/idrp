<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { getAdminUser, logoutAdmin } from '@/services/authService'

const router = useRouter()
const route = useRoute()
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

// Mobile sidebar drawer - the desktop <aside> is `hidden` below the `lg`
// breakpoint, so this is the only way to reach admin nav on small screens.
const isDrawerOpen = ref(false)
const hamburgerRef = ref<HTMLButtonElement | null>(null)
const drawerCloseRef = ref<HTMLButtonElement | null>(null)

const openDrawer = async () => {
  isDrawerOpen.value = true
  await nextTick()
  drawerCloseRef.value?.focus()
}

const closeDrawer = () => {
  isDrawerOpen.value = false
}

// Used for Escape/backdrop/close-button so keyboard and screen-reader users
// land back on the control that opened the drawer, not the top of body.
const closeDrawerAndFocusTrigger = () => {
  if (!isDrawerOpen.value) return
  closeDrawer()
  hamburgerRef.value?.focus()
}

watch(() => route.fullPath, closeDrawer)

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

    <div
      v-if="isDrawerOpen"
      class="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
      aria-hidden="true"
      @click="closeDrawerAndFocusTrigger"
    />

    <aside
      v-if="isDrawerOpen"
      id="admin-mobile-drawer"
      class="fixed left-0 top-0 z-50 h-screen w-72 overflow-y-auto border-r border-slate-200 bg-white p-6 lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Admin navigation"
      @keydown.escape="closeDrawerAndFocusTrigger"
    >
      <div class="flex items-center justify-between gap-3">
        <RouterLink to="/admin/dashboard" class="flex items-center gap-3" @click="closeDrawer">
          <img src="/idrp.jfif" alt="IDRP" class="h-12 w-12 rounded-2xl object-cover" />
          <div>
            <p class="text-lg font-bold text-slate-950">IDRP</p>
            <p class="text-xs font-semibold uppercase tracking-widest text-slate-500">Admin Panel</p>
          </div>
        </RouterLink>

        <button
          ref="drawerCloseRef"
          type="button"
          class="rounded-xl border border-slate-200 p-2 text-slate-600 hover:bg-slate-100"
          aria-label="Close navigation menu"
          @click="closeDrawerAndFocusTrigger"
        >
          <span aria-hidden="true" class="block text-lg leading-none">&times;</span>
        </button>
      </div>

      <nav class="mt-8 space-y-2">
        <RouterLink
          v-for="item in navItems"
          :key="`mobile-${item.to}`"
          :to="item.to"
          class="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary)]"
          active-class="bg-[var(--color-primary-soft)] text-[var(--color-primary)]"
          @click="closeDrawer"
        >
          {{ item.label }}
        </RouterLink>
      </nav>
    </aside>

    <section class="lg:pl-72">
      <header class="sticky top-0 z-20 border-b border-slate-200 bg-white/90 px-6 py-4 backdrop-blur">
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <button
              ref="hamburgerRef"
              type="button"
              class="rounded-xl border border-slate-200 p-2.5 text-slate-700 hover:bg-slate-100 lg:hidden"
              :aria-expanded="isDrawerOpen"
              aria-controls="admin-mobile-drawer"
              aria-label="Open navigation menu"
              @click="openDrawer"
            >
              <span aria-hidden="true" class="block space-y-1">
                <span class="block h-0.5 w-5 bg-current"></span>
                <span class="block h-0.5 w-5 bg-current"></span>
                <span class="block h-0.5 w-5 bg-current"></span>
              </span>
            </button>

            <div>
              <p class="text-sm font-semibold text-slate-500">Logged in as</p>
              <p class="text-base font-bold text-slate-950">{{ adminUser?.name || 'Admin' }}</p>
            </div>
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