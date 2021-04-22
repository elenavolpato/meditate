<template>
  <div class="text-xl leading-5 text-center pt-6 pb-6 font-thin text-gray-600">
    <div class="px-6 w-full">
      <label for="time">How long would you like to meditate?</label>
      <input
        @change="updateMinutes"
        type="range"
        v-model="minutes"
        min="3"
        max="60"
        id="time"
        class="appearance-none w-60 md:max-w-full h-3 rounded-full mt-4 mb-2 bg-pink-200"
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

<style scoped>


</style>
