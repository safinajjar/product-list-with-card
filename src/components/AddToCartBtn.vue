<script lang="ts" setup>
import { useCartStore } from '@/stores/cart'
import RoundedButton from './RoundedButton/RoundedButton.vue'

defineProps<{
  productId: number
}>()

const { isItemInCart, decreaseQuantity, increaseQuantity, getItemQuantity, addToCart } =
  useCartStore()
</script>

<template>
  <Transition name="fade-scale" mode="out-in">
    <div
      v-if="isItemInCart(productId)"
      class="bg-red border-red flex w-[170px] items-center justify-between rounded-3xl border-1 px-4 py-2 text-center font-[500] text-white"
    >
      <RoundedButton class="counter--btn" @click="decreaseQuantity(productId)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          fill="none"
          viewBox="0 0 10 2"
          class="m-auto"
        >
          <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
        </svg>
      </RoundedButton>
      {{ getItemQuantity(productId) }}
      <RoundedButton class="counter--btn" @click="increaseQuantity(productId)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          fill="none"
          viewBox="0 0 10 10"
          class="m-auto"
        >
          <path
            fill="#fff"
            d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
          />
        </svg>
      </RoundedButton>
    </div>

    <!-- this needs to refactored / use a component -->
    <button
      v-else
      type="button"
      class="hover:border-red hover:text-red w-[170px] rounded-3xl border-1 border-rose-300 bg-white px-4 py-2 font-[500] transition-all ease-in-out hover:cursor-pointer active:scale-[1.1]"
      @click="addToCart(productId)"
    >
      <div class="flex items-center justify-center text-center">
        <img src="/images/icon-add-to-cart.svg" alt="basket" class="me-1.5" />
        Add to Cart
      </div>
    </button>
  </Transition>
</template>

<style scoped>
@reference "tailwindcss";

.counter--btn {
  @apply border-white hover:bg-white;
  &:hover > svg > path {
    fill: var(--color-red);
  }
}

/* Transition for entering and leaving */
.fade-scale-enter-active,
.fade-scale-leave-active {
  transition:
    opacity 10ms,
    transform 50ms ease-in-out;
}

.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
