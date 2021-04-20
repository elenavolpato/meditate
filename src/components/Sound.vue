<template>
  <div class="bellButtons">
    <p>Select a bell sound</p>
    <div 
      v-for="(bell, id) in bells"
      :key="id"> 
      <audio :id="`bell-${id}`">
        <source :src="`/bell-${id}.wav`" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
      <button id="bells"
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
  emits: ['bellSelected'],
  data () {
    return {
      selectedBellAudio: null,
    }
  },
  methods: {
    playBell(selectedBellId) {
      if (this.selectedBellAudio !== null) {
        this.selectedBellAudio.pause();
        this.selectedBellAudio.currentTime = 0;
      }
      this.selectedBellAudio = document.getElementById(`bell-${selectedBellId}`);
      this.selectedBellAudio.play(); 
      this.$emit('bellSelected', selectedBellId);
    },
    selectedButton(x) {
      x = this.selectedBellAudio;
      if (x !== null) {
        return x;
      }
        
      }
    }
  
});


</script> 

