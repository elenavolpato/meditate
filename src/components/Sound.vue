<template>
  <div class="grid grid-col-1 w-full sm:p-2 py-6">
    <p>Select a bell sound</p>
    <div class="grid grid-col-1 mx-auto">
      <button
        class="z-20 text-md w-56 text-center font-semibold rounded-3xl border border-gray-50 border-opacity-25 shadow-lg text-white bg-white bg-opacity-25 active:bg-opacity-20 py-3 sm:py-2 px-0 mt-5 sm:mt-3 active:bg-opacity-80 active:text-gray-600"
        :class="{ 'bg-opacity-80 text-gray-600': selectedBell === id }"
        v-for="(bell, id) in bells"
        :key="id"
      >
        <div class="select-none">
          <audio
            :id="`bell-${id}`"
            preload="auto"
          >
            <source
              :src="`${publicPath}/bell-${id}.wav`"
              type="audio/wav"
            />
            <source
              :src="`${publicPath}/bell-${id}.mp3`"
              type="audio/mp3"
            />
            Your browser does not support the audio element.
          </audio>
          <div @click="playBell(id)">
            {{ bell.name }}
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    msg: String,
    bells: Array,
  },
  emits: ["allLoaded"],
  data() {
    return {
      bellAudio: null,
      soundsLoaded: 0,
      publicPath: import.meta.env.BASE_URL,
    }
  },
  computed: {
    selectedBell: {
      get() {
        return this.$store.state.selectedBell
      },
      set(selectedBell) {
        this.$store.commit("setBell", selectedBell)
      },
    },
  },
  methods: {
    playBell(clickedBellNumber) {
      if (this.bellAudio !== null) {
        this.bellAudio.pause()
        this.bellAudio.currentTime = 0
      }
      this.bellAudio = document.getElementById(`bell-${clickedBellNumber}`)
      this.bellAudio.play()
      this.selectedBell = clickedBellNumber
    },
    selectedButton(x) {
      x = this.bellAudio
      if (x !== null) {
        return x
      }
    },
    checkLoad() {
      for (let bellNumber in [0, 1, 2]) {
        const audio = document.getElementById(`bell-${bellNumber}`)
        audio.addEventListener("loadeddata", () => {
          if (audio.readyState >= 2) {
            this.soundsLoaded++
            if (this.soundsLoaded === 3) {
              this.$emit("allLoaded")
            }
          }
        })
      }
    },
  },
  mounted() {
    this.checkLoad()
  },
})
</script>

<style></style>
