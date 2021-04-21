<template>
  
  <div class="min-h-full">
    <div
      class="grid grid-cols-1 divide-dashed divide-y divide-blue-300 container rounded-xl mx-auto my-4 md:my-uto p-4 bg-white bg-opacity-85 shadow-md max-w-md overflow-hidden"
      id="home"
    >
      <div>
        <Header msg="meditation timer" />
      </div>
      <div class="grid grid-cols-1 divide-dashed divide-y divide-pink-300 flex-shrink-0">
        <Time @minutesSelected="updateMinutes" />
        <div>
          <Sound @bellSelected="updateBell" :bells="bells" />
        </div>
        <div>
          <Interval
            @selectedInterval="updateIntervals"
            :numberOfBells="numberOfBells"
          />
        </div>
        <div class="text-xl leading-7 mx-6 text-center pt-6 font-thin text-pink-500">
          <p id="features">
            Meditate with
            {{ bells[selectedBell].name }} for {{ minutes }} minutes with
            {{ selectedInterval }} intervals.
          </p>
          <button class="text-lg font-semibold rounded-md bg-gradient-to-r from-purple-400 to-pink-500 text-white px-6 pt-3 pb-2 mt-4" @click="goToMeditation()">Start</button>
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
        { name: "bright sound", id: 0 },
        { name: "deep sound", id: 1 },
        { name: "solemn sound", id: 2 },
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

<style>

button :is(:active,:focus) {
  background-image: linear-gradient(to right, rgb(96, 165, 250) , rgb(139,92,246));
}
</style>

