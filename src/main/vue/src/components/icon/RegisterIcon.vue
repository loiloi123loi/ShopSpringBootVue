<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width || height || 16"
    :height="height || width || 16"
    :fill="fill"
    class="bi bi-person-plus-fill"
    viewBox="0 0 16 16"
  >
    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
    <path
      fill-rule="evenodd"
      d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
    />
  </svg>
</template>

<script setup lang="ts">
interface RegisterIconProps {
  fill: string
  width?: number
  height?: number
}

const { fill, width, height } = defineProps<RegisterIconProps>()
</script>

<style scoped></style>
