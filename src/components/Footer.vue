<template>
  <footer >
    <div class="justify-center text-white select-none mt-5 sm:mt-2 "> 
      <p><a class="text-xl sm:text-lg font-semibold leading-5 sm:leading-3" href="https://www.elenavolpato.me/">app by elenavolpato.me </a></p>   
      <p><a class="text-base" href="https://codepen.io/desandro">bg animation by @desandro</a></p>   
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

