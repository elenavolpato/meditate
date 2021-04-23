    <!-- config button returns do the main page -->

    <!-- change this to a circle or a timer. ref meditate typescript -->


<template>
  <div class="grid text-center my-0 justify-center align-baseline h-screen">
    <audio
      id="meditationSound"
      :src="`/bell-${selectedBell}.wav`"
      type="audio/wav"
      ref="audioPlayer"
    >
      Your browser does not support the audio element.
    </audio>

    <div class="text-7xl text-white font-extrabold">
      <p v-if="!finished">{{ prettyTime }}</p>
      <p v-else> NAMASTE! </p>
   </div>
    <div>
      <button v-if="isPlayed" @click="pause">pause</button>
      <button v-else @click="play">play</button>
    </div>
    <!-- <canvas width="2" height="2"></canvas> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import {
  PlayIcon,
  PauseIcon,
  SettingsIcon,
  ChevronLeftIcon,
} from "vue-feather-icons";

const numEndBells = 3;
const intervalEndBells = 3500;

/* //configurations to background color animation
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var pixels = [
  new Pixel(0, 0),
  new Pixel(1, 0),
  new Pixel(0, 1),
  new Pixel(1, 1),
];
 */
export default defineComponent({
  component: {
    PlayIcon,
    PauseIcon,
    SettingsIcon,
    ChevronLeftIcon,
  },

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
      finished: false
    };
  },
  mounted() {
    if (
      this.selectedBell === undefined ||
      this.totalTime === undefined ||
      this.selectedlInterval === undefined
    ) {
      this.totalTime = 0.2 * 60000;
      this.selectedBell = 2;
      this.selectedlInterval = 2;
    }
    this.intervalTime = this.totalTime / this.selectedlInterval;
    console.log(this.totalTime);
    console.log(this.selectedBell);
    console.log(this.selectedlInterval);
    console.log(this.intervalTime);
    this.sound = document.getElementById("meditationSound");
  },

  computed: {
    prettyTime() {
      return ((this.totalTime - this.elapsed) / 1000).toFixed(0);
    },
  },

  methods: {
    //basic play and pause functions for animation and sound
    play() {
      this.sound.play();
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
          this.finished = true
          window.requestAnimationFrame(this.endMeditation);
        }
      }
      else if (this.startTime !== -1){
        this.totalElapsed = this.elapsed;
        this.startTime = -1;
      }

    },
    //plays bells in between
    playIntervalBell() {
      this.sound.pause();
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

/*//background colors animation - transform to vue

function Pixel(x, y) {
  this.x = x;
  this.y = y;
  this.hue = Math.floor(Math.random() * 360);
  var direction = Math.random() > 0.5 ? -1 : 1;
  this.velocity = (Math.random() * 30 + 20) * 0.01 * direction;
}

Pixel.prototype.update = function () {
  this.hue += this.velocity;
};

Pixel.prototype.render = function (ctx) {
  var hue = Math.round(this.hue);
  ctx.fillStyle = "hsl(" + hue + ", 100%, 50% )";
  ctx.fillRect(this.x, this.y, 1, 1);
};

var pixels = [
  new Pixel(0, 0),
  new Pixel(1, 0),
  new Pixel(0, 1),
  new Pixel(1, 1),
];

function animate() {
  pixels.forEach(function (pixel) {
    pixel.update();
    pixel.render(ctx);
  });
  requestAnimationFrame(animate);
}

animate();*/
</script>

<style scoped>
/* body {
  margin: 0 auto;
}

html,
body {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
  transform: scale(2);
} */
</style>