<template>
<div id="app">
  <router-view />
</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style scoped>



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 500px;
  margin: 2rem auto;
}


</style>
