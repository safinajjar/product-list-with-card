<script setup lang="ts">
import type { CartItem, Product } from '@/types'
import { computed } from 'vue'

const props = defineProps<{
  cartItem: CartItem
}>()

const total = computed(() => props.cartItem.price * props.cartItem.quantity)
</script>

<template>
  <article class="cart-item">
    <section class="cart-item-details">
      <dl class="flex flex-col">
        <dt class="hidden">Name</dt>
        <dd class="mb-2 text-sm font-semibold">{{ cartItem.name }}</dd>

        <div class="flex">
          <dt class="hidden">Quantity</dt>
          <dd class="text-red me-3 text-sm font-semibold">{{ cartItem.quantity }}x</dd>

          <dt class="hidden">Unit Price</dt>
          <dd class="me-2 text-sm text-rose-500">@ ${{ cartItem.price }}</dd>

          <dt class="hidden">Total</dt>
          <dd class="text-sm font-semibold text-rose-500">${{ total }}</dd>
          <button type="button" aria-label="Remove item from cart">Remove</button>
        </div>
      </dl>
    </section>
    <hr />
  </article>
</template>
