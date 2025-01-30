<script setup lang="ts">
import { computed, ref } from 'vue'
import EmptyCartImg from '/images/illustration-empty-cart.svg'
import ShopCartItem from './ShopCartItem.vue'
import type { CartItem } from '@/types'

const cartItem = ref<CartItem>({
  id: 1,
  name: 'Product-Name',
  price: 7.54,
  quantity: 1,
  category: 'Category',
})
const cartItems = ref<CartItem[]>([cartItem.value, cartItem.value])

const total = computed(() => {
  return cartItems.value.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)
})
</script>

<template>
  <div
    class="cart mt-8 flex flex-col rounded bg-white p-6 md:mt-0 lg:min-w-[20rem]"
    :class="{ 'items-center justify-center': cartItems.length === 0 }"
  >
    <h2 class="text-red self-start text-2xl" :class="{ 'mb-7': cartItems.length > 0 }">
      <strong>Your Cart ({{ cartItems.length }})</strong>
    </h2>

    <template v-if="cartItems.length > 0">
      <ShopCartItem v-for="item in cartItems" :key="item.id" :cartItem="item" />
      <p class="mt-2 flex items-center justify-between font-[500] text-rose-900">
        <span class="text-sm">Order Total</span>
        <strong class="text-2xl text-rose-900">${{ total }}</strong>
      </p>

      <p
        class="my-5 flex items-center justify-center rounded bg-rose-100 p-4 text-center text-xs text-rose-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="20"
          fill="none"
          viewBox="0 0 21 20"
        >
          <path
            fill="#1EA575"
            d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
          />
          <path
            fill="#1EA575"
            d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
          />
        </svg>
        <span class="ms-2">This is a <strong>carbon-neutral</strong> delivery</span>
      </p>

      <!-- this needs to refactored / use a component -->
      <button
        class="bg-red border-red w-full cursor-pointer rounded-3xl border-1 px-4 py-3 text-center text-sm font-[500] text-white transition-all duration-100 active:scale-[1.07]"
      >
        Confirm Order
      </button>
    </template>
    <template v-else>
      <img :src="EmptyCartImg" alt="Empty Cart" class="mt-10 mb-2 w-[10rem]" />
      <p class="text-rose-500">Your added items will appear here</p>
    </template>
  </div>
</template>
