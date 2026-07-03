import { computed, reactive, ref } from 'vue'
import type {
  FormConfig,
  FormErrors,
  FormField,
  FormStatus,
  FormSubmitResult,
  FormValue,
  FormValues,
  ValidationRule,
} from '@/types/form'
import { submitForm } from '@/services/formService'

function getInitialValues(config: FormConfig): FormValues {
  const fields = config.sections.flatMap((section) => section.fields)

  return fields.reduce<FormValues>((acc, field) => {
    acc[field.name] =
      field.defaultValue ??
      (field.type === 'checkbox' ? false : field.type === 'checkbox-group' ? [] : '')

    return acc
  }, {})
}

function normalizeValue(value: FormValue | undefined): FormValue {
  return value ?? ''
}

function validateRule(
  field: FormField,
  value: FormValue | undefined,
  rule: ValidationRule,
): string | null {
  const label = field.label
  const normalizedValue = normalizeValue(value)

  switch (rule.type) {
    case 'required':
      if (
        normalizedValue === null ||
        normalizedValue === '' ||
        normalizedValue === false ||
        (Array.isArray(normalizedValue) && normalizedValue.length === 0)
      ) {
        return rule.message ?? `${label} is required.`
      }
      return null

    case 'email':
      if (!normalizedValue || Array.isArray(normalizedValue)) return null
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(normalizedValue))
        ? null
        : (rule.message ?? 'Enter a valid email address.')

    case 'phone':
      if (!normalizedValue || Array.isArray(normalizedValue)) return null
      return /^[0-9+\-\s()]{7,15}$/.test(String(normalizedValue))
        ? null
        : (rule.message ?? 'Enter a valid phone number.')

    case 'url':
      if (!normalizedValue || Array.isArray(normalizedValue)) return null
      try {
        new URL(String(normalizedValue))
        return null
      } catch {
        return rule.message ?? 'Enter a valid URL.'
      }

    case 'minLength':
      if (!normalizedValue || Array.isArray(normalizedValue)) return null
      return String(normalizedValue).length >= rule.value
        ? null
        : (rule.message ?? `${label} must be at least ${rule.value} characters.`)

    case 'maxLength':
      if (!normalizedValue || Array.isArray(normalizedValue)) return null
      return String(normalizedValue).length <= rule.value
        ? null
        : (rule.message ?? `${label} must be at most ${rule.value} characters.`)

    case 'min':
      if (normalizedValue === '' || normalizedValue === null || Array.isArray(normalizedValue)) {
        return null
      }
      return Number(normalizedValue) >= rule.value
        ? null
        : (rule.message ?? `${label} must be at least ${rule.value}.`)

    case 'max':
      if (normalizedValue === '' || normalizedValue === null || Array.isArray(normalizedValue)) {
        return null
      }
      return Number(normalizedValue) <= rule.value
        ? null
        : (rule.message ?? `${label} must be at most ${rule.value}.`)

    case 'pattern':
      if (!normalizedValue || Array.isArray(normalizedValue)) return null
      return rule.value.test(String(normalizedValue))
        ? null
        : (rule.message ?? `${label} format is invalid.`)

    default:
      return null
  }
}

function validateField(field: FormField, value: FormValue | undefined): string {
  const rules: ValidationRule[] = [
    ...(field.required ? [{ type: 'required' as const }] : []),
    ...(field.validation ?? []),
  ]

  for (const rule of rules) {
    const error = validateRule(field, value, rule)
    if (error) return error
  }

  return ''
}

export function useForm(config: FormConfig) {
  const values = reactive<FormValues>(getInitialValues(config))
  const errors = reactive<FormErrors>({})
  const touched = reactive<Record<string, boolean>>({})
  const status = ref<FormStatus>('idle')
  const submitMessage = ref('')

  const fields = computed(() => config.sections.flatMap((section) => section.fields))

  function setValue(name: string, value: FormValue) {
    values[name] = value

    if (touched[name]) {
      const field = fields.value.find((item) => item.name === name)
      if (field) {
        errors[name] = validateField(field, values[name])
      }
    }
  }

  function touchField(name: string) {
    touched[name] = true

    const field = fields.value.find((item) => item.name === name)
    if (field) {
      errors[name] = validateField(field, values[name])
    }
  }

  function validate(): boolean {
    let isValid = true

    for (const field of fields.value) {
      const error = validateField(field, values[field.name])
      errors[field.name] = error
      touched[field.name] = true

      if (error) {
        isValid = false
      }
    }

    return isValid
  }

  function clearFormState(options?: { preserveStatus?: boolean; preserveMessage?: boolean }) {
    const initialValues = getInitialValues(config)

    for (const key of Object.keys(initialValues)) {
      values[key] = initialValues[key] ?? ''
      errors[key] = ''
      touched[key] = false
    }

    if (!options?.preserveStatus) {
      status.value = 'idle'
    }

    if (!options?.preserveMessage) {
      submitMessage.value = ''
    }
  }

  function reset() {
    clearFormState()
  }

  async function handleSubmit(): Promise<FormSubmitResult> {
    const isValid = validate()

    if (!isValid) {
      status.value = 'error'
      submitMessage.value = 'Please correct the highlighted fields.'
      return {
        success: false,
        message: submitMessage.value,
      }
    }

    status.value = 'submitting'
    submitMessage.value = ''

    const result = await submitForm(config, values)

    status.value = result.success ? 'success' : 'error'
    submitMessage.value = result.message

    if (result.success && config.resetOnSuccess) {
      clearFormState({
        preserveStatus: true,
        preserveMessage: true,
      })
    }

    return result
  }

  return {
    values,
    errors,
    touched,
    status,
    submitMessage,
    fields,
    setValue,
    touchField,
    validate,
    reset,
    handleSubmit,
  }
}
