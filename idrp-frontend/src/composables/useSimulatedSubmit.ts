import { ref } from 'vue'

/**
 * Shared submit state machine for forms that don't have a backend endpoint
 * wired up yet. Provides the same submitting/submitted/error shape as the
 * real `useForm` composable so the button/loading/error markup doesn't need
 * to change when a real API call replaces the simulated delay.
 */
export function useSimulatedSubmit(options?: { delayMs?: number; successDurationMs?: number }) {
  const submitting = ref(false)
  const submitted = ref(false)
  const errorMessage = ref('')

  async function submit(onSuccess: () => void) {
    if (submitting.value) return

    submitting.value = true
    errorMessage.value = ''

    try {
      await new Promise((resolve) => window.setTimeout(resolve, options?.delayMs ?? 500))

      onSuccess()
      submitted.value = true

      window.setTimeout(() => {
        submitted.value = false
      }, options?.successDurationMs ?? 6000)
    } catch (error) {
      errorMessage.value =
        error instanceof Error ? error.message : 'Something went wrong. Please try again.'
    } finally {
      submitting.value = false
    }
  }

  return { submitting, submitted, errorMessage, submit }
}
