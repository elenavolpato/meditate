<template>
  <Header msg="Meditate now or never" />
  <Sound @bellSelected="updateBell" :bells="bells" />
  <Time @minutesSelected="updateMinutes" />
  <Interval @selectedInterval="updateIntervals" :numberOfBells="numberOfBells" />

  <div class="meditate">
    <p id="features"> 
      Meditate with 
      {{ bells[selectedBell].name }} for 
      {{ minutes }} minutes with 
      {{ selectedInterval }} intervals. 
    </p>
    <button type="submit" @onclick="goToMeditation()">
      Go to your meditation
    </button>
  </div>

  <Footer msg="by elenavolpato.me" :icons="icons" />
</template>

<script>
import Header from "../components/Header.vue";
import Sound from "../components/Sound.vue";
import Time from "../components/Time.vue";
import Footer from "../components/Footer.vue";
import Interval from "../components/Interval.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Header,
    Sound,
    Time,
    Interval,
    Footer,
  },

  data() {
    return {
      icons: ["🦆", "🦆", "🦆"],
      bells: [
        { name: "Bright bell", id: 0 },
        { name: "Middle bell", id: 1 },
        { name: "Low Bell", id: 2 },
      ],
      selectedBell: 0,
      numberOfBells: [0, 1, 2, 3, 4, 5],
      minutes: 32,
      selectedInterval: 0,
    };
  },

  methods: {
    goToMeditation() {
      
    },
    updateBell(event) {
      this.selectedBell = event;
      console.log(this.bells[event].name);
    },
    updateMinutes(event) {
      this.minutes = event;
    },
    updateIntervals(event) {
      console.log('eee')
      this.selectedInterval = event;
      //console.log(event);
    }
  },
});
</script>

<style>


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

button:disabled {
  background-color: rgb(212, 196, 212);
  color: rgb(93, 75, 93);
}

.meditate {
  font-size: 1.5rem;
}
</style>