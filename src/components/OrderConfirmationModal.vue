<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import formatPrice from '@/utils/currency'
import { storeToRefs } from 'pinia'

const emit = defineEmits(['closeConfirmationModal'])
const cartStore = useCartStore()
const { orderItems, getTotalPrice } = storeToRefs(cartStore)

const handleStartNewOrder = () => {
  cartStore.$reset()
  emit('closeConfirmationModal')
}
</script>

<template>
  <teleport to="body">
    <dialog class="modal" open>
      <div class="modal-box">
        <header>
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z"
              fill="#1EA575"
            />
            <path
              d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z"
              fill="#1EA575"
            />
          </svg>

          <h2>Order Confirmed</h2>
          <p>We hope you enjoy your food!</p>
        </header>

        <section class="order-summary" v-if="orderItems.length > 0">
          <article v-for="item in orderItems" :key="item.id" class="order-item">
            <figure><img :src="item.thumbnail" alt="Classic Tiramisu" /></figure>
            <div class="item-details">
              <h4 class="item-name">{{ item.name }}</h4>
              <p class="item-quantity text-red!">
                {{ item.quantity }}x
                <span class="item-price">@{{ formatPrice(item.price) }}</span>
              </p>
            </div>
            <p class="item-total-price">{{ formatPrice(item.totalPrice) }}</p>
          </article>

          <footer class="order-total">
            <p>Order Total</p>
            <p class="total-price">{{ getTotalPrice }}</p>
          </footer>
        </section>
        <button
          class="bg-red border-red mt-8 w-full rounded-3xl border-1 px-4 py-3 text-center font-semibold text-white transition-all duration-100 active:scale-[1.07]"
          @click="handleStartNewOrder"
        >
          Start New Order
        </button>
      </div>
      <button class="outside--btn" @click="emit('closeConfirmationModal')">close</button>
    </dialog>
  </teleport>
</template>

<style scoped>
@reference "tailwindcss";

.modal {
  @apply fixed top-0 right-0 bottom-0 left-0 z-50 grid h-full max-h-none w-full max-w-none animate-[modal-pop_0.1s_ease-out] items-center justify-items-center bg-black/50 backdrop-blur-[3px];

  .modal-box {
    @apply col-start-1 row-start-1 flex flex-col rounded-xl bg-white p-6 pt-8 shadow-2xl sm:w-[90vw] md:w-[70vw] md:p-10 lg:w-[50vw] xl:w-[35vw];
  }

  & .outside--btn {
    @apply z-[-1] col-start-1 row-start-1 grid self-stretch justify-self-stretch text-transparent;
  }

  h2 {
    @apply mt-8 text-4xl font-bold;
  }

  p {
    @apply mt-2 mb-6;
  }

  .order-summary {
    @apply grid gap-4 rounded-xl bg-rose-50 p-6;

    .order-item {
      @apply grid grid-cols-[60px_1fr_auto] gap-3.5 border-b border-b-rose-100 pb-4;

      img {
        @apply h-15 w-15 rounded-md object-cover;
      }

      .item-details {
        @apply flex flex-col;

        .item-name {
          @apply max-w-[130px] overflow-hidden text-sm font-[600] text-ellipsis whitespace-nowrap sm:max-w-none sm:whitespace-normal;
        }

        .item-quantity {
          @apply m-0 mt-auto text-sm font-[600];

          .item-price {
            @apply ms-3 font-[500] text-rose-500;
          }
        }
      }

      .item-total-price {
        @apply m-0 self-center justify-self-end font-[600] text-rose-900;
      }
    }

    .order-total {
      @apply flex items-center justify-between py-1;

      p {
        @apply m-0 font-medium;
      }

      .total-price {
        @apply m-0 text-3xl font-bold text-rose-900;
      }
    }
  }
}

@keyframes modal-pop {
  0% {
    opacity: 0;
  }
}
</style>
