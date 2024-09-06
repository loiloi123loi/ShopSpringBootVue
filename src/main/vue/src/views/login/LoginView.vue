<template>
  <div class="flex items-center justify-center w-full h-full">
    <div class="bg-base-200 rounded-[8px] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
      <div class="flex flex-col p-10 gap-6">
        <label class="input input-bordered flex items-center gap-2">
          <input type="email" class="grow text-lg" placeholder="Enter your email" />
        </label>
        <label class="input input-bordered flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 opacity-70">
            <path
              fill-rule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clip-rule="evenodd"
            />
          </svg>
          <input :type="showPassword ? 'text' : 'password'" class="grow text-lg" placeholder="Enter your password" />
          <kbd class="cursor-pointer" @click="showPassword = !showPassword">
            <VisibleIcon v-if="showPassword" fill="#fff" />
            <InvisibleIcon v-if="!showPassword" fill="#fff" />
          </kbd>
        </label>
        <label class="flex justify-between text-lg gap-14">
          <div class="flex justify-between items-center gap-2">
            <div class="text-base">Remember Me</div>
            <input type="checkbox" class="checkbox checkbox-sm" />
          </div>
          <RouterLink to="/forgot-password" class="hover:text-emerald-500 text-base">Forgot password?</RouterLink>
        </label>
        <button class="btn btn-primary btn-sm">Submit</button>
        <div class="flex justify-center">
          <div class="border-gray-600 border-[1px] w-1/2"></div>
        </div>
        <div class="flex flex-col justify-between gap-4">
          <button class="btn btn-outline flex-grow btn-sm">
            <img width="22" src="../../assets/img/google.png" />
            <span>Login with Google</span>
          </button>
          <button class="btn btn-outline flex-grow btn-sm">
            <img width="22" src="../../assets/img/facebook.png" />
            <span>Login with Facebook</span>
          </button>
          <button class="btn btn-outline flex-grow btn-sm">
            <div class="bg-white rounded-full">
              <img width="22" src="../../assets/img/github.png" />
            </div>
            <span>Login with Github</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InvisibleIcon from '@/components/icon/InvisibleIcon.vue'
import VisibleIcon from '@/components/icon/VisibleIcon.vue'
import { ref } from 'vue'

const showPassword = ref(false)
</script>

<style scoped></style>
