<template>
  <div class="flex-none">
    <div ref="dropdown">
      <div
        tabindex="0"
        class="flex justify-center items-center gap-5 pl-3"
        :class="{ [btnClass ?? '']: btnClass, 'btn btn-ghost': !btnClass ?? undefined }"
        @click="showItems = !showItems"
      >
        <span v-if="label">{{ label }}</span>
        <div role="button" class="avatar" v-if="iconSrc">
          <div class="w-10 rounded-full">
            <img :alt="label" :src="iconSrc" />
          </div>
        </div>
      </div>
      <transition name="slide">
        <ul
          v-if="showItems"
          tabindex="0"
          class="menu menu-sm dropdown-content rounded-box z-[1] mt-3 p-2 shadow w-36 bg-gray-dark absolute"
        >
          <li v-for="item in items" @click="showItems = !showItems">
            <span v-if="item.type === 'normal'">
              {{ item.label }}
            </span>
            <RouterLink v-if="item.type === 'link'" :to="item.to">
              {{ item.label }}
            </RouterLink>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

interface NormalItem {
  type: 'normal'
}

interface LinkItem {
  type: 'link'
  to: string
}

type DropdownButtonItem = (NormalItem | LinkItem) & {
  label: string
}

interface DropdownButtonProps {
  label?: string
  iconSrc?: string
  btnClass?: string
  items: Array<DropdownButtonItem>
}

defineProps<DropdownButtonProps>()

const showItems = ref(false)
const dropdown = ref<HTMLElement | null>(null)

const handleClickOutside = (event: Event) => {
  if (dropdown.value && !dropdown.value.contains(event.target as Node)) {
    showItems.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
