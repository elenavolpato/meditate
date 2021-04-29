<template>
  <div 
    class="z-10 absolute inset-0 h-screen overflow-hidden "
    id="app">
    <canvas width="2" height="2"></canvas>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from "vue";

//background animation functions 
const Pixel = function(x, y) {
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

export default defineComponent({
  name: "App",
  data(){
    return {
      //background animation data
      canvas: undefined,
      ctx: undefined,
      pixels: [
        new Pixel(0, 0),
        new Pixel(1, 0),
        new Pixel(0, 1),
        new Pixel(1, 1),
      ],
    }
  },
  mounted() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.animate();
  },

  methods: {
    animate() {
      this.pixels.forEach((pixel) => {
        pixel.update();
        pixel.render(this.ctx);
      });
      window.requestAnimationFrame(this.animate);
    },
  }
});
</script>

<style>

canvas {
  width: 100%;
  height: 100%;
  transform: scale(2);
  z-index:-1;
  position: absolute;
} 


</style>