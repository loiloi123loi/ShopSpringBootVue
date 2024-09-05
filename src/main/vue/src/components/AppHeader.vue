<template>
  <div class="flex flex-col justify-center items-center bg-zinc-950" :class="['text-white']">
    <img class="w-screen" src="../assets/img/banner.png" />
    <div class="flex justify-between w-full px-[15%] text-xl">
      <div class="flex justify-center items-center">
        <RouterLink activeClass="bg-zinc-500" class="px-7 py-5 rounded-[8px] hover:bg-zinc-700" to="/">
          Home
        </RouterLink>
        <RouterLink activeClass="bg-zinc-500" class="px-7 py-5 rounded-[8px] hover:bg-zinc-700" to="/products">
          Product
        </RouterLink>
      </div>
      <div class="flex">
        <RouterLink
          activeClass="bg-zinc-500"
          to="/cart"
          class="px-9 py-5 rounded-[8px] hover:bg-zinc-700 flex justify-center items-center"
        >
          <CartIcon fill="#fff" :width="20" />
        </RouterLink>
        <RouterLink
          activeClass="bg-zinc-500"
          to="/login"
          class="px-5 py-5 rounded-[8px] hover:bg-zinc-700 flex items-center gap-[4px]"
        >
          <LoginIcon fill="#fff" />
          <span>Login</span>
        </RouterLink>
        <RouterLink
          activeClass="bg-zinc-500"
          to="/register"
          class="px-5 py-5 rounded-[8px] hover:bg-zinc-700 flex items-center gap-[4px]"
        >
          <RegisterIcon fill="#fff" />
          <span>Register</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CartIcon from '@/components/icon/CartIcon.vue'
import LoginIcon from '@/components/icon/LoginIcon.vue'
import RegisterIcon from './icon/RegisterIcon.vue'
</script>

<style scoped></style>
