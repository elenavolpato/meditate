<template>
  <select id="interval" v-model="numberIntervals">
    <option style="color: darkgrey" value="" selected disabled>
      Would you like to have interval bells?
    </option>
    <option ><!-- vai pegar o número do tempo e colocar opções. legal deinir um mínimo -->
    </option>
  </select>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    numberIntervals: Number,
  },

});
</script> 

<style scoped>

#interval {
  margin-bottom: 2rem;
  padding: 0.8rem;
}
</style>