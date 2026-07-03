<template>
  <aside class="flex h-full w-full flex-col gap-8">
    <div class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div class="h-64" :class="{ 'bg-gradient-to-br from-teal-100 to-cyan-50': !showCampusImage }">
        <img
          v-if="showCampusImage"
          src="/public/campus/idrp_building.jpg"
          alt="IDRP Campus"
          class="h-full w-full object-cover"
          @error="showCampusImage = false"
        />
      </div>
    </div>

    <div class="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div>
        <span
          class="inline-flex items-center rounded-full bg-[var(--color-primary-soft)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]"
        >
          Find Us
        </span>

        <div class="mt-5 flex items-start gap-4">
          <div
            class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary-soft)] text-xl"
          >
            📍
          </div>

          <div>
            <p class="text-sm font-semibold text-slate-900">IIIT Dharwad Research Park</p>

            <p class="mt-2 text-sm leading-7 text-slate-600">
              Pi Block, IIIT Dharwad<br />
              92VG+2F9, IIIT Circle Rd<br />
              Dharwad, Karnataka 580009
            </p>

            <a
              href="https://www.google.com/maps/place/IIIT+Dharwad+Research+Park+(IDRP)/@15.3925499,75.0236567,17z"
              target="_blank"
              rel="noopener"
              class="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-primary)] transition-colors hover:text-teal-800"
            >
              View on Google Maps
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>

      <div class="mt-8 border-t border-slate-200 pt-8">
        <span
          class="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-700"
        >
          Contact Details
        </span>

        <div class="mt-5 space-y-4">
          <div
            v-for="item in contactItems"
            :key="item.label"
            class="flex items-start gap-4 rounded-2xl bg-slate-50 px-4 py-4"
          >
            <div
              class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary-soft)] text-xl"
            >
              {{ item.emoji }}
            </div>

            <div>
              <p class="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                {{ item.label }}
              </p>

              <a
                :href="item.href"
                class="mt-1 inline-block text-sm font-semibold text-slate-800 transition-colors hover:text-[var(--color-primary)]"
              >
                {{ item.value }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <ContactSocialLinks :socials="socials" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ContactSocialLinks from '@/components/contact/ContactSocialLinks.vue'

type ContactItem = {
  label: string
  value: string
  href: string
  emoji: string
}

type SocialLink = {
  name: string
  url: string
  icon: string
}

defineProps<{
  contactItems: ContactItem[]
  socials: SocialLink[]
}>()

const showCampusImage = ref(true)
</script>
