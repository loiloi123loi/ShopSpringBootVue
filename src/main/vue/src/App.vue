<template>
  <div class="flex flex-col justify-center h-screen w-screen">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppFooter from '@/components/AppFooter.vue'
import AppHeader from '@/components/AppHeader.vue'
import { themeStore } from '@/stores/themeStore'
import { storeToRefs } from 'pinia'
import { watch } from 'vue'

const store = themeStore()
const { currentTheme } = storeToRefs(store)
document.documentElement.setAttribute('data-theme', currentTheme.value)

watch(currentTheme, (newTheme) => {
  document.documentElement.setAttribute('data-theme', newTheme)
})
</script>
