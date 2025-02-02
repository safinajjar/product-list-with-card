import type { CartItem, OrderItem } from '@/types'
import { defineStore, storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useProductsStore } from './product'
import formatPrice from '@/utils/currency'

export const useCartStore = defineStore('cart', () => {
  const cartItems = ref<CartItem[]>([])
  const orderItems = ref<OrderItem[]>([])

  const $reset = () => {
    cartItems.value = []
    orderItems.value = []
  }

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
      return formatPrice(item.price * item.quantity)
    }
    return 0
  }

  const getTotalCount = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.quantity, 0)
  })

  const getTotalPrice = computed(() => {
    return formatPrice(
      cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0),
    )
  })

  const setOrderItems = (cartItems: CartItem[]) => {
    const productsStore = useProductsStore()
    const { products } = storeToRefs(productsStore)
    orderItems.value = []

    cartItems.map((item) => {
      const product = products.value.find((product) => product.id === item.id)

      orderItems.value.push({
        ...item,
        thumbnail: product?.image.thumbnail!,
        totalPrice: item.price * item.quantity,
      })
    })
  }

  return {
    cartItems,
    orderItems,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    getTotalPriceOfItem,
    getTotalCount,
    getTotalPrice,
    isItemInCart,
    getItemQuantity,
    setOrderItems,
    $reset,
  }
})
