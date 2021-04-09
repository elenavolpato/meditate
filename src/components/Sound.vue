<template>
   <h3>{{ msg }}</h3>
  <div class="bellButtons">
    <p>Select a bell sound</p>
    <button class="bells"      
      v-for="(bell, id) in bells" 
      :key="id" 
      v-on:click="play(id)"> 
      {{ bell.name }} 
    </button>
  </div>
    <VueSlideBar v-model="value"/>
  <div>
 
  </div>  

</template>

<script>
import { defineComponent } from "vue";
import VueSlideBar from vue-slide-bar

export default defineComponent({
  components: {
    VueSlideBar
  },
  props: {
    msg: String,
    bells: Array,
  },
  methods: {
    play(sound) {
      console.log(this.bells[sound].name);
    },
  },
});
</script> 

<style scoped>
</style>