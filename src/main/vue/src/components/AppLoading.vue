<template>
  <span v-if="type === 'spinner'" class="loading loading-spinner loading-lg"></span>
  <span v-else-if="type === 'ring'" class="loading loading-ring loading-lg"></span>
  <span v-else class="loading loading-dots loading-lg"></span>
</template>

<script setup lang="ts">
interface AppLoadingProps {
  type?: 'spinner' | 'dots' | 'ring'
}

defineProps<AppLoadingProps>()
</script>

<style scoped></style>
