<script lang="ts" setup>
import { computed } from 'vue'

// props
const props = defineProps<{
  productCounter: number
}>()

// computed
const isProductCounterVisible = computed(() => props.productCounter > 0)

// emits
const emit = defineEmits(['increment', 'decrement'])
const increment = () => emit('increment')
const decrement = () => emit('decrement')
</script>

<template>
  <Transition name="fade-scale" mode="out-in">
    <div
      v-if="isProductCounterVisible"
      class="bg-red border-red flex w-[170px] items-center justify-between rounded-3xl border-1 px-4 py-2 text-center font-[500] text-white"
    >
      <button type="button" class="counter--btn" @click="decrement">
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
      </button>
      {{ productCounter }}
      <button type="button" class="counter--btn" @click="increment">
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
      </button>
    </div>
    <button
      v-else
      type="button"
      class="hover:border-red hover:text-red w-[170px] rounded-3xl border-1 border-rose-300 bg-white px-4 py-2 font-[500] transition-all ease-in-out hover:cursor-pointer active:scale-[1.1]"
      @click="increment"
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
  @apply flex h-[20px] w-[20px] cursor-pointer content-center items-center rounded-full border-1 border-white transition-all hover:bg-white active:scale-[1.1];
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
