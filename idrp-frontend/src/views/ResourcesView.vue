<template>
  <div class="resources-view">
    <ResourcesHeroSection />
    <NewsletterBookshelfSection :newsletters="newsletters" />
  </div>
</template>

<script setup lang="ts">
import { newsletters } from '@/data/newsletters'
import NewsletterBookshelfSection from '@/components/resources/NewsletterBookshelfSection.vue'
import ResourcesHeroSection from '@/components/resources/ResourcesHeroSection.vue'
</script>
