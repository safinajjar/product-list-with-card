<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ShopCart from './components/ShopCart/ShopCart.vue'
import ShopProducts from './components/Products/ShopProducts.vue'
import { useProductsStore } from './stores/product'
import { defineAsyncComponent, ref } from 'vue'

const productsStore = useProductsStore()
const { fetchProducts } = useProductsStore()
const { products } = storeToRefs(productsStore)
const isModalOpen = ref<boolean>(false)

fetchProducts()

const OrderConfirmationModal = defineAsyncComponent(
  () => import('./components/OrderConfirmationModal.vue'),
)

const openConfirmationModal = () => (isModalOpen.value = true)
const closeConfirmationModal = () => (isModalOpen.value = false)
</script>

<template>
  <main class="mx-auto items-start gap-8 px-8 py-12 lg:flex lg:max-w-[90rem]">
    <ShopProducts :products="products" />
    <ShopCart @openConfirmationModal="openConfirmationModal" />
    <OrderConfirmationModal v-if="isModalOpen" @closeConfirmationModal="closeConfirmationModal" />
  </main>
</template>
