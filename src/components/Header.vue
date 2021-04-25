<template>
  <header class="relative block h-0 object-center-bottom lowercase text-4xl font-bold text-white">
    <h1 class="bottom-0 text-center">{{ msg }}</h1>
  </header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: String,
  },
});
</script>

<style scoped>
</style>


