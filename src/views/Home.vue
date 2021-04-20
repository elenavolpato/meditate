<template>
  <div
    class="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl"
    id="home"
  >
    <div class="flex">
      <div class="md:flex-shrink-0">
        <Header msg="Meditate now or never" />
        <Time @minutesSelected="updateMinutes" />
        <Sound @bellSelected="updateBell" :bells="bells" />
        <Interval
          @selectedInterval="updateIntervals"
          :numberOfBells="numberOfBells"
        />
        <div class="meditate">
          <p id="features">
            Meditate with
            {{ bells[selectedBell].name }} for {{ minutes }} minutes with
            {{ selectedInterval }} intervals.
            <button @click="goToMeditation()">Start</button>
          </p>
        </div>
      </div>
    </div>
  </div>
  <Footer msg="by elenavolpato.me" />
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
        { name: "Bell 1", id: 0 },
        { name: "Bell 2", id: 1 },
        { name: "Bell 3", id: 2 },
      ],
      selectedBell: 0,
      numberOfBells: [0, 1, 2, 3, 4, 5],
      minutes: 32,
      selectedInterval: 0,
    };
  },

  methods: {
    goToMeditation() {
      this.$router.push({
        name: "meditate",
        params: {
          time: this.minutes,
          bell: this.selectedBell,
          interval: this.selectedInterval,
        },
      });
    },
    updateBell(event) {
      this.selectedBell = event;
      console.log(this.bells[event].name);
    },
    updateMinutes(event) {
      this.minutes = event;
    },
    updateIntervals(event) {
      console.log("eee");
      this.selectedInterval = event;
    },
  },
});
</script>

<style scoped>
#home {
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 2rem auto;
}

#features {
  font-size: 1rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  width: 50%;
  margin: 1rem auto;
  padding: 1.5rem;
  color: rgb(88, 2, 88);
}

button {
  font-size: 1.5rem;
  background-color: purple;
  padding: 1rem;
  color: white;
  border: none;
  margin-top: 1rem;
}

.meditate {
  font-size: 1.5rem;
}
</style>