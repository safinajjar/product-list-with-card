<script setup lang="ts">
import AddToCartBtn from './AddToCartBtn.vue'
import type { Product } from '@/types'
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
        :productId="product.id"
        class="absolute bottom-0 left-[50%] translate-x-[-50%] translate-y-[50%]"
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
