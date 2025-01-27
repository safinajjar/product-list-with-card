<script setup lang="ts">
import EmptyCartImg from '/images/illustration-empty-cart.svg'
</script>

<template>
  <div
    class="cart bg-white p-8 rounded flex items-center justify-center flex-col mt-8 md:mt-0 lg:min-w-[370px]"
  >
    <h2 class="text-red text-2xl self-start"><strong>Your Cart (0)</strong></h2>
    <img :src="EmptyCartImg" alt="Empty Cart" class="mb-2 mt-10" />
    <p class="text-rose-500">Your added items will appear here</p>
  </div>
</template>
