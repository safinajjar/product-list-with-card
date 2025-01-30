<script setup lang="ts">
import type { CartItem, Product } from '@/types'
import { computed } from 'vue'
import RoundedButton from '../RoundedButton/RoundedButton.vue'

const props = defineProps<{
  cartItem: CartItem
}>()

const total = computed(() => props.cartItem.price * props.cartItem.quantity)

defineEmits(['removeItem'])
</script>

<template>
  <article class="cart-item">
    <dl class="relative flex flex-col">
      <dt class="hidden">Name</dt>
      <dd class="mb-2 text-sm font-semibold">{{ cartItem.name }}</dd>

      <div class="flex">
        <dt class="hidden">Quantity</dt>
        <dd class="text-red me-3 text-sm font-semibold">{{ cartItem.quantity }}x</dd>

        <dt class="hidden">Unit Price</dt>
        <dd class="me-2 text-sm text-rose-500">@ ${{ cartItem.price }}</dd>

        <dt class="hidden">Total</dt>
        <dd class="text-sm font-semibold text-rose-500">${{ total }}</dd>
        <RoundedButton class="remove-item" aria-label="Remove item from cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
            class="m-auto"
          >
            <path
              fill="#CAAFA7"
              d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
            />
          </svg>
        </RoundedButton>
      </div>
    </dl>
    <hr class="my-3 border-rose-100" />
  </article>
</template>

<style scoped>
@reference "tailwindcss";

.remove-item {
  @apply absolute top-[50%] right-0 translate-y-[-70%] border-rose-300 hover:border-rose-900;
  & svg path {
    @apply transition-all duration-100;
  }
  &:hover svg path {
    @apply fill-rose-900;
  }
}
</style>
