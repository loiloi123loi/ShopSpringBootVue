<template>
  <div class="p-10 w-full h-full rounded-xl">
    <div>
      <span class="capitalize text-xl">dropdown</span>
      <div class="border rounded-sm mb-4"></div>
      <div class="flex">
        <DropDownButton
          class="w-max"
          btn-class="btn btn-success"
          label="LOI TRAN"
          icon-src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          :items="[
            {
              type: 'normal',
              label: 'item 1'
            },
            {
              type: 'link',
              label: 'item 2',
              to: '/'
            }
          ]"
        />
        <div class="border-[0.5px] mx-[4px]"></div>
        <DropDownButton
          class="w-max"
          btn-class="btn btn-primary"
          label="LOI TRAN"
          :items="[
            {
              type: 'normal',
              label: 'item 1'
            },
            {
              type: 'link',
              label: 'item 2',
              to: '/'
            }
          ]"
        />
        <div class="border-[0.5px] mx-[4px]"></div>
        <DropDownButton
          class="w-max"
          icon-src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          :items="[
            {
              type: 'normal',
              label: 'item 1'
            },
            {
              type: 'link',
              label: 'item 2',
              to: '/'
            }
          ]"
        />
      </div>
      <span class="capitalize text-xl">modal</span>
      <div class="border rounded-sm mb-4"></div>
      <div class="flex">
        <div>
          <button class="btn capitalize btn-accent" @click="isShowModal1 = true">Show modal message</button>
          <AppModal
            :is-show="isShowModal1"
            @close-modal="isShowModal1 = false"
            title="Warning"
            type="message"
            content="content of the modal"
            confirm-text="Confirm"
            close-text="Close"
          />
        </div>
        <div class="border-[0.5px] mx-[4px]"></div>
        <div>
          <button class="btn capitalize btn-neutral" @click="isShowModal2 = true">Show modal inform</button>
          <AppModal
            :is-show="isShowModal2"
            @close-modal="isShowModal2 = false"
            title="Info"
            type="info"
            content="content of the modal"
            confirm-text="Sure"
          />
        </div>
      </div>
      <span class="capitalize text-xl">Range</span>
      <div class="border rounded-sm mb-4"></div>
      <div class="flex">
        <div class="flex flex-col items-center">
          <div>{{ rangeValue1 }}</div>
          <RangePicker
            :min="0"
            :max="50"
            :value="rangeValue1"
            class="w-52"
            @update-value="(value: number) => (rangeValue1 = value)"
          />
        </div>
        <div class="border-[0.5px] mx-[4px]"></div>
        <div class="flex flex-col items-center">
          <div>{{ rangeValue1 }}</div>
          <RangePicker
            :min="0"
            :max="50"
            size="small"
            :value="rangeValue1"
            class="w-52"
            @update-value="(value: number) => (rangeValue1 = value)"
          />
        </div>
        <div class="border-[0.5px] mx-[4px]"></div>
        <div class="flex flex-col items-center">
          <div>{{ rangeValue1 }}</div>
          <RangePicker
            :min="0"
            :max="50"
            size="big"
            :value="rangeValue1"
            class="w-52"
            @update-value="(value: number) => (rangeValue1 = value)"
          />
        </div>
      </div>
      <span class="capitalize text-xl">Loading</span>
      <div class="border rounded-sm mb-4"></div>
      <div class="flex">
        <AppLoading />
        <div class="border-[0.5px] mx-[4px]"></div>
        <AppLoading type="spinner" />
        <div class="border-[0.5px] mx-[4px]"></div>
        <AppLoading type="ring" />
      </div>
      <span class="capitalize text-xl">Pagination</span>
      <div class="border rounded-sm mb-4"></div>
      <div class="flex">
        <AppPagination
          :current-page="currentPage"
          :total-pages="5"
          @change-page="(value: number) => (currentPage = value)"
        />
        <div class="border-[0.5px] mx-[4px]"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import AppLoading from '@/components/AppLoading.vue'
import AppModal from '@/components/AppModal.vue'
import AppPagination from '@/components/AppPagination.vue'
import DropDownButton from '@/components/DropdownButton.vue'
import RangePicker from '@/components/RangePicker.vue'
import { ref } from 'vue'

const isShowModal1 = ref(false)
const isShowModal2 = ref(false)

const rangeValue1 = ref(Math.floor(Math.random() * 20))
const currentPage = ref(2)
</script>

<style scoped></style>
