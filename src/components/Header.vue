<template>
  <header class="text-center sm:text-center lowercase text-2xl text-white font-semibold bg-pink-900">
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


