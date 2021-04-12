<template>
  <div id="interval">
    <input type="checkbox" v-model="checked" name="check-button" />
    Interval bells?
    <select v-bind:disabled="checked === false">
      <option v-for="(numberOfBell, index) in numberOfBells" :key="index">
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

  data() {
    return {
      checked: true,
    };
  },
});
</script> 

<style scoped>
#interval {
  margin-bottom: 2rem;
  padding: 0.8rem;
  font-size: 1.3rem;
}
</style>