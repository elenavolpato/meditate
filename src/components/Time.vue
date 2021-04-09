<template>
  <div>
    <VueSlideBar v-model="value"/>
  </div>  
</template>

<script>
import { defineComponent } from "vue";
import VueSlideBar from 'vue-slide-bar'

export default defineComponent({
  component :{
    VueSlideBar
  },
  data() {
    return {
      value: 50
    }
  }
});
</script> 

<style scoped>
</style>