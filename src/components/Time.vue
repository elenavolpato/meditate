<template>
  <div class="slidecontainer">
    <label for="time"> How long would you like to meditate?</label>
    <input type="range" v-bind="range" min="3" max="60" class="slider" id="time">
</div>
</template>



<script>
/* falta label no tempo */

import { defineComponent } from "vue";

export default defineComponent({
  props: {
    range: {}
  },
  }); 

</script> 

<style scoped>

.slidecontainer {
  padding: 2rem;
}

.slider {
  -webkit-appearance: none;
  width: 80%;
  height: 15px;
  margin: 1rem;
  border-radius: 1rem;  
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
 
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%; 
  background: #4CAF50;
  cursor: pointer;
}
</style>