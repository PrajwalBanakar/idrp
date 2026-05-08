<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginAdmin } from '@/services/authService'

const router = useRouter()

const email = ref('')
const password = ref('')
const loading = ref(false)
const errorMessage = ref('')

const handleLogin = async () => {
  errorMessage.value = ''

  if (!email.value || !password.value) {
    errorMessage.value = 'Please enter email and password.'
    return
  }

  try {
    loading.value = true

    await loginAdmin({
      email: email.value,
      password: password.value,
    })

    router.push('/admin/dashboard')
  } catch (error) {
    errorMessage.value = error instanceof Error ? error.message : 'Invalid login credentials.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main class="min-h-screen bg-slate-50 px-6 py-12">
    <div class="mx-auto flex min-h-[80vh] max-w-6xl items-center justify-center">
      <div class="grid w-full overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-200 lg:grid-cols-2">
        <section class="hidden bg-[var(--color-primary)] p-10 text-white lg:block">
          <div class="flex h-full flex-col justify-between">
            <div>
              <img src="/idrp.jfif" alt="IDRP" class="h-16 w-16 rounded-2xl bg-white object-cover p-1" />

              <div class="mt-10">
                <p class="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                  Admin Portal
                </p>

                <h1 class="mt-4 text-4xl font-bold leading-tight">
                  Manage IDRP website content securely.
                </h1>

                <p class="mt-5 max-w-md text-base leading-7 text-white/80">
                  Login access is only for IDRP admins. Public visitors can continue using the website without login.
                </p>
              </div>
            </div>

            <p class="text-sm text-white/60">
              IIIT Dharwad Research Park
            </p>
          </div>
        </section>

        <section class="p-8 sm:p-10 lg:p-12">
          <div class="mx-auto max-w-md">
            <div class="lg:hidden">
              <img src="/idrp.jfif" alt="IDRP" class="h-14 w-14 rounded-2xl object-cover" />
            </div>

            <p class="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-primary)]">
              Admin Login
            </p>

            <h2 class="mt-3 text-3xl font-bold text-slate-950">
              Welcome back
            </h2>

            <p class="mt-3 text-sm leading-6 text-slate-600">
              Sign in to update events, startups, programs, resources, partners, mentors, team members, and board members.
            </p>

            <form class="mt-8 space-y-5" @submit.prevent="handleLogin">
              <div>
                <label for="email" class="text-sm font-semibold text-slate-700">
                  Email address
                </label>

                <input
                  id="email"
                  v-model="email"
                  type="email"
                  autocomplete="email"
                  placeholder="admin@idrp.in"
                  class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
                />
              </div>

              <div>
                <label for="password" class="text-sm font-semibold text-slate-700">
                  Password
                </label>

                <input
                  id="password"
                  v-model="password"
                  type="password"
                  autocomplete="current-password"
                  placeholder="Enter password"
                  class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
                />
              </div>

              <p
                v-if="errorMessage"
                class="rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
              >
                {{ errorMessage }}
              </p>

              <button
                type="submit"
                :disabled="loading"
                class="w-full rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-primary-dark)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {{ loading ? 'Signing in...' : 'Login' }}
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>