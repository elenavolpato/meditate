<template>
  <footer >
    <div class="themefooter"> {{ msg }} </div>
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

