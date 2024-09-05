<template>
  <div class="flex items-center justify-center w-full h-full flex-col gap-14">
    <h2 class="text-4xl">{{ labels.PAGE_NOT_FOUND }}</h2>
    <div class="border-2 w-1/5"></div>
    <RouterLink to="/" class="text-xl underline">{{ labels.HOME }}</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { labels } from '@/utils/constants'
</script>

<style scoped></style>
