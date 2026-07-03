export type FormType =
  | 'contact'
  | 'partner'
  | 'program-application'
  | 'course-application'
  | 'event-registration'
  | 'service-inquiry'
  | 'startup-matchmaking'
  | 'investor-matchmaking'
  | 'custom'
  | 'workshop-application'

export type FormFieldType =
  | 'text'
  | 'email'
  | 'tel'
  | 'number'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'checkbox-group'
  | 'url'
  | 'date'
  | 'hidden'

export type FormWidth = 'full' | 'half'

export type FormOption = {
  label: string
  value: string | number | boolean
  disabled?: boolean
}

export type FormValue = string | number | boolean | string[] | null

export type ValidationRule =
  | { type: 'required'; message?: string }
  | { type: 'email'; message?: string }
  | { type: 'phone'; message?: string }
  | { type: 'url'; message?: string }
  | { type: 'minLength'; value: number; message?: string }
  | { type: 'maxLength'; value: number; message?: string }
  | { type: 'min'; value: number; message?: string }
  | { type: 'max'; value: number; message?: string }
  | { type: 'pattern'; value: RegExp; message?: string }

export type FormFieldBase = {
  name: string
  label: string
  type: FormFieldType
  placeholder?: string
  helpText?: string
  required?: boolean
  disabled?: boolean
  readonly?: boolean
  width?: FormWidth
  defaultValue?: FormValue
  backendKey?: string
  validation?: ValidationRule[]
  autocomplete?: string
}

export type TextLikeField = FormFieldBase & {
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'url' | 'date' | 'hidden'
  rows?: number
}

export type SelectField = FormFieldBase & {
  type: 'select'
  options: FormOption[]
}

export type RadioField = FormFieldBase & {
  type: 'radio'
  options: FormOption[]
}

export type CheckboxField = FormFieldBase & {
  type: 'checkbox'
  checkboxLabel?: string
}

export type CheckboxGroupField = FormFieldBase & {
  type: 'checkbox-group'
  options: FormOption[]
}

export type FormField =
  | TextLikeField
  | SelectField
  | RadioField
  | CheckboxField
  | CheckboxGroupField

export type FormSection = {
  id: string
  title?: string
  description?: string
  fields: FormField[]
}

export type FormValues = Record<string, FormValue>
export type FormErrors = Record<string, string>

export type FormMeta = {
  formType: FormType
  sourcePage?: string
  sourceSlug?: string
  eventId?: string | number
  eventTitle?: string
  courseSlug?: string
  courseTitle?: string
  workshopSlug?: string
  workshopTitle?: string
  programSlug?: string
  programTitle?: string
  serviceSlug?: string
  category?: string
  submittedAt?: string
  [key: string]: string | number | boolean | undefined
}

export type FormSubmitEnvelope = {
  formId: string
  formType: FormType
  meta: FormMeta
  data: Record<string, FormValue>
}

export type FormSubmitResult = {
  success: boolean
  message: string
  submissionId?: string
}

export type FormConfig = {
  id: string
  type: FormType
  title?: string
  description?: string
  submitLabel?: string
  resetOnSuccess?: boolean
  successMessage?: string
  endpoint?: string
  sections: FormSection[]
  meta?: Omit<FormMeta, 'formType' | 'submittedAt'>
  transformPayload?: (values: FormValues, meta: FormMeta) => FormSubmitEnvelope
}

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'
