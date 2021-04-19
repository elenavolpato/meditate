<!-- 1 bell at the beginnning and 3 at the end-->
    <!-- countdown timer -->
    <!-- divide the total time subtracting one interval from the end and play bell -->
    <!-- congig button returns do the main page -->
    <!-- <canvas width="2" height="2"></canvas> -->

    <!-- change this to a circle or a timer. ref meditate typescript -->


<template>
  <div class="flex max-w-sm mx-auto">
    <audio
      id="meditationSound"
      :src="`/bell-${selectedBell}.wav`"
      type="audio/wav"
      ref="audioPlayer"
    >
      Your browser does not support the audio element.
    </audio>
    <div class="pt-6 space-y-4" v-show="elapsed != undefined">
      <p>{{ prettyTime }}</p>
    </div>
    <div class="text- font-medium text-black">
      <button @click="play">play</button>
      <button @click="pause">pause</button>
      <button @click="stop">stop</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "meditate",
  props: ["time", "bell", "interval"],
  data() {
    return {
      selectedBell: this.bell,
      sound: undefined,

      totalIntervals: this.interval,

      totalTime: this.time,
      startTime: undefined,
      elapsed: undefined,
    };
  },
  mounted() {
    if (
      this.selectedBell === undefined ||
      this.totalTime === undefined ||
      this.totalIntervals === undefined
    ) {
      this.totalTime = 3 * 60000;
      this.selectedBell = 2;
      this.totalIntervals = 1;
    }
    console.log(this.totalTime);
    console.log(this.selectedBell);
    console.log(this.totalIntervals);
    console.log((this.totalTime/60000)/(this.totalIntervals +1));
    this.sound = document.getElementById("meditationSound");
    
    
  },

  computed: {
    prettyTime() {
      return ((this.totalTime - this.elapsed) / 1000).toFixed(0);
    },
    
  },

  methods: {
    //basic play, pause and stop functions

    play() {
      this.sound.play();
      window.requestAnimationFrame(this.countdown);
    },
    pause() {
      this.sound.pause();
    },
    stop() {
      this.sound.pause();
      this.sound.currentTime = 0;
      this.sound.play();
      console.log("paraparaparou");
    },

    countdown(timestamp) {
      if (this.startTime === undefined) {
        this.startTime = timestamp;
      }
      this.elapsed = timestamp - this.startTime;
      if (this.elapsed <= this.totalTime) {
        window.requestAnimationFrame(this.countdown);
      } else {
        this.stop();
      }
    },

    //play interval bell(s)
    //play ending bell
  },
});

//background colors animation - transform to vue
/* var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

function Pixel(x, y) {
  this.x = x;
  this.y = y;
  this.hue = Math.floor( Math.random() * 360 );
  var direction = Math.random() > 0.5 ? -1 : 1;
  this.velocity = ( Math.random() * 30 + 20 ) * 0.01 * direction;
}

Pixel.prototype.update = function() {
  this.hue += this.velocity;
};

Pixel.prototype.render = function( ctx ) {
  var hue = Math.round( this.hue );
  ctx.fillStyle = 'hsl(' + hue + ', 100%, 50% )';
  ctx.fillRect( this.x, this.y, 1, 1 );
}

var pixels = [
  new Pixel( 0, 0 ),
  new Pixel( 1, 0 ),
  new Pixel( 0, 1 ),
  new Pixel( 1, 1 ),
];

function animate() {
  pixels.forEach( function( pixel ) {
    pixel.update();
    pixel.render( ctx );
  });
  requestAnimationFrame( animate );
}

animate(); */
</script>

<style scoped>
body {
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
}
</style>