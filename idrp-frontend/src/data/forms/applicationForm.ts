import type { ProgramMeta } from '@/types/application'
import type { FormConfig } from '@/types/form'

export function createApplicationFormConfig(
  program: ProgramMeta,
  supportOptions: string[],
): FormConfig {
  return {
    id: `${program.slug}-application-form`,
    type: 'program-application',
    title: 'Application Form',
    description: `Please complete the application below. This helps the IDRP team understand your startup, stage of progress, and the kind of support you are looking for through the ${program.title}.`,
    submitLabel: 'Submit Application',
    resetOnSuccess: true,
    successMessage:
      'Application received successfully. Our team will review your submission and contact you regarding the next steps.',
    endpoint: 'https://api.web3forms.com/submit',
    meta: {
      sourcePage: `/apply/${program.slug}`,
      programSlug: program.slug,
      programTitle: program.title,
      sourceSlug: program.slug,
      category: 'program-application',
    },
    sections: [
      {
        id: 'founder-details',
        title: 'Founder Details',
        fields: [
          {
            name: 'founderName',
            label: 'Founder Name',
            type: 'text',
            placeholder: 'Enter founder name',
            required: true,
            width: 'half',
          },
          {
            name: 'coFounderName',
            label: 'Co-Founder Name',
            type: 'text',
            placeholder: 'Enter co-founder name',
            width: 'half',
          },
          {
            name: 'email',
            label: 'Email Address',
            type: 'email',
            placeholder: 'Enter email',
            required: true,
            width: 'half',
            validation: [{ type: 'email' }],
          },
          {
            name: 'phone',
            label: 'Phone Number',
            type: 'tel',
            placeholder: 'Enter phone number',
            required: true,
            width: 'half',
            validation: [{ type: 'phone' }],
          },
          {
            name: 'website',
            label: 'LinkedIn / Website',
            type: 'url',
            placeholder: 'LinkedIn or website URL',
            width: 'half',
            validation: [{ type: 'url' }],
          },
          {
            name: 'location',
            label: 'City / Location',
            type: 'text',
            placeholder: 'Enter city / location',
            width: 'half',
          },
        ],
      },
      {
        id: 'startup-details',
        title: 'Startup Details',
        fields: [
          {
            name: 'startupName',
            label: 'Startup Name',
            type: 'text',
            placeholder: 'Enter startup name',
            required: true,
            width: 'half',
          },
          {
            name: 'domain',
            label: 'Sector / Domain',
            type: 'text',
            placeholder: 'AI, Manufacturing, HealthTech, EdTech...',
            required: true,
            width: 'half',
          },
          {
            name: 'stage',
            label: 'Startup Stage',
            type: 'select',
            placeholder: 'Select stage',
            required: true,
            width: 'half',
            options: [
              { label: 'Idea Stage', value: 'Idea Stage' },
              { label: 'Validation Stage', value: 'Validation Stage' },
              { label: 'Prototype / MVP Stage', value: 'Prototype / MVP Stage' },
              { label: 'Early Revenue', value: 'Early Revenue' },
              { label: 'Growth Stage', value: 'Growth Stage' },
              { label: 'Registered Startup', value: 'Registered Startup' },
            ],
          },
          {
            name: 'teamSize',
            label: 'Team Size',
            type: 'number',
            placeholder: 'Enter team size',
            width: 'half',
            validation: [{ type: 'min', value: 1 }],
          },
          {
            name: 'registrationStatus',
            label: 'Startup Registration Status',
            type: 'select',
            placeholder: 'Select registration status',
            width: 'full',
            options: [
              { label: 'Not Yet Registered', value: 'Not Yet Registered' },
              { label: 'Incorporation in Progress', value: 'Incorporation in Progress' },
              { label: 'Registered Private Limited', value: 'Registered Private Limited' },
              { label: 'Registered LLP', value: 'Registered LLP' },
              { label: 'Registered OPC', value: 'Registered OPC' },
              { label: 'Other', value: 'Other' },
            ],
          },
          {
            name: 'description',
            label: 'Problem Statement / Startup Description',
            type: 'textarea',
            placeholder:
              'Describe the problem you are solving, your solution, target users, and current progress.',
            required: true,
            width: 'full',
            validation: [{ type: 'minLength', value: 20 }],
          },
          {
            name: 'traction',
            label: 'Current Traction / Validation',
            type: 'textarea',
            placeholder:
              'Mention users, pilots, prototypes, customer interviews, revenue, partnerships, or validation achieved.',
            width: 'full',
          },
        ],
      },
      {
        id: 'program-fit',
        title: 'Program Fit & Support Needed',
        fields: [
          {
            name: 'whyApply',
            label: 'Why are you applying for this program?',
            type: 'textarea',
            placeholder: 'Explain why this program is relevant for your startup at this stage.',
            required: true,
            width: 'half',
            validation: [{ type: 'minLength', value: 20 }],
          },
          {
            name: 'supportSummary',
            label: 'What support are you looking for?',
            type: 'textarea',
            placeholder:
              'Mentorship, prototyping, GTM, funding, validation, legal, partnerships...',
            width: 'half',
          },
          {
            name: 'supportNeeded',
            label: 'Support Needed',
            type: 'checkbox-group',
            width: 'full',
            options: supportOptions.map((item) => ({
              label: item,
              value: item,
            })),
          },
        ],
      },
      {
        id: 'links-references',
        title: 'Links & References',
        fields: [
          {
            name: 'pitchDeck',
            label: 'Pitch Deck Link',
            type: 'url',
            placeholder: 'Paste deck URL',
            width: 'half',
            validation: [{ type: 'url' }],
          },
          {
            name: 'demoLink',
            label: 'Product Demo / Prototype Link',
            type: 'url',
            placeholder: 'Paste demo or product URL',
            width: 'half',
            validation: [{ type: 'url' }],
          },
        ],
      },
      {
        id: 'declaration',
        fields: [
          {
            name: 'declaration',
            label: 'Declaration',
            type: 'checkbox',
            checkboxLabel: `I confirm that the information provided is accurate to the best of my knowledge and I am submitting this application for the ${program.title}.`,
            required: true,
            width: 'full',
          },
        ],
      },
    ],
  }
}
