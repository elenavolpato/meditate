<template>
  <footer >
    <div class="flex justify-center text-lg text-white font-semibold antialiased"> 
      {{ msg }} 
    </div>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent ({
  props: {
    msg: String,
    icons: Array 
  }
})

</script>

