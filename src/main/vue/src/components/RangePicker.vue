<template>
  <div>
    <input
      type="range"
      :min="min"
      :max="max"
      :value="value"
      @input="updateValue($event)"
      class="range"
      :class="[getRangeSizeClass()]"
    />
  </div>
</template>

<script setup lang="ts">
interface RangePickerProps {
  size?: 'small' | 'normal' | 'big'
  min: number
  max: number
  value: number
}

const props = defineProps<RangePickerProps>()
const emits = defineEmits(['update-value'])

const getRangeSizeClass = () => {
  const { size } = props
  if (size === 'small') {
    return 'range-xs'
  } else if (size === 'big') {
    return 'range-sm'
  }
  return 'range-md'
}

const updateValue = (event: Event) => {
  const newValue = (event.target as HTMLInputElement).value
  emits('update-value', Number(newValue))
}
</script>

<style scoped></style>
