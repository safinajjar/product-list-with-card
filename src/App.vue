<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ShopCart from './components/ShopCart/ShopCart.vue'
import ShopProducts from './components/Products/ShopProducts.vue'
import { useProductsStore } from './stores/product'

const productsStore = useProductsStore()
const { fetchProducts } = useProductsStore()
const { products } = storeToRefs(productsStore)

fetchProducts()
</script>

<template>
  <main class="mx-auto items-start gap-8 px-8 py-12 lg:flex lg:max-w-[90rem]">
    <ShopProducts :products="products" />
    <ShopCart />
  </main>
</template>
