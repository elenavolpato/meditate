<template>
  <footer class="themefooter">
    <div class="themefooter">
     <div id="icons" v-for="(icon, index) in icons" :key="index"> {{ icon }}  </div>
     <div> {{ msg }} </div>
     
    </div>
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
  display: flex;
  background-color: black;
  padding: 0.5rem;
  color: whitesmoke;
  justify-content: center;
}
#icons {
 
  
  flex-direction: column;
}
</style>
