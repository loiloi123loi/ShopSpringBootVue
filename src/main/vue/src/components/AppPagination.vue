<template>
  <div class="join">
    <button class="join-item btn btn-outline" @click="emits('change-page', Math.max(1, currentPage - 1))">
      <span class="text-xl">«</span>
    </button>
    <button
      v-for="num in list"
      class="join-item btn btn-outline"
      :class="{ active: num === currentPage }"
      @click="emits('change-page', num)"
    >
      {{ num }}
    </button>
    <button class="join-item btn btn-outline" @click="emits('change-page', Math.min(currentPage + 1, totalPages))">
      <span class="text-xl">»</span>
    </button>
  </div>
</template>

<script setup lang="ts">
interface PaginationProps {
  currentPage: number
  totalPages: number
}

const { totalPages } = defineProps<PaginationProps>()
const list = Array.from({ length: totalPages }, (_, i: number) => i + 1)
const emits = defineEmits(['change-page'])
</script>

<style scoped>
.active {
  --tw-border-opacity: 1;
  border-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-border-opacity)));
  --tw-bg-opacity: 1;
  background-color: var(--fallback-bc, oklch(var(--bc) / var(--tw-bg-opacity)));
  --tw-text-opacity: 1;
  color: var(--fallback-b1, oklch(var(--b1) / var(--tw-text-opacity)));
}
</style>
