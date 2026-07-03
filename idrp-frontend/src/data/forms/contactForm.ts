import type { FormConfig } from '@/types/form'

export const contactFormConfig: FormConfig = {
  id: 'contact-form',
  type: 'contact',
  title: 'Contact Us',
  description: 'Reach out to the IDRP team for partnerships, programs, and general queries.',
  submitLabel: 'Send Message',
  resetOnSuccess: true,
  successMessage:
    'Message received successfully. Our team will review your enquiry and get back to you soon.',
  endpoint: 'https://api.web3forms.com/submit',
  meta: {
    sourcePage: '/contact',
    category: 'contact-enquiry',
  },
  sections: [
    {
      id: 'contact-main',
      fields: [
        {
          name: 'botcheck',
          label: 'Botcheck',
          type: 'hidden',
          defaultValue: '',
        },
        {
          name: 'fullName',
          label: 'Full Name',
          type: 'text',
          placeholder: 'Enter your full name',
          required: true,
          width: 'half',
        },
        {
          name: 'phone',
          label: 'Phone Number',
          type: 'tel',
          placeholder: 'Enter your phone number',
          required: true,
          width: 'half',
          validation: [{ type: 'phone' }],
        },
        {
          name: 'email',
          label: 'Email Address',
          type: 'email',
          placeholder: 'Enter your email address',
          required: true,
          width: 'full',
          validation: [{ type: 'email' }],
        },
        {
          name: 'organization',
          label: 'Organization',
          type: 'text',
          placeholder: 'Enter your organization name',
          width: 'full',
        },
        {
          name: 'message',
          label: 'Message',
          type: 'textarea',
          placeholder: 'Tell us how we can help',
          required: true,
          width: 'full',
          validation: [{ type: 'minLength', value: 10 }],
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
