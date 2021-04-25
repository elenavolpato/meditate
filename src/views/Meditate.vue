<template>
  <div class="z-10 grid text-center justify-center align-top h-screen"> 
    <canvas width="2" height="2"></canvas>
    <audio
      id="meditationSound"
      :src="`/bell-${selectedBell}.wav`"
      type="audio/wav"
      ref="audioPlayer"
    >
      Your browser does not support the audio element.
    </audio>
    <div class="with-glow grid-row text-7xl text-white font-bold">
      <div v-if="elapsed === undefined">{{ convertMinutes(totalTime) }}</div>
      <div v-else-if="!finished">{{ prettyTime }}</div>
      <div v-else class="text-3xl">
        <p class="mb-2">Congratulations!</p>
        <p>You meditated for {{ convertMinutes(totalTime) }}</p>
      </div>
    </div>
    <div class="with-glow" v-show="!finished">
      <transition enter-active-class="animate-fade-in" leave-active-class="animate-fade-out" mode="out-in">
        <button key="pause" v-if="isPlayed" @click="pause" class="w-16 h-16 ">
          <img src="/noun_Stop_559095.svg" alt="pause button" />
        </button>
        <button key="play" v-else @click="play" >
          <img src="/noun_play_559093.svg" alt="play button" class="w-16 h-16" />
        </button>
      </transition>
    </div>
    <div class="relative">
      <router-link  to="/">
        <button @click="backHome" class="backButton font-bold text-2xl rounded-full shadow-lg px-8 py-2 "> 
          Back 
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
const numEndBells = 3;
const intervalEndBells = 3500;

import { defineComponent } from "vue";

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
      
    };
  },
  mounted() {
    if (
      this.selectedBell === undefined ||
      this.totalTime === undefined ||
      this.selectedlInterval === undefined
    ) {
      this.totalTime = 2 * 60000;
      this.selectedBell = 2;
      
    }
    this.intervalTime = this.totalTime / this.selectedlInterval;
    this.sound = document.getElementById("meditationSound");
    console.log(this.selectedlInterval);
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
      window.requestAnimationFrame(this.countdown);
      this.isPlayed = true;
    },
    setTimeout(timestamp) {
      this.pausedTimestamp = timestamp;
      window.cancelAnimationFrame(this.countdown);

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
          window.requestAnimationFrame(this.countdown);
        } else {
          this.startTime = -1;
          this.finished = true;
          window.requestAnimationFrame(this.endMeditation);
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
        this.sound.currentTime = 0;
        this.sound.play();
      }
      this.elapsed = timestamp - this.startTime;

      if (this.elapsed <= numEndBells * intervalEndBells + 1) {
        if (this.elapsed >= this.secs) {
          this.sound.currentTime = 0;
          this.sound.play();
          this.secs = this.secs + intervalEndBells;
        }
        window.requestAnimationFrame(this.endMeditation);
      }
    },
    backHome() {
      window.cancelAnimationFrame(this.countdown);
    }
  },
  
});
</script>

<style scoped>

.backButton {
  position: relative;
  border: none;
  background: none;
  outline: none;
  color: black;
  mix-blend-mode: screen;
}

.backButton::before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: white;
  border-radius: 2rem;
  content: '';
  mix-blend-mode: color-burn;
}
.with-glow{
  text-shadow: 1px 1px 5px lightgray;
}

</style>

