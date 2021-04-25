<template>
  <footer >
    <div class="justify-center text-white select-none mt-5 "> 
      <p><a class="text-xl font-semibold leading-5" href="https://www.elenavolpato.me/">app by elenavolpato.me </a></p>   
      <p><a class="text-base leading-5" href="https://codepen.io/desandro">bg animation by @desandro</a></p>   
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

