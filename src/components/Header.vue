<template>
  <div>
    <h1> {{ msg }} </h1>
  </div>
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

</style>