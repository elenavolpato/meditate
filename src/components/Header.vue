<template>
  <header class="mt-10 font-black text-5xl">
    <h1 class="lowercase sm:text-4xl text-white">{{ msg }}</h1>
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


