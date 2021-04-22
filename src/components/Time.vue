<template>
  
    <div class="text-xl leading-5 text-center pt-6 pb-6 font-thin text-gray-600">
      <label for="time">How long would you like to meditate?</label>
      <div class="text-sm pt-1">
        <input
          @change="updateMinutes"
          type="range"
          v-model="minutes"
          min="3"
          max="60"
          class="slider"
          id="time"
        />
        <p id="selectedMinutes">{{ minutes }} minutes</p>
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

