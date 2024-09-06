<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || height || 16"
    :height="height || width || 16"
    :fill="fill"
    class="bi bi-eye-fill"
    viewBox="0 0 16 16"
  >
    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
  </svg>
</template>

<script setup lang="ts">
interface VisibleProps {
  fill: string
  width?: number
  height?: number
}

const { fill, width, height } = defineProps<VisibleProps>()
</script>

<style scoped></style>
