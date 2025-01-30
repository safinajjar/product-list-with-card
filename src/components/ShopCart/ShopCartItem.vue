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
    <header class="cart-item-header">
      <h2 class="product-name">{{ cartItem.name }}</h2>
    </header>

    <section class="cart-item-details">
      <dl>
        <dt class="hidden">Quantity</dt>
        <dd>{{ cartItem.quantity }}x</dd>

        <dt>Unit Price</dt>
        <dd>{{ cartItem.price }}</dd>

        <dt>Total</dt>
        <dd>{{ total }}</dd>
      </dl>
    </section>

    <footer class="cart-item-actions">
      <button type="button" aria-label="Remove item from cart">Remove</button>
    </footer>
  </article>
</template>
