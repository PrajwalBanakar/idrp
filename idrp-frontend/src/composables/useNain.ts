import { computed, reactive, ref } from 'vue'
import type { NAINInstitute } from '@/types/nain'

export function useNain(institutes: NAINInstitute[]) {
  const searchQuery = ref('')
  const selectedYear = ref('all')

  const expandedInstitutes = reactive<Record<string, boolean>>(
    Object.fromEntries(institutes.map((i) => [i.id, false])),
  )

  const availableYears = computed(() => {
    const set = new Set<string>()
    institutes.forEach((i) => i.years.forEach((y) => set.add(y.year)))
    return Array.from(set).sort().reverse()
  })

  const totalProjects = computed(() =>
    institutes.reduce(
      (total, inst) => total + inst.years.reduce((sum, y) => sum + y.projects.length, 0),
      0,
    ),
  )

  function toggleInstitute(id: string) {
    expandedInstitutes[id] = !expandedInstitutes[id]
  }

  return {
    searchQuery,
    selectedYear,
    expandedInstitutes,
    availableYears,
    totalProjects,
    toggleInstitute,
  }
}
