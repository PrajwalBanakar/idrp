<template>
  <div class="resources-view">
    <ResourcesHeroSection />
    <!-- <ResourcesIntroSection /> -->
    <NewsletterBookshelfSection :newsletters="newsletters" />
    <!-- <ResourceCategoriesSection :categories="resourceCategories" />  -->
    <!-- <MatchmakingSection :steps="matchmakingSteps" /> -->
    <!-- <ResourcesCTASection /> -->
  </div>
</template>

<script setup lang="ts">
import { newsletters } from '@/data/newsletters'
import NewsletterBookshelfSection from '@/components/resources/NewsletterBookshelfSection.vue'
import ResourceCategoriesSection from '@/components/resources/ResourceCategoriesSection.vue'
import MatchmakingSection from '@/components/resources/MatchmakingSection.vue'
import ResourcesHeroSection from '@/components/resources/ResourcesHeroSection.vue'
import ResourcesIntroSection from '@/components/resources/ResourcesIntroSection.vue'
import ResourcesCTASection from '@/components/resources/ResourcesCTASection.vue'
import { resourceCategories, matchmakingSteps } from '@/data/resources'
</script>
