<template>
  <footer >
    <div class="flex justify-center text-lg text-white font-semibold select-none"> 
      <a href="https://www.elenavolpato.me/"> by elenavolpato.me </a>      
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

