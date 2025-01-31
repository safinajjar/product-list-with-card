import type { CartItem } from '@/types'
import { defineStore, storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useProductsStore } from './product'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<CartItem[]>([])

  const isItemInCart = (productId: number) => {
    return cartItems.value.some((item) => item.id === productId)
  }

  const getItemQuantity = (productId: number) => {
    const item = cartItems.value.find((item) => item.id === productId)
    if (item) {
      return item.quantity
    }
    return 0
  }

  const addToCart = (productId: number) => {
    const productsStore = useProductsStore()
    const { products } = storeToRefs(productsStore)
    const item = products.value.find((item) => item.id === productId)!

    if (item) {
      cartItems.value.push({
        ...item,
        quantity: 1,
      })
    }
  }

  const increaseQuantity = (productId: number) => {
    const item = cartItems.value.find((item) => item.id === productId)
    if (item) {
      item.quantity += 1
    }
  }

  const decreaseQuantity = (productId: number) => {
    const item = cartItems.value.find((item) => item.id === productId)

    if (item) {
      item.quantity -= 1

      // remove item if quantity is 0
      if (item.quantity === 0) {
        removeItem(productId)
      }
    }
  }

  const removeItem = (productId: number) => {
    cartItems.value = cartItems.value.filter((item) => item.id !== productId)
  }

  const getTotalPriceOfItem = (productId: number) => {
    const item = cartItems.value.find((item) => item.id === productId)
    if (item) {
      return `$${item.price * item.quantity}`
    }
    return 0
  }

  const getTotalCount = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0)
  })

  const getTotalPrice = computed(() => {
    return `$${cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)}`
  })

  return {
    cartItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    getTotalPriceOfItem,
    getTotalCount,
    getTotalPrice,
    isItemInCart,
    getItemQuantity,
  }
})
