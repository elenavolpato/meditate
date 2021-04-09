<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <Header msg="elenavolpato.me" />
  <Sound msg="fuck bolsonaro" :bells="bells"/>
  <Time />
  <Footer msg="by elenavolpato.me" :icons="icons" />
</template>

<script>
import Header from './components/Header.vue'
import Sound from './components/Sound.vue'
import Time from './components/Time.vue'
import Footer from './components/Footer.vue'
import { defineComponent } from 'vue'

export default defineComponent ({
  components: {
    Header,
    Sound,
    Time,
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
    }
  },
  
})

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
}
</style>