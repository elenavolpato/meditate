<template>
  <div
    class="leading-5 py-6 sm:py-3 relative"
  >
    <label for="number-bells-select" class="mr-4">Reminder bells?</label>
    <div class="relative inline-flex">
      <svg
        class="w-2 h-2 absolute top-0 right-1 align-middle m-3 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 412 232"
      >
        <path
          d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
          fill="#648299"
          fill-rule="nonzero"
        />
      </svg>
      <select
        id="number-bells-select"
        class="align-center border text-middle rounded-full text-gray-600 h-8 pl-2 pr-6 bg-white hover:border-gray-400 appearance-none"
        @change="updateIntervals"
        v-model="selectedNumberofBells"
      >
        <option
          :value="numberOfBell"
          v-for="(numberOfBell, index) in numberOfBells"
          :key="index"
        >
          {{ numberOfBell }}
        </option>
      </select>
    </div>
    <div id="what-is" class="absolute top-6 right-2 w-8 h-8">
      <div v-if="!helpText" @click="mouseEnter"> 
        <img src='/noun_Question_1955781.svg' alt='question icon'/>
      </div>
      <div v-else @click="mouseEnter">
        <img src='/noun_wrong_1890786.svg' alt='close icon'/> 
      </div>
    </div>
    <transition enter-active-class="animate-fade-in-down" leave-active-class="animate-fade-out-up">
    <div 
      v-show="helpText"
      class="text-sm text-right pt-3 ml-32 mr-5 sm:ml-5"
    >
      Reminder bells are played along your meditation to make you come back to
      your breath. You can choose up to 10 reminders.
    </div>
    </transition>
  </div>
</template>



<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    numberOfBells: Array,
  },

  emits: ["selectedInterval"],

  data() {
    return {
      selectedNumberofBells: 0,
      helpText: false,
    };
  },

  methods: {
    updateIntervals() {
      this.$emit("selectedInterval", this.selectedNumberofBells);
    },
    mouseEnter() {
      this.helpText = !this.helpText;
    },
  },
});
</script> 


<style>

</style>