<template>
  <Header msg="Meditate now or never" />
  <Sound :bells="bells"/>
  <Time :range="range" />
  <Interval :numberOfBells="numberOfBells" />
  <Footer msg="by elenavolpato.me" :icons="icons" />
</template>

<script>
import Header from './components/Header.vue'
import Sound from './components/Sound.vue'
import Time from './components/Time.vue'
import Footer from './components/Footer.vue'
import Interval from './components/Interval.vue'
import { defineComponent } from 'vue'

export default defineComponent ({
  components: {
    Header,
    Sound,
    Time,
    Interval,
    Footer,
  },
  
  data() {
    return {
      icons: ['🦆','🦆','🦆'],
      bells: [
        { name: "Bright bell", id: 0 },
        { name: "Middle bell", id: 1 }, 
        { name: "Low Bell", id: 2 }
      ],
      numberOfBells: [ 0, 1, 2, 3, 4, 5],

    }
  },
  
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  border: solid 1px darkgray;
  max-width: 500px;
  margin: 2rem auto;
}


</style>