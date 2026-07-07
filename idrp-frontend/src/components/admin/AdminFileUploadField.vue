<script setup lang="ts">
import { ref } from 'vue'
import { uploadAdminFile } from '@/services/fileUploadService'

const props = withDefaults(
  defineProps<{
    modelValue: string | undefined
    folder?: string
    accept?: string
    label?: string
    placeholder?: string
    preview?: 'image' | 'none'
  }>(),
  {
    folder: 'general',
    accept: 'image/*',
    label: 'Upload file',
    placeholder: 'File path or URL',
    preview: 'image',
  },
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const uploading = ref(false)
const uploadError = ref('')

const handleUpload = async (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]

  if (!file) return

  try {
    uploading.value = true
    uploadError.value = ''

    const uploaded = await uploadAdminFile(file, props.folder)
    emit('update:modelValue', uploaded.fileUrl)
  } catch (error) {
    uploadError.value = error instanceof Error ? error.message : 'File upload failed'
  } finally {
    uploading.value = false
    input.value = ''
  }
}
</script>

<template>
  <div>
    <label class="mb-1.5 block text-sm font-semibold text-slate-700">
      {{ label }}
    </label>

    <input
      type="file"
      :accept="accept"
      class="w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-700"
      @change="handleUpload"
    />

    <p v-if="uploading" class="mt-2 text-sm text-slate-500">Uploading...</p>
    <p v-if="uploadError" class="mt-2 text-sm text-red-600">{{ uploadError }}</p>

    <img
      v-if="preview === 'image' && modelValue"
      :src="modelValue"
      :alt="`${label} preview`"
      class="mt-3 h-20 w-20 rounded-2xl border border-slate-200 object-cover"
    />

    <input
      :value="modelValue"
      type="text"
      :placeholder="placeholder"
      class="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)] focus:ring-4 focus:ring-[var(--color-primary-soft)]"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
