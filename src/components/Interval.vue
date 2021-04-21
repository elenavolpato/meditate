<template>
  <div
    class="text-xl lowercase leading-5 text-center pt-6 pb-6 font-thin text-gray-600"
  >
    
    <div
      class="relative inline-block w-10 mr-4 align-middle select-none transition duration-200 ease-in"
    >
      
      <input
        type="checkbox"
        v-model="checked"
        name="toggle"
        id="toggle"
        class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
      />
      <label
        for="toggle"
        class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
      ></label>
      
    </div>
    <label for="toggle" class="mr-4">Interval bells?</label>
    <div class="relative inline-flex">
      
      <svg
        class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 412 232"
      >
        <path
          d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
          fill="#648299"
          
          fill-rule="nonzero"
        />
      </svg>
      <select id="select" class="border border-gray-200 rounded-lg text-gray-600 h-10 pl-3 pr-6 bg-white hover:border-gray-400 appearance-none"
        @change="updateIntervals"
        v-model="selectedNumberofBells"
        :disabled="checked === false"
      >
        <option
          :value="numberOfBell"
          v-for="(numberOfBell, index) in numberOfBells"
          :key="index"
        >
          {{ numberOfBell }}
        </option>
      </select>
      <div id="what-is" class="relative top-0 left-0">
        <p class="text-lg text-white bg-pink-500 "> ? </p>
      </div>
    </div>
  </div>
  <!-- help box explaining what is interval bells -->
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
      checked: true,
      selectedNumberofBells: 0,
    };
  },

  methods: {
    updateIntervals() {
      this.$emit("selectedInterval", this.selectedNumberofBells);
    },
  },
});
</script> 


<style>
.toggle-checkbox:checked {
  right: 0;
  border-color: rgb(96, 165, 250);
}

.toggle-checkbox:checked + .toggle-label {
  background-color: rgb(96, 165, 250);
}

#select:disabled {
  background-color: rgb(206,213,219)
}
</style>