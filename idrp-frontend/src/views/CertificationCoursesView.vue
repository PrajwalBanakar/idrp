<template>
  <div class="certification-courses-view">
    <section class="bg-white px-6 py-20 md:px-16">
      <div class="mx-auto max-w-6xl">
        <div class="mb-14 text-center">
          <span class="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            Technical Education Academy
          </span>
          <h1 class="mt-2 text-4xl font-bold text-slate-900">Certification Courses</h1>
          <p class="mx-auto mt-3 max-w-3xl text-slate-600">
            Explore structured certification programs designed to build practical skills, industry
            exposure, and applied technical capability.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CourseCard v-for="course in certificationCourses" :key="course.slug" :course="course" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import CourseCard from '@/components/academy/CourseCard.vue'
import { certificationCourses } from '@/data/academyCatalog'
</script>
