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

//ver como salvar estado do selectedbell. ou vueX ou evento aqui e um listener no app.vue
</script> 

<style scoped>

.bellButtons {
  font-size: 1.3rem;
  width: 100%; 
  padding: 0 1rem 1rem 1rem; 
}

button {
  font-size: 1.1rem;
  border: none;
  background-color: plum;
  color: rgb(88, 2, 88);
  float: left;
  margin: 0 0.2rem;
  width: 8rem;
  padding: 0.5rem;
}

button:is(:focus) {
  background-color: purple;
  color: rgb(255, 187, 255);
}

button:disabled {
  background-color: rgb(212, 196, 212);
  color: rgb(93, 75, 93);
}


</style>