<template>
  <section class="bg-white px-6 py-8 md:px-12 lg:px-16">
    <div class="mx-auto flex max-w-7xl justify-end">
      <div class="w-full lg:w-72">
        <input
          :value="searchQuery"
          type="text"
          placeholder="Search mentors..."
          class="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-sm outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
          @input="$emit('update:searchQuery', ($event.target as HTMLInputElement).value)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  searchQuery: string
}>()

defineEmits<{
  'update:searchQuery': [value: string]
}>()
</script>
