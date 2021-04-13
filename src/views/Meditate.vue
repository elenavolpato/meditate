<template>
<!-- 1 bell at the beginnning and 3 at the end-->
<!-- countdown timer -->
<!-- divide the total time subtracting one interval from the end and play bell -->

<div id="play-pause">
    <img src="/src/assets/pause-icon.png" alt="pause button" /> 
</div>
<!-- <canvas width="2" height="2"></canvas> -->


</template>

<script>

import { defineComponent } from "vue";

export default defineComponent({
    name: "meditate",
    props: [ "time", "bell", "interval" ],
    data() {
        return{
            totalTime: this.time,
            selectedBell: this.bell,
            totalIntervals: this.interval,
        }
    },
    mounted(){
        if ( this.selectedBell === undefined || this.totalTime === undefined|| this.totalIntervals === undefined) {
            this.totalTime = 20;
            this.selectedBell = 2;
            this.totalIntervals= 4;
        };
        console.log(this.totalTime);
        console.log(this.selectedBell);
        console.log(this.totalIntervals);
        
    },
    methods: {
        initialBell() {
            //play the bell at the beginning
            //play interval bell(s)
            //play ending bell
            
        }

    }
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
    align-items: center;
}


/* html, body {
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