<template>
  <form class="space-y-8" @submit.prevent="onSubmit" novalidate>
    <header v-if="config.title || config.description" class="space-y-2">
      <h2 v-if="config.title" class="text-2xl font-bold text-slate-900">
        {{ config.title }}
      </h2>
      <p v-if="config.description" class="text-sm leading-6 text-slate-600">
        {{ config.description }}
      </p>
    </header>

    <div v-for="section in config.sections" :key="section.id" class="space-y-5">
      <div v-if="section.title || section.description" class="space-y-1">
        <h3 v-if="section.title" class="text-lg font-semibold text-slate-900">
          {{ section.title }}
        </h3>
        <p v-if="section.description" class="text-sm leading-6 text-slate-600">
          {{ section.description }}
        </p>
      </div>

      <div class="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div
          v-for="field in section.fields"
          :key="field.name"
          :class="field.width === 'half' ? 'md:col-span-1' : 'md:col-span-2'"
        >
          <input
            v-if="field.type === 'hidden'"
            :name="field.name"
            :value="stringValue(values[field.name])"
            type="hidden"
          />

          <template v-else>
            <label
              v-if="field.type !== 'checkbox'"
              :for="field.name"
              class="mb-2 block text-sm font-semibold text-slate-800"
            >
              {{ field.label }}
              <span v-if="field.required" class="text-rose-500">*</span>
            </label>

            <p v-if="field.helpText" class="mb-2 text-xs leading-5 text-slate-500">
              {{ field.helpText }}
            </p>

            <input
              v-if="isInputField(field.type)"
              :id="field.name"
              :name="field.name"
              :type="field.type"
              :placeholder="field.placeholder"
              :disabled="field.disabled || status === 'submitting'"
              :readonly="field.readonly"
              :autocomplete="field.autocomplete"
              :value="stringValue(values[field.name])"
              class="w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:ring-4"
              :class="getFieldClass(field.name)"
              @input="onInput(field.name, $event)"
              @blur="touchField(field.name)"
            />

            <textarea
              v-else-if="field.type === 'textarea'"
              :id="field.name"
              :name="field.name"
              :placeholder="field.placeholder"
              :disabled="field.disabled || status === 'submitting'"
              :readonly="field.readonly"
              :value="stringValue(values[field.name])"
              :rows="field.rows ?? 5"
              class="w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:ring-4"
              :class="getFieldClass(field.name)"
              @input="onInput(field.name, $event)"
              @blur="touchField(field.name)"
            />

            <select
              v-else-if="field.type === 'select'"
              :id="field.name"
              :name="field.name"
              :disabled="field.disabled || status === 'submitting'"
              class="w-full rounded-2xl border bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:ring-4"
              :class="getFieldClass(field.name)"
              :value="stringValue(values[field.name])"
              @change="onSelect(field.name, $event)"
              @blur="touchField(field.name)"
            >
              <option value="">
                {{ field.placeholder || `Select ${field.label}` }}
              </option>
              <option
                v-for="option in field.options"
                :key="String(option.value)"
                :value="String(option.value)"
                :disabled="option.disabled"
              >
                {{ option.label }}
              </option>
            </select>

            <div
              v-else-if="field.type === 'radio'"
              class="space-y-3 rounded-2xl border border-slate-200 bg-white p-4"
              :class="errors[field.name] ? 'border-rose-300' : ''"
            >
              <label
                v-for="option in field.options"
                :key="String(option.value)"
                class="flex cursor-pointer items-start gap-3"
              >
                <input
                  :name="field.name"
                  type="radio"
                  class="mt-1 h-4 w-4"
                  :value="String(option.value)"
                  :checked="values[field.name] === option.value"
                  :disabled="field.disabled || option.disabled || status === 'submitting'"
                  @change="setValue(field.name, option.value)"
                  @blur="touchField(field.name)"
                />
                <span class="text-sm text-slate-700">
                  {{ option.label }}
                </span>
              </label>
            </div>

            <div
              v-else-if="field.type === 'checkbox-group'"
              class="grid grid-cols-1 gap-3 md:grid-cols-2"
            >
              <label
                v-for="option in field.options"
                :key="String(option.value)"
                class="flex items-center gap-3 rounded-xl border px-4 py-3 text-sm text-slate-700"
                :class="errors[field.name] ? 'border-rose-300' : 'border-slate-200'"
              >
                <input
                  type="checkbox"
                  class="h-4 w-4 rounded border-gray-300 text-[var(--color-primary)] focus:ring-teal-500"
                  :value="String(option.value)"
                  :checked="isChecked(field.name, option.value)"
                  :disabled="field.disabled || option.disabled || status === 'submitting'"
                  @change="onCheckboxGroup(field.name, option.value, $event)"
                  @blur="touchField(field.name)"
                />
                <span>{{ option.label }}</span>
              </label>
            </div>

            <label
              v-else-if="field.type === 'checkbox'"
              class="flex items-start gap-3 rounded-2xl border bg-white p-4"
              :class="errors[field.name] ? 'border-rose-300' : 'border-slate-200'"
            >
              <input
                :id="field.name"
                :name="field.name"
                type="checkbox"
                class="mt-1 h-4 w-4"
                :checked="Boolean(values[field.name])"
                :disabled="field.disabled || status === 'submitting'"
                @change="onCheckbox(field.name, $event)"
                @blur="touchField(field.name)"
              />
              <span class="text-sm leading-6 text-slate-700">
                {{ field.checkboxLabel || field.label }}
                <span v-if="field.required" class="text-rose-500">*</span>
              </span>
            </label>

            <p v-if="errors[field.name]" class="mt-2 text-xs font-medium text-rose-600">
              {{ errors[field.name] }}
            </p>
          </template>
        </div>
      </div>
    </div>

    <div
      v-if="submitMessage"
      class="rounded-2xl border px-5 py-4 text-sm"
      :class="
        status === 'success'
          ? 'border-emerald-200 bg-emerald-50 text-emerald-800'
          : status === 'error'
            ? 'border-rose-200 bg-rose-50 text-rose-700'
            : 'border-slate-200 bg-slate-50 text-slate-600'
      "
    >
      <div v-if="status === 'success'" class="space-y-1">
        <p class="font-semibold">Submission received</p>
        <p class="leading-6">{{ submitMessage }}</p>
      </div>

      <div v-else-if="status === 'error'" class="space-y-1">
        <p class="font-semibold">Unable to submit form</p>
        <p class="leading-6">{{ submitMessage }}</p>
      </div>

      <p v-else class="leading-6">
        {{ submitMessage }}
      </p>
    </div>

    <div class="flex flex-wrap items-center gap-3">
      <button
        type="submit"
        :disabled="status === 'submitting'"
        class="inline-flex items-center justify-center rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-primary)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {{ status === 'submitting' ? 'Submitting...' : config.submitLabel || 'Submit' }}
      </button>

      <button
        v-if="status !== 'success'"
        type="button"
        :disabled="status === 'submitting'"
        class="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
        @click="reset"
      >
        Reset
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import type { FormConfig, FormFieldType, FormOption, FormValue } from '@/types/form'
import { useForm } from '@/composables/useForm'

