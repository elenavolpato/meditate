<template>
  <div class="slidecontainer">
    <input type="range" v-bind="range" class="slider" id="myRange">
</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    range: {}
  },
}); 

</script> 

<style scoped>

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