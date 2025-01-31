import type { Product } from '@/types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProductsStore = defineStore('products', () => {
  const products = ref<Product[]>([])

  const fetchProducts = async () => {
    const response = await fetch('/data.json')
    if (!response.ok) {
      throw new Error('Failed to fetch products')
    }
    const data = await response.json()
    products.value = data
  }

  return { products, fetchProducts }
})
