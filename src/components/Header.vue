<template>
  <header class="text-center sm:text-center lowercase text-3xl font-bold pt-2 p-2 text-pink-500">
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


