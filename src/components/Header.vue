<template>
  <header class="text-center lowercase text-3xl font-bold pt-2 p-2 text-pink-500">
    <div class="">
      <h1> {{ msg }} </h1>
    </div>
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


