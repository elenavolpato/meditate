<template>
  <div id="interval">
    <input type="checkbox" v-model="checked" name="check-button" />
    Interval bells?
    <select 
      @change="updateIntervals"
      v-model="selectedNumberofBells" 
      :disabled="checked === false">
        <option :value="numberOfBell" 
          v-for="(numberOfBell, index) in numberOfBells" 
          :key="index">
          {{ numberOfBell }}
        </option>
    </select>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    numberOfBells: Array,
  },

  emits: ['selectedInterval'],

  data() {
    return {
      checked: true,
      selectedNumberofBells: 0,
    };
  },

  methods: {
    updateIntervals() {
      this.$emit('selectedInterval', this.selectedNumberofBells);
    }
  }
});
</script> 

<style scoped>
#interval {
  margin-bottom: 2rem;
  padding: 0.8rem;
  font-size: 1.3rem;
}
</style>