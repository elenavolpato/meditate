<template>
  <div class="pt-6 sm:pt-1.5">
    <div class="px-6 py-4 sm:p-2 w-full">
      <label for="time">How long would you like to meditate?</label>
      <input
        type="range"
        v-model="minutes"
        min="1"
        max="60"
        id="time"
        class="slider"
      />
      <div class="font-bold text-white">
        <p v-if="minutes > 1">{{ minutes }} minutes</p>
        <p v-else>1 minute</p>
      </div>
    </div>
  </div>
</template>

<script>

import { defineComponent } from "vue";

export default defineComponent({
  props: {},
  data() {
    return {
      slider: "",
    };
  },
  computed: {
    minutes: {
      get () {
        return this.$store.state.minutes;
      },
      set (minutes) {
        this.$store.commit('setMinutes', minutes)
      }
    }
  },
});
</script> 

<style scoped>
/*tailwindcss does not allow nice customizations to a 
range html element, therefore I used plain css*/

.slider {
  -webkit-appearance: none;
  width: 80%;
  height: 0.8rem;
  border-radius: 2rem;
  background: white;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  margin-top: 1.2rem;
  margin-bottom: 0.8rem;
}
.slider:hover {
  opacity: 1;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 0.1px lightgray solid;
  background: whitesmoke;
  cursor: pointer;
}
.slider::-moz-range-thumb {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 0.1px lightgray solid;
  background: white;
  cursor: pointer;
  box-shadow: gray;
}
</style>
