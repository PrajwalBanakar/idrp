<template>
  <div v-if="coursePage" class="course-detail-view">
    <CourseDetailHeroSection
      :eyebrow="coursePage.eyebrow"
      :title="coursePage.heroTitle"
      :description="coursePage.heroDescription"
      :apply-route="coursePage.applyRoute"
      :enquire-route="coursePage.enquireRoute"
      :brochure-url="course?.brochureUrl"
    />

    <CourseDetailOverviewSection
      :overview-title="coursePage.overviewTitle"
      :overview-paragraphs="coursePage.overviewParagraphs"
      :snapshot-title="coursePage.snapshotTitle"
      :snapshot-items="coursePage.snapshotItems"
    />

    <CourseHighlightsSection :highlights="coursePage.highlights" />

    <CourseAudienceSection :audience="coursePage.audience" :outcomes="coursePage.outcomes" />

    <CourseDetailCTASection
      :title="coursePage.ctaTitle"
      :description="coursePage.ctaDescription"
      :apply-route="coursePage.applyRoute"
    />
  </div>

  <CourseDetailNotFound v-else />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import CourseAudienceSection from '@/components/academy/CourseAudienceSection.vue'
import CourseDetailCTASection from '@/components/academy/CourseDetailCTASection.vue'
import CourseDetailHeroSection from '@/components/academy/CourseDetailHeroSection.vue'
import CourseDetailNotFound from '@/components/academy/CourseDetailNotFound.vue'
import CourseDetailOverviewSection from '@/components/academy/CourseDetailOverviewSection.vue'
import CourseHighlightsSection from '@/components/academy/CourseHighlightsSection.vue'

import {
  getCertificationCourseDetailPageBySlug,
  getCertificationCourseBySlug,
} from '@/data/academyCatalog'

const route = useRoute()

const slug = computed(() => String(route.params.slug ?? ''))

const coursePage = computed(() => getCertificationCourseDetailPageBySlug(slug.value))

const course = computed(() => getCertificationCourseBySlug(slug.value))
</script>
