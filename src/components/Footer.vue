<template>
  <footer >
    <div class="themefooter"> {{ msg }} </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  props: {
    msg: String,
    icons: Array 
  }
})

</script>

<style scoped>
.themefooter {
  margin: 0 auto;
  background-color: black;
  padding: 1rem;
  color: whitesmoke;
  text-align: center;
  
}

</style>
