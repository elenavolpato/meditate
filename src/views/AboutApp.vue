<template>
  <Suspense>
    <template #default>
        <div class="z-10">
            <div class="container max-w-lg sm:max-h-screen mt-10 sm:mt-5 text-center">
                <div class="rounded-3xl border-2 border-gray-50 border-opacity-25 max-w-full my-auto sm:mx-2 sm:my-0 pt-0 p-4 sm:p-1 bg-gray-400 bg-opacity-40 shadow m-5">
                    <div class="mx-3 my-5 text-xl sm:text-base font-medium text-white text-left">
                        <p class="mt-3"> This <strong>meditation timer</strong> is a free open source app with customizable features beyond the time duration of your meditation session: there are three options for the Tibetan Bell sound and there is also the option to have reminders sounds along your meditation. In the end, by default, three bells are played.</p>
                        <p class="mt-4">Some features are still a work in progress, such as: saving all the time you meditated and a gamification for milestones in your total time meditated.  </p>  
                        <p class="mt-4">This app was built by Elena Volpato. Check out <a class="underline" href="https://www.elenavolpato.me/"> my page</a> for more informayion about my work. I write about my learning process and my projects.</p>
                        <p class="mt-4">If you have any ideas to share or found any bugs, write to me <strong>  talkto@elenavolpato.me</strong> or you can report an issue on gitlab page <a class="underline" href="https://gitlab.com/elena_volpato/meditate/-/issues/new">here</a> (You'll need an account on gitlab to do so).</p>
                        <p class="mt-4">Background animation is<a class="underline" href="https://desandro.com/"> by Dave DeSandro</a>.</p>
                    </div>
                    <div class="my-5">
                        <router-link to="/">
                            <button class="text-md w-24 h-10 text-center font-semibold rounded-3xl border border-gray-50 border-opacity-25 shadow-lg text-white bg-white bg-opacity-10 mt-3">
                                Back
                            </button>
                        </router-link>
                    </div>
                </div>
            <Footer />
            </div>
        </div>
    </template> 
    <template #fallback>
        <Loading />
    </template>
  </Suspense>
</template>

<script>
import { defineComponent } from 'vue'
import Footer from "../components/Footer.vue";

export default defineComponent({
    components: {
        Footer,        
    },
   
})
</script>



<style>

</style>