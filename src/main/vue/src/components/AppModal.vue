<template>
  <transition name="fade">
    <div class="custom-modal capitalize" v-show="isShow" ref="element">
      <div class="modal-body">
        <h3 class="text-2xl font-bold">{{ title }}</h3>
        <p class="py-4">{{ content }}</p>
        <div class="modal-action">
          <button class="btn btn-primary" @click="closeModal">{{ confirmText || 'Confirm' }}</button>
          <button v-if="type === 'message'" class="btn btn-neutral" @click="closeModal">
            {{ closeText || 'Close' }}
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

interface ModalProps {
  isShow: boolean
  type: 'message' | 'info'
  title: string
  content: string
  confirmText?: string
  closeText?: string
}

defineProps<ModalProps>()
const emits = defineEmits(['close-modal'])
const showFirst = ref(false)
const element = ref<HTMLElement | null>()

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

const handleClickOutside = (event: Event) => {
  if (element.value && element.value.isEqualNode(event.target as Node)) {
    closeModal()
  }
}

const closeModal = () => {
  showFirst.value = false
  emits('close-modal')
}
</script>

<style scoped>
.custom-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0006;
  display: flex;
  justify-content: center;
  align-items: center;
}

.custom-modal .modal-body {
  max-height: calc(100vh - 5em);
  width: 91.666667%;
  max-width: 32rem;
  border-radius: 1rem;
  padding: 1.5rem;
  background-color: var(--fallback-b1, oklch(var(--b1) / var(--tw-bg-opacity)));
  transition: opacity 0.25s ease-in-out;
  box-shadow: #00000040 0 25px 50px -12px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
