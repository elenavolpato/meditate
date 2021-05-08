<template>
  <div class="z-10 text-center">
    <!-- <video controls="z-0 controls" autoplay="autoplay" loop="loop" class="absolute ">
      <source src="/meditate.mp4" type="video/mp4">
    </video> -->
    <audio
      id="meditationSound"
      :src="`/bell-${selectedBell}.wav`"
      type="audio/wav"
      ref="audioPlayer"
    >
      Your browser does not support the audio element.
    </audio>
    <div class="relative content-center text-7xl text-white font-bold mb-36">
      <div v-if="elapsed === undefined">{{ convertMinutes(totalTime) }}</div>
      <div v-else-if="!finished">{{ prettyTime }}</div>
      <div v-else class="text-3xl animate-fade-in">
        <div>
          <p class="mb-2 animate-fade-in">Congratulations!</p>
          <p>
            You meditated for {{ time }} minute{{ time > 1 ? "s" : "" }}
            today.
          </p>
        </div>
      </div>
    </div>
    <div class="absolute bottom-10 inset-x-0">
      <div class="relative bottom-64 sm:bottom-20 sm:mb-5" v-show="!finished">
        <transition
          enter-active-class="animate-fade-in"
          leave-active-class="animate-fade-out"
          mode="out-in"
        >
          <button
            key="pause"
            preload="auto"
            v-if="isPlayed"
            @click="pause">
            <img src="/noun_Stop_559095.svg" alt="pause" class="w-14" />
          </button>
          <button 
            key="play" 
            preload="auto" 
            v-else 
            @click="play">
            <img src="/noun_play_559093.svg" alt="play" class="w-14" />
            
          </button>
        </transition>
      </div>
      <button
        @click="backHome"
        class="text-xl px-6 py-2 text-center font-semibold rounded-3xl shadow-lg bg-gray-100 bg-opacity-10 border-gray-50 border border-opacity-40 text-white 5 mt-3"
      >
        Back
      </button>
    </div>
  </div>
</template>

<script>
const numEndBells = 3;
const intervalEndBells = 3500;

import { defineComponent } from "vue";
import NoSleep from 'nosleep.js';

export default defineComponent({
  name: "meditate",
  props: ["time", "bell", "interval"],
  data() {
    return {
      //sound data
      selectedBell: this.bell,
      sound: undefined,
      //interval data
      selectedlInterval: Number(this.interval) + 1,
      currentInterval: 1,
      intervalTime: 0,
      //timer data
      totalTime: this.time * 60000,
      startTime: -1,
      elapsed: undefined,
      totalElapsed: 0,
      secs: intervalEndBells,
      isPlayed: false,
      finished: false,
      countdownId: undefined,
      //screen wake lock
      noSleep: new NoSleep(),
    };
  },
  mounted() {
    if (
      this.selectedBell === undefined ||
      this.totalTime === undefined ||
      this.selectedlInterval === undefined
    ) {
      this.totalTime = 5 * 60000;
      this.selectedBell = 1;
    }
    this.intervalTime = this.totalTime / this.selectedlInterval;
    this.sound = document.getElementById("meditationSound");
  },

  computed: {
    prettyTime() {
      return this.convertMinutes((this.totalTime - this.elapsed).toFixed(0));
    },
  },

  methods: {
    //conver milliseconds do minutes and seconds
    convertMinutes(milliseconds) {
      let minutes = Math.floor(milliseconds / 60000);
      let seconds = ((milliseconds % 60000) / 1000).toFixed(0);
      if (seconds === "60") {
        minutes += 1;
        seconds = "00";
      }
      minutes = String(minutes).padStart(2, 0);
      seconds = seconds.padStart(2, 0);
      return `${minutes}:${seconds}`;
    },

    //basic play and pause functions (for timer and sound)
    play() {
      if (this.elapsed === undefined) {
        this.sound.play();
        
      }
      this.noSleep.enable();
      this.countdownId = window.requestAnimationFrame(this.countdown);
      this.isPlayed = true;
    },
    pause() {
      this.sound.pause();
      this.isPlayed = false;
    },

    //timer setup
    countdown(timestamp) {
      if (this.isPlayed) {
        if (this.startTime === -1) {
          this.startTime = timestamp;
        }
        this.elapsed = timestamp - this.startTime + this.totalElapsed;
        if (this.elapsed <= this.totalTime) {
          if (this.elapsed >= this.intervalTime * this.currentInterval) {
            this.playIntervalBell();
            this.currentInterval++;
          }
          this.countdownId = window.requestAnimationFrame(this.countdown);
        } else {
          this.startTime = -1;
          this.finished = true;
          this.countdownId = window.requestAnimationFrame(this.endMeditation);
        }
      } else if (this.startTime !== -1) {
        this.totalElapsed = this.elapsed;
        this.startTime = -1;
      }
    },
    //plays bells in between
    playIntervalBell() {
      this.sound.currentTime = 0;
      this.sound.play();
    },
    //bell plays 2 times at the end
    endMeditation(timestamp) {
      if (this.startTime == -1) {
        this.startTime = timestamp;
        this.sound.currentTime = 0.4;
        this.sound.play();
      }
      this.elapsed = timestamp - this.startTime;

      if (this.elapsed <= numEndBells * intervalEndBells + 1) {
        if (this.elapsed >= this.secs) {
          this.sound.currentTime = 0;
          this.sound.play();
          this.secs = this.secs + intervalEndBells;
        }
        this.countdownId = window.requestAnimationFrame(this.endMeditation);
      }
      this.noSleep.disable();
    },
    backHome() {
      window.cancelAnimationFrame(this.countdownId);
      this.noSleep.disable();
      this.$router.push({
        name: "Home",
        params: {},
      });
    },
  },
});
</script>



<style scoped>
</style>

