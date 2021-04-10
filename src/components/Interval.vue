<template>
  <div id="interval">
    <p>Would you like to have interval bells?</p>
    <select>
      <option 
      v-for="(numberOfBell, index) in numberOfBells" 
      :key="index"> 
      {{ numberOfBell }} 
      </option>            
    </select>
  </div>  
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    numberOfBells: Array    
  },

  data () {
    return {
      selectedInterval: null
    }
  }
});
</script> 

<style scoped>

#interval {
  margin-bottom: 2rem;
  padding: 0.8rem;
  font-size: 1.3rem;
}
</style>