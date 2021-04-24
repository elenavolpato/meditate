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
    <div class="grid-row text-7xl text-white font-extrabold">
      <div v-if="elapsed === undefined">{{ convertMinutes(totalTime) }}</div>
      <div v-else-if="!finished">{{ prettyTime }}</div>
      <div v-else class="text-3xl">
        <p class="mb-2">Congratulations!</p>
        <p>You meditated for {{ convertMinutes(totalTime) }}</p>
      </div>
    </div>
    <div v-show="!finished">
      <button v-if="isPlayed" @click="pause" class="w-20 h-20">
        <img src="/noun_Stop_559095.svg" alt="pause button" />
      </button>
      <button v-else @click="play">
        <img src="/noun_play_559093.svg" alt="play button" class="w-20 h-20 transition-transform duration-500 ease-in-out " />
      </button>
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
      selectedlInterval: this.interval + 1,
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
      this.selectedlInterval = 2;
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
      window.requestAnimationFrame(this.countdown);
      this.isPlayed = true;
    },
    setTimeout(timestamp) {
      this.pausedTimestamp = timestamp;
      window.cancelAnimationFrame(this.countdown);
      console.log(this.pausedTimestamp);
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
            console.log("INTERVALOS");
          }
          window.requestAnimationFrame(this.countdown);
        } else {
          console.log("END BELLS");
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
  },
  
});
</script>

