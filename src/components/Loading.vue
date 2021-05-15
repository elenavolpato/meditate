<template>
    <div class="loader border-t-8 border-2 border-white rounded-full border-opacity-50 w-24 h-24"></div>
</template>

<script>

</script> 

<style scoped>
.loader {
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

</style>
