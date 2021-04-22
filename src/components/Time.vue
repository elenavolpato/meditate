<template>
  <div class="text-xl leading-5 text-center pt-6 pb-6 font-thin text-gray-600">
    <div class="px-6 w-full">
      <label for="time">How long would you like to meditate?</label>
      <input
        @change="updateMinutes"
        type="range"
        v-model="minutes"
        min="1"
        max="60"
        id="time"
        class="slider"
      />
      <p v-if="minutes>1" class="text-base">{{ minutes }} minutes</p>
      <p v-else class="text-base"> 1 minute</p>
    </div>
  </div>
</template>

<script>
/* falta label no tempo */
import { defineComponent } from "vue";

export default defineComponent({
  props: {},
  emits: ["minutesSelected"],
  data() {
    return {
      minutes: 32,
      slider: "",
    };
  },
  methods: {
    updateMinutes() {
      this.$emit("minutesSelected", this.minutes);
      console.log(this.minutes);
    },
  },
});
</script> 

<style scoped>
.slider {
  -webkit-appearance: none;
  width: 80%;
  height: 0.8rem;
  border-radius: 2rem;  
  background: rgb(251, 207, 232);
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  margin-top: 1rem;
}
.slider:hover{
  opacity: 1;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 100%; 
  border:none;
  background: rgb(236, 72, 153);
  cursor: pointer;
}
.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius:100%;
  border:none;
  background: rgb(236, 72, 153);
  cursor: pointer;
}

</style>
