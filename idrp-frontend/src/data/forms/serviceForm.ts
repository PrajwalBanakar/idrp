import type { FormConfig } from '@/types/form'
import type { ServiceFormOption } from '@/types/service'

export function createServiceFormConfig(options: ServiceFormOption[] = []): FormConfig {
  return {
    id: 'service-form',
    type: 'service-inquiry',
    title: 'Start a Conversation',
    description: 'Share your requirement and our team will connect with you.',
    submitLabel: 'Submit Enquiry',
    resetOnSuccess: true,
    successMessage:
      'Enquiry received successfully. Our team will review your requirement and get in touch with you shortly.',
    endpoint: 'https://api.web3forms.com/submit',
    meta: {
      sourcePage: '/services',
      category: 'service-enquiry',
    },
    sections: [
      {
        id: 'service-main',
        fields: [
          {
            name: 'fullName',
            label: 'Your Name',
            type: 'text',
            placeholder: 'Full name',
            required: true,
            width: 'half',
          },
          {
            name: 'organization',
            label: 'Organization',
            type: 'text',
            placeholder: 'Company / Startup / Institution',
            required: true,
            width: 'half',
          },
          {
            name: 'phone',
            label: 'Phone Number',
            type: 'tel',
            placeholder: '+91 98765 43210',
            required: true,
            width: 'half',
            validation: [{ type: 'phone' }],
          },
          {
            name: 'email',
            label: 'Email ID',
            type: 'email',
            placeholder: 'you@example.com',
            required: true,
            width: 'half',
            validation: [{ type: 'email' }],
          },
          {
            name: 'area',
            label: 'Area of Interest',
            type: 'select',
            placeholder: 'Select an option',
            required: true,
            width: 'full',
            options: options.map((o) => ({
              label: o.label,
              value: o.value,
            })),
          },
          {
            name: 'details',
            label: 'Requirement / Challenge / Message',
            type: 'textarea',
            placeholder:
              'Describe your requirement, challenge, expected outcomes, or collaboration need...',
            required: true,
            width: 'full',
            validation: [{ type: 'minLength', value: 20 }],
          },
          {
            name: 'consent',
            label: 'Consent',
            type: 'checkbox',
            checkboxLabel:
              'I consent to IDRP collecting and using the information submitted in this form to respond to my enquiry.',
            required: true,
            width: 'full',
          },
        ],
      },
    ],
  }
}