const props = defineProps<{
  config: FormConfig
}>()

const emit = defineEmits<{
  (e: 'success', payload: { message: string }): void
  (e: 'error', payload: { message: string }): void
}>()

const { values, errors, status, submitMessage, setValue, touchField, reset, handleSubmit } =
  useForm(props.config)

const inputTypes: FormFieldType[] = ['text', 'email', 'tel', 'number', 'url', 'date']

function isInputField(type: FormFieldType): boolean {
  return inputTypes.includes(type)
}

function stringValue(value: FormValue | undefined): string {
  if (value === null || value === undefined) return ''
  return Array.isArray(value) ? '' : String(value)
}

function isChecked(name: string, value: FormOption['value']): boolean {
  const current = values[name]
  return Array.isArray(current) && current.includes(String(value))
}

function onCheckboxGroup(name: string, value: FormOption['value'], event: Event) {
  const target = event.target as HTMLInputElement
  const checked = target.checked
  const current = values[name]

  let updated: string[] = Array.isArray(current)
    ? current.filter((item): item is string => typeof item === 'string')
    : []

  const normalizedValue = String(value)

  if (checked) {
    if (!updated.includes(normalizedValue)) {
      updated.push(normalizedValue)
    }
  } else {
    updated = updated.filter((item) => item !== normalizedValue)
  }

  setValue(name, updated)
}

function onInput(name: string, event: Event) {
  const target = event.target as HTMLInputElement | HTMLTextAreaElement
  setValue(name, target.value)
}

function onSelect(name: string, event: Event) {
  const target = event.target as HTMLSelectElement
  setValue(name, target.value)
}

function onCheckbox(name: string, event: Event) {
  const target = event.target as HTMLInputElement
  setValue(name, target.checked)
}

function getFieldClass(name: string): string {
  return errors[name]
    ? 'border-rose-300 focus:border-rose-400 focus:ring-rose-100'
    : 'border-slate-200 focus:border-teal-400 focus:ring-[var(--color-primary-soft)]'
}

async function onSubmit() {
  const result = await handleSubmit()

  if (result.success) {
    emit('success', { message: result.message })
    return
  }

  emit('error', { message: result.message })
}
</script>
