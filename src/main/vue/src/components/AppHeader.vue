<template>
  <!-- <div class="flex flex-col justify-center items-center bg-zinc-950" :class="['text-white']">
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
  </div> -->
  <div class="navbar bg-base-200 px-[15%]">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><RouterLink to="/">Homepage</RouterLink></li>
        <li><RouterLink to="/sample">Sample</RouterLink></li>
        <li><RouterLink to="/">About</RouterLink></li>
      </ul>
    </div>
    <div class="flex-1">
      <a class="hover:cursor-pointer text-xl cursor-pointer">Shop</a>
    </div>
    <div class="navbar-end">
      <button class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button>
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span class="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
    </div>
    <div class="flex-none">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <CartIcon fill="currentColor" />
            <span class="badge badge-sm indicator-item">8</span>
          </div>
        </div>
        <div tabindex="0" class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
          <div class="card-body">
            <span class="text-lg font-bold">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <DropDownButton
      label="Loi Tran"
      class="w-max"
      icon-src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
      :items="[
        {
          type: 'link',
          label: 'My Profile',
          to: '/my'
        },
        {
          type: 'normal',
          label: 'Settings'
        }
      ]"
    />
  </div>
</template>

<script setup lang="ts">
import CartIcon from '@/components/icon/CartIcon.vue'
import DropDownButton from '@/components/DropdownButton.vue'
</script>

<style scoped></style>
