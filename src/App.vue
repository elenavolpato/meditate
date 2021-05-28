<template>
  <div 
    v-if="loaded"
    class="z-10 flex items-center justify-center inset-0 h-screen"
    id="app">
    <canvas width="2" height="2"></canvas>
    <router-view />
  </div>
  <div v-else>
    <div class="loader border-t-8 border-2 border-white rounded-full border-opacity-50 w-24 h-24"></div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Loading from './components/Loading.vue'

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
  component: { Loading },
  name: "App",
  //background animation data
  data(){
    return {
      canvas: undefined,
      ctx: undefined,
      pixels: [
        new Pixel(0, 0),
        new Pixel(1, 0),
        new Pixel(0, 1),
        new Pixel(1, 1),
      ],
      loaded: false
    }
  },
  beforeCreate() {
    window.addEventListener('load', () => {
      this.loaded = true
      this.$nextTick(() => {
      this.canvas = document.querySelector("canvas");
      this.ctx = this.canvas.getContext("2d");
      this.animate();

      })
    })

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

body {
  margin: 0;
  width: 100%;
}

canvas {
  width: 100%;
  height: 100%;
  transform: scale(2);
  z-index:-1;
  display:block;
  position: fixed;  
  top:0;
  left: 0;
} 

.loader {
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>



