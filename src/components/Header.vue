<template>
  <header>
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