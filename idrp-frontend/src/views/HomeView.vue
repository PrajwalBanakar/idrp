<template>
  <div class="home-view">
    <HeroSection :hero-slides="heroSlides" />
    <ImpactSection :stats="statsData" />
    <ProgramsSection :programs="programCatalog" :government-programs="governmentPrograms" />
    <CourseSection :courses="courses" />
    <ServicesSection :services="services" />
    <ApproachSection :approaches="approaches" />
    <SuccessStoriesSection :success-stories="successStories" />
    <PartnersSection :partner-categories="partnerCategories" :all-partners="allPartners" />
    <AwardsSection :awards="awards" />
    <CTASection />
  </div>
</template>

<script setup lang="ts">
import {
  heroSlides,
  governmentPrograms,
  courses,
  services,
  approaches,
  successStories,
  partnerCategories,
  allPartners,
  awards,
  stats as statsData,
} from '@/data/home'

import ProgramsSection from '@/components/home/ProgramsSection.vue'
import PartnersSection from '@/components/home/PartnersSection.vue'
import CourseSection from '@/components/home/CourseSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'
import ApproachSection from '@/components/home/ApproachSection.vue'
import ImpactSection from '@/components/home/ImpactSection.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import SuccessStoriesSection from '@/components/home/SuccessStoriesSection.vue'
import AwardsSection from '@/components/home/AwardsSection.vue'
import CTASection from '@/components/home/CTASection.vue'
import { programCatalog } from '@/data/programCatalog'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Home | IDRP',
  meta: [
    {
      name: 'description',
      content:
        'IIIT Dharwad Research Park supports startups from idea to scale through incubation, mentorship, research infrastructure, and innovation ecosystem programs.',
    },
    {
      property: 'og:title',
      content: 'IDRP – IIIT Dharwad Research Park',
    },
    {
      property: 'og:description',
      content:
        'Supporting startups from idea to scale with incubation, mentorship, and innovation ecosystem.',
    },
    {
      property: 'og:image',
      content: '/campus/idrp_building.jpg',
    },
  ],
})
</script>
