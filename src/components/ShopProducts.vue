<script setup lang="ts">
import ShopProduct from './ShopProduct.vue'
import type { Product } from '@/types'

defineProps<{
  products: Product[]
}>()
</script>

<template>
  <section class="products grow">
    <h1 class="mb-8 text-5xl font-bold">Desserts</h1>

    <ul class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <ShopProduct :product="product" v-for="product in products" :key="product.id" />
    </ul>
  </section>
</template>

<style scoped></style>
