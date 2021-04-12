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

<style scoped>
.slidecontainer {
  font-size: 1.3rem;
  margin: 1.5rem 0;
}
#selectedMinutes {
  color: purple;
  width: 13rem;
  margin: 0.5rem auto;
  padding: 0;
  font-size: 1rem;
}

.slider {
  width: 80%;
  height: 15px;
  border-radius: 1rem;
  background: rgb(255, 218, 255);
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}
.slider:hover {
  opacity: 1;
  background: rgb(255, 194, 255);
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: purple;
  cursor: pointer;
}


</style>