import type { FormConfig } from '@/types/form'
import type { CertificationCourse } from '@/types/academy'

export function createCourseApplicationFormConfig(course: CertificationCourse): FormConfig {
  return {
    id: 'course-application-form',
    type: 'course-application',
    title: `Apply for ${course.title}`,
    description: 'Fill in your details to apply for this certification course.',
    submitLabel: 'Submit Application',
    successMessage:
      'Application received successfully. Our team will review your course application and contact you with the next steps.',
    resetOnSuccess: true,
    endpoint: 'https://api.web3forms.com/submit',

    meta: {
      sourcePage: 'course-application',
      sourceSlug: course.slug,
      courseSlug: course.slug,
      courseTitle: course.title,
      category: 'course-application',
    },

    sections: [
      {
        id: 'applicant-details',
        title: 'Applicant Details',
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
            label: 'Designation / Role',
            type: 'text',
            placeholder: 'Enter your designation or role',
            width: 'half',
            defaultValue: '',
          },
          {
            name: 'experienceLevel',
            label: 'Current Experience Level',
            type: 'select',
            placeholder: 'Select your experience level',
            required: true,
            width: 'half',
            defaultValue: '',
            options: [
              { label: 'Student', value: 'student' },
              { label: 'Beginner', value: 'beginner' },
              { label: 'Intermediate', value: 'intermediate' },
              { label: 'Advanced', value: 'advanced' },
              { label: 'Working Professional', value: 'professional' },
              { label: 'Faculty', value: 'faculty' },
            ],
          },
        ],
      },
      {
        id: 'course-interest',
        title: 'Course Interest',
        fields: [
          {
            name: 'motivation',
            label: 'Why do you want to join this certification course?',
            type: 'textarea',
            placeholder: 'Tell us briefly why you are interested in this course',
            required: true,
            width: 'full',
            rows: 4,
            defaultValue: '',
          },
          {
            name: 'background',
            label: 'Relevant Background / Skills',
            type: 'textarea',
            placeholder: 'Mention your relevant background, skills, or prior exposure',
            width: 'full',
            rows: 4,
            defaultValue: '',
          },
          {
            name: 'expectations',
            label: 'What do you hope to gain from this course?',
            type: 'textarea',
            placeholder: 'Share your learning goals or expected outcomes',
            width: 'full',
            rows: 4,
            defaultValue: '',
          },
        ],
      },
      {
        id: 'consent-and-meta',
        fields: [
          {
            name: 'consent',
            label: 'I agree to be contacted regarding this course application',
            type: 'checkbox',
            checkboxLabel: 'I agree to be contacted regarding this course application',
            required: true,
            width: 'full',
            defaultValue: false,
          },
          {
            name: 'courseSlug',
            label: 'Course Slug',
            type: 'hidden',
            defaultValue: course.slug,
          },
          {
            name: 'courseTitle',
            label: 'Course Title',
            type: 'hidden',
            defaultValue: course.title,
          },
        ],
      },
    ],
  }
}
