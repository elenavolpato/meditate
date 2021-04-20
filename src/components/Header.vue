<template>
  <header class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
    <h1> {{ msg }} </h1>
  </header>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  props: {
    msg: String
  }
})


</script>

<style scoped>

header { 
  background-color: purple;
  color: white;
  padding: 1rem
}


</style>

