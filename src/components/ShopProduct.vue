<script setup lang="ts">
import { ref } from 'vue'
import AddToCartBtn from './AddToCartBtn.vue'
import type { Product } from '@/types'
const productCounter = ref(0)

const incrementProductCounter = () => {
  productCounter.value++
}

const decrementProductCounter = () => {
  if (productCounter.value === 0) {
    productCounter.value = 0
    return
  }
  productCounter.value--
}

console.log(productCounter.value)

defineProps<{
  product: Product
}>()
</script>

<template>
  <li>
    <div class="shopProduct relative mb-7">
      <div class="overflow-hidden rounded-xl border-2 border-transparent transition-[border]">
        <picture>
          <source :srcset="product.image.desktop" media="(min-width: 64rem)" />
          <source :srcset="product.image.tablet" media="(min-width: 48rem)" />
          <img :src="product.image.mobile" :alt="product.name" class="w-full object-cover" />
        </picture>
      </div>

      <AddToCartBtn
        class="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%]"
        :productCounter
        @increment="incrementProductCounter"
        @decrement="decrementProductCounter"
      />
    </div>

    <p class="text-rose-400">{{ product.category }}</p>
    <p class="text-base">
      <strong class="font-semibold">{{ product.name }}</strong>
    </p>
    <p class="text-red">
      <strong class="font-semibold">€{{ product.price }}</strong>
    </p>
  </li>
</template>

<style scoped>
.shopProduct:hover > div,
.shopProduct:has(button:hover),
.shopProduct:has(button:focus) {
  border-color: var(--color-red);
}
</style>
