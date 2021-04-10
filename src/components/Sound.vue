<template>
  <h3>{{ msg }}</h3>
  <div class="bellButtons">
    <p>Select a bell sound</p>
    <div 
      v-for="(bell, id) in bells"
      :key="id"> 
      <audio :id="`bell-${id}`">
        <source :src="`/bell-${id}.wav`" type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
      <button
        type="button"
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
  data () {
    return {
      selectedBell: null,
    }
  },
  methods: {
    playBell(sound) {
      if (this.selectedBell !== null) {
        this.selectedBell.pause();
      }
      this.selectedBell = document.getElementById(`bell-${sound}`);
      this.selectedBell.play(); 
      console.log(this.selectedBell);
     
    }
  },
});

//ver como salvar estado do selectedbell. ou vueX ou evento aqui e um listener no app.vue
</script> 

<style scoped>

.bellButtons {
  margin: 0 auto;
  font-size: 1.3rem;
}

button {
  margin: 0.25rem auto;
  width: 15rem;
  border: none;
  background-color: plum;
  color: rgb(88, 2, 88);
  padding: 1rem;
  display: flex;
  justify-content: center;
  
}
button:is(:focus) {
  background-color: purple;
  color: rgb(255, 187, 255);
}

</style>