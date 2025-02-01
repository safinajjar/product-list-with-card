<script lang="ts" setup></script>

<template>
  <button type="button" class="rounded--btn">
    <slot />
  </button>
</template>

<style scoped>
@reference "tailwindcss";

.rounded--btn {
  @apply flex h-[20px] w-[20px] content-center items-center rounded-full border-1 transition-all duration-100 active:scale-[1.1];
}
</style>
