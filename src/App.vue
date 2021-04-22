<template>
<div class="grid">
  <div 
    class="absolute inset-0 h-full font-sans bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500" 
    id="app">
    <router-view />
  </div>
</div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

