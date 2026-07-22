<script setup lang="ts">
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'light-on-dark' | 'danger'
type Size = 'sm' | 'md' | 'lg' | 'icon'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
    to?: RouteLocationRaw
    href?: string
    target?: string
    rel?: string
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
    block?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    to: undefined,
    href: undefined,
    target: undefined,
    rel: undefined,
    type: 'button',
    disabled: false,
    loading: false,
    block: false,
  },
)

const tag = computed(() => {
  if (props.to) return 'router-link'
  if (props.href) return 'a'
  return 'button'
})

const isDisabled = computed(() => props.disabled || props.loading)

const variantClass: Record<Variant, string> = {
  primary:
    'bg-[var(--color-primary)] text-white shadow-md hover:bg-[var(--color-primary-dark)] hover:shadow-lg',
  secondary:
    'bg-[var(--color-primary-soft)] text-[var(--color-primary)] hover:bg-[#dce9f5]',
  outline:
    'border border-[var(--color-primary)]/25 bg-white text-[var(--color-primary)] hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-primary-soft)]',
  ghost: 'bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary-soft)]',
  'light-on-dark':
    'border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:border-white/30 hover:bg-[rgba(255,255,255,0.14)]',
  danger: 'bg-[var(--color-error)] text-white shadow-md hover:bg-red-700',
}

const sizeClass: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-6 py-3 text-sm gap-2',
  lg: 'px-8 py-3.5 text-base gap-2.5',
  icon: 'h-11 w-11 p-0 justify-center',
}

const classes = computed(() => [
  'inline-flex items-center rounded-full font-semibold transition-all duration-300',
  'hover:-translate-y-0.5 focus-visible:-translate-y-0.5',
  'disabled:pointer-events-none disabled:opacity-60 disabled:hover:translate-y-0',
  variantClass[props.variant],
  sizeClass[props.size],
  props.size === 'icon' ? '' : 'justify-center',
  props.block ? 'w-full' : '',
])
</script>

<template>
  <component
    :is="tag"
    :to="to"
    :href="href"
    :target="target"
    :rel="target === '_blank' ? (rel ?? 'noopener noreferrer') : rel"
    :type="tag === 'button' ? type : undefined"
    :disabled="tag === 'button' ? isDisabled : undefined"
    :aria-disabled="tag !== 'button' && isDisabled ? 'true' : undefined"
    :tabindex="tag !== 'button' && isDisabled ? -1 : undefined"
    :class="classes"
  >
    <svg
      v-if="loading"
      class="h-4 w-4 shrink-0 animate-spin"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
      <path
        class="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4Z"
      />
    </svg>
    <slot name="icon" />
    <span v-if="$slots.default" :class="{ 'sr-only': size === 'icon' }"><slot /></span>
    <slot name="icon-trailing" />
  </component>
</template>
