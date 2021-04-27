<template>
  <div class="h-screen grid">
    <div class="container max-w-lg mx-auto text-center content-center max-h-full">
      <Header msg="meditation timer" />
      <div class="rounded-2xl border-2 border-gray-50 border-opacity-25 max-w-full my-auto sm:mx-2 pt-0 p-4 bg-gray-200 bg-opacity-50 shadow overflow-hidden" id="home">
        <div class="grid grid-cols-1 text-xl font-semibold leading-5 text-center text-gray-700">
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
          <div class="px-6 pb-1.5 pt-6 font-bold text-white leading-6">
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
            <button class="font-bold text-2xl rounded-full shadow-lg text-gray-600 bg-gray-100 px-10 py-3 mt-5" @click="goToMeditation">
              Start
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>  
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

