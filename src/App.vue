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
  <main class="container md:flex md:mx-auto md:justify-between gap-12 py-12 px-8">
    <ShopProducts :products="products" />
    <ShopCart />
  </main>
</template>

<style scoped>
main {
  height: 100vh;
}
</style>
