<script setup lang="ts">
import { defineProps } from 'vue'
import ShopProduct from './ShopProduct.vue'
export type Product = {
  id: number
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
  name: string
  category: string
  price: number
}

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
