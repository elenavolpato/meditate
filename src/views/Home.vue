<template>
  <div class="h-screen grid">
    <div class="grid grid-cols-1 align-middle">
      <Header msg="meditation timer" />
      <div class="container rounded-xl mx-auto my-auto pt-0 p-4 bg-white bg-opacity-85 shadow-md max-w-md overflow-hidden" id="home">
        <div class="grid grid-cols-1 divide-dashed divide-y divide-purple-300 flex-shrink-0">
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
          <div class="text-xl leading-7 px-6 pb-1.5 text-center pt-6 font-thin text-gray-600">
            <p v-if="selectedInterval !== 1">
              Meditate with
              {{ bells[selectedBell].name }} bell for {{ minutes }} minutes with
              {{ selectedInterval }} reminders.
            </p>
            <p v-else>
              Meditate with
              {{ bells[selectedBell].name }} bell for {{ minutes }} minutes with
              1 reminder.
            </p>
            <button class="text-xl font-semibold rounded-md bg-purple-400 focus:bg-purple-500 hover:bg-purple-500 text-white px-16 pt-3 pb-2 mt-4" @click="goToMeditation">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Sound from "../components/Sound.vue";
import Time from "../components/Time.vue";
import Footer from "../components/Footer.vue";
import Interval from "../components/Interval.vue";
import { defineComponent } from "vue";

/* make it save the state locally for future meditations 
to be added to a page  of total time meditated - VUEX. also, 
think about a gamification feature such as the one in 
atom app. 
BY SAVING LOCALLY, PUT A WARNING SUCH AS "if you uninstall 
the app, your data will be lost."
*/

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
      numberOfBells: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
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
      this.selectedInterval = event;
    },
  },
});
</script>

<style>
</style>

