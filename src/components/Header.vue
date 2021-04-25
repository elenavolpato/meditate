<template>
  <header class="mt-10 sm:mt-1 font-bold text-6xl sm:text-4xl">
    <h1 class="lowercase  text-white">{{ msg }}</h1>
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

header {
  text-shadow: 1px 1px 8px lightgray;
}

</style>


