<script setup lang="ts">
import EmptyCartImg from '/images/illustration-empty-cart.svg'
</script>

<template>
  <div
    class="cart mt-8 flex flex-col items-center justify-center rounded bg-white p-8 md:mt-0 lg:min-w-[20rem]"
  >
    <h2 class="text-red self-start text-2xl"><strong>Your Cart (0)</strong></h2>
    <img :src="EmptyCartImg" alt="Empty Cart" class="mt-10 mb-2" />
    <p class="text-rose-500">Your added items will appear here</p>
  </div>
</template>
