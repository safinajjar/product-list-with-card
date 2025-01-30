<script setup lang="ts">
import { ref } from 'vue'
import EmptyCartImg from '/images/illustration-empty-cart.svg'
import ShopCartItem from './ShopCartItem.vue'
import type { CartItem } from '@/types'

const cartItems = ref<CartItem[]>([])

const cartItem = ref<CartItem>({
  id: 1,
  name: 'Product-Name',
  price: 7,
  quantity: 1,
  category: 'Category',
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
      <ShopCartItem :cartItem />
    </template>
    <template v-else>
      <img :src="EmptyCartImg" alt="Empty Cart" class="mt-10 mb-2 w-[10rem]" />
      <p class="text-rose-500">Your added items will appear here</p>
    </template>
  </div>
</template>
