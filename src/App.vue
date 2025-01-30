<script setup lang="ts">
import ShopCart from './components/ShopCart.vue'
import ShopProducts from './components/ShopProducts.vue'
import { ref } from 'vue'

const products = ref([])

// fetch products from data.json
fetch('/data.json')
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    products.value = data
  })
  .catch((err) => {
    console.error(err)
  })
</script>

<template>
  <main class="mx-auto items-start gap-8 px-8 py-12 lg:flex lg:max-w-[90rem]">
    <ShopProducts :products="products" />
    <ShopCart />
  </main>
</template>
