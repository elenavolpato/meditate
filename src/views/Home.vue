<template>
  <div class="grid">
    <div class="container max-w-lg mx-auto text-center content-center max-h-screen">
      
      <Header msg="meditation timer" />
      <AboutButton /> 
      <div class="rounded-2xl border-2 border-gray-50 border-opacity-25 max-w-full my-auto sm:mx-2 sm:my-0 pt-0 p-4 sm:p-1 bg-gray-300 bg-opacity-40 shadow" id="home">
        <div class="grid grid-cols-1 text-xl sm:text-lg font-semibold leading-5 text-center text-gray-700">
          <Time />
          <div>
            <Sound :bells="bells" />
          </div>
          <div>
            <Interval :numberOfBells="numberOfBells"/>
          </div>
          <div class="px-6 pb-1.5 pt-6 sm:pt-1.5 font-bold text-white leading-6">
            <p>
              Meditate with
              {{ bells[selectedBell].name }} bell for {{ minutes }} minute{{ (minutes > 1)?"s":"" }} with
              {{ reminders }} reminder{{ (reminders !== 1)?"s":"" }}.
            </p>
            <button class="font-bold sm:font-semibold text-2xl sm:text-xl rounded-full shadow-lg bg-gray-100 bg-opacity-10 border-gray-50 border border-opacity-40 px-10 sm:px-8 py-3 sm:py-2 my-5 sm:my-3 focus:bg-opacity-60  focus:text-gray-600" @click="goToMeditation">
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
import AboutButton from "../components/AboutButton.vue";
import { mapState } from 'vuex';
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
    AboutButton,
  },

  data() {
    return {
      bells: [
        { name: "bright sound", id: 0 },
        { name: "deep sound", id: 1 },
        { name: "solemn sound", id: 2 },
      ],
      numberOfBells: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },

  computed: mapState([
    'minutes',
    'selectedBell',
    'reminders',
  ]),

  beforeMount () {
    console.log('wakeLock' in navigator)
  },

  methods: {
    goToMeditation() {
      this.$router.push({
        name: "meditate",
        params: {
          time: this.minutes,
          bell: this.selectedBell,
          interval: this.reminders,
        },
      });
    },
  },
});
</script>

<style>
</style>

