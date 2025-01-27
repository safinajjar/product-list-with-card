<script setup lang="ts">
import ShopCart from './components/ShopCart.vue'
import ShopProducts from './components/ShopProducts.vue'
</script>

<template>
  <main class="container flex mx-auto justify-between gap-12 py-12">
    <ShopProducts />
    <ShopCart />
  </main>
</template>

<style scoped>
main {
  height: 100vh;
}
</style>
