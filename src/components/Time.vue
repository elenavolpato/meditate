<template>
  <div class="slidecontainer">
    <label for="time">How long would you like to meditate?</label>
    <p id="selectedMinutes">{{ minutes }} minutes</p>
    <input
      @change="updateMinutes"
      type="range"
      v-model="minutes"
      min="3"
      max="60"
      class="slider"
      id="time"
    /> 
  </div>
</template>

<script>
/* falta label no tempo */
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    
  },
  emits: ['minutesSelected'],
  data() {
    return {
      minutes: 32,
      slider: '',    
    }
  },
  methods: {
    updateMinutes() {
      this.$emit('minutesSelected', this.minutes) 
      console.log(this.minutes);
    }
      
    
  }  
}); 

</script> 

