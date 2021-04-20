<template>
<div class="m-0 bg-cover font-sans bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500" id="app">
  <router-view />
</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

