export interface Product {
  id: number
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
  name: string
  category?: string
  price: number
}

export type CartItem = Omit<Product, 'image'> & { quantity: number }

export type OrderItem = CartItem & {
  thumbnail: string
  totalPrice: number
}
