<script setup lang="ts">
type Props = {
  searchQuery: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:searchQuery', value: string): void
}>()
</script>

<template>
  <div class="w-full lg:w-[360px]">
    <input
      :value="props.searchQuery"
      type="text"
      placeholder="Search year, institute, mentor, project, team..."
      class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-0 transition placeholder:text-slate-400 focus:border-teal-400"
      @input="emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
