<template>
  <h3>{{ msg }}</h3>
  <div class="bellButtons">
    <p>Select a bell sound</p>
    <div 
      v-for="(bell, id) in bells"
      :key="id"> 
      <audio :id="`bell-${id}`">
        <source :src="`/bells/bell-${id}.wav`" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
      <button
        type="button"
        class="bells"
        @click="playBell(id)">
        {{ bell.name }}
      </button>  
    </div>
      
    
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: String,
    bells: Array,
  },
  methods: {
    playBell(sound) {
      var playing = document.getElementById(`bell-${sound}`);
      playing.play();
      console.log(this.bells[sound]);
    },
  },
});
</script> 

<style scoped>
</style>