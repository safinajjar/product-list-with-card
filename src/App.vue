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

<!-- change width of container on tablet -->
<template>
  <main class="container items-start md:flex mx-auto gap-12 py-12 px-8">
    <ShopProducts :products="products" />
    <ShopCart />
  </main>
</template>
