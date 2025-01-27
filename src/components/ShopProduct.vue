<script setup lang="ts">
import type { Product } from './ShopProducts.vue'

defineProps<{
  product: Product
}>()
</script>

<template>
  <li>
    {{ product.name }}
  </li>
</template>

<style scoped></style>
