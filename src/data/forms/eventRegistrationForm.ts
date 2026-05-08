import type { FormConfig } from '@/types/form'
import type { EventItem } from '@/types/events'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080'

export function createEventRegistrationFormConfig(event: EventItem): FormConfig {
  return {
    id: 'event-registration-form',
    type: 'event-registration',
    title: `Register for ${event.title}`,
    description: 'Fill in your details to register for this event.',
    submitLabel: 'Complete Registration',
    successMessage:
      'Registration received successfully. Our team will review your submission and share confirmation details with you by email.',
    resetOnSuccess: true,
    // endpoint: 'https://api.web3forms.com/submit',
    endpoint: `${API_BASE_URL}/api/event-registrations`,

transformPayload: (values, meta) => ({
  formId: 'event-registration-form',
  formType: 'event-registration',
  meta,
  data: {
    participantName: String(values.fullName || ''),
    email: String(values.email || ''),
    phone: String(values.phone || ''),
    organization: String(values.organization || ''),
    designation: String(values.designation || values.participantType || ''),
    numberOfAttendees: 1,
    eventId: event.id,
  },
}),

    meta: {
      sourcePage: 'event-registration',
      sourceSlug: String(event.id),
      eventId: event.id,
      eventTitle: event.title,
      category: 'event-registration',
    },

    sections: [
      {
        id: 'participant-details',
        title: 'Participant Details',
        fields: [
          {
            name: 'fullName',
            label: 'Full Name',
            type: 'text',
            placeholder: 'Enter your full name',
            required: true,
            autocomplete: 'name',
            width: 'half',
            defaultValue: '',
          },
          {
            name: 'email',
            label: 'Email Address',
            type: 'email',
            placeholder: 'Enter your email address',
            required: true,
            autocomplete: 'email',
            width: 'half',
            defaultValue: '',
          },
          {
            name: 'phone',
            label: 'Phone Number',
            type: 'tel',
            placeholder: 'Enter your phone number',
            required: true,
            autocomplete: 'tel',
            width: 'half',
            defaultValue: '',
          },
          {
            name: 'organization',
            label: 'Organization / Institution',
            type: 'text',
            placeholder: 'Enter your organization or institution',
            required: true,
            width: 'half',
            defaultValue: '',
          },
          {
            name: 'designation',
            label: 'Designation',
            type: 'text',
            placeholder: 'Enter your role or designation',
            width: 'half',
            defaultValue: '',
          },
          {
            name: 'participantType',
            label: 'You are registering as',
            type: 'select',
            placeholder: 'Select participant type',
            required: true,
            width: 'half',
            defaultValue: '',
            options: [
              { label: 'Student', value: 'student' },
              { label: 'Faculty', value: 'faculty' },
              { label: 'Founder / Entrepreneur', value: 'founder' },
              { label: 'Industry Professional', value: 'industry' },
              { label: 'Investor', value: 'investor' },
              { label: 'Researcher', value: 'researcher' },
              { label: 'Other', value: 'other' },
            ],
          },
        ],
      },
      {
        id: 'event-context',
        title: 'Event Context',
        fields: [
          {
            name: 'expectations',
            label: 'What do you hope to gain from this event?',
            type: 'textarea',
            placeholder: 'Tell us briefly what you are looking forward to',
            width: 'full',
            rows: 4,
            defaultValue: '',
          },
          {
            name: 'questions',
            label: 'Any questions or notes for the organizers?',
            type: 'textarea',
            placeholder: 'Share any questions, accessibility needs, or notes',
            width: 'full',
            rows: 4,
            defaultValue: '',
          },
          {
            name: 'consent',
            label: 'I agree to be contacted regarding this event',
            type: 'checkbox',
            checkboxLabel: 'I agree to be contacted regarding this event',
            required: true,
            width: 'full',
            defaultValue: false,
          },
          {
            name: 'eventId',
            label: 'Event ID',
            type: 'hidden',
            defaultValue: String(event.id),
          },
          {
            name: 'eventTitle',
            label: 'Event Title',
            type: 'hidden',
            defaultValue: event.title,
          },
        ],
      },
    ],
  }
}
