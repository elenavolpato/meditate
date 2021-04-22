<template>
  <div
    class="text-xl leading-5 text-center pt-6 pb-6 font-thin text-gray-600"
  >
    <p>Select a bell sound</p>
    <div class="grid grid-cols-3 md:flex-row gap-3 pt-3 pb-3">
      <button
        class="text-base font-medium rounded-md bg-purple-400 hover:bg-purple-500 active:bg-purple-500 focus:bg-purple-500 text-white pb-2 pt-3 px-3 mt-2"
        v-for="(bell, id) in bells"
        :key="id"
      >
        <div class="select-none">
          <audio :id="`bell-${id}`">
            <source :src="`/bell-${id}.wav`" type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
          <div id="bells" @click="playBell(id)">
            {{ bell.name }}
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: String,
    bells: Array,
  },
  emits: ["bellSelected"],
  data() {
    return {
      selectedBellAudio: null,
    };
  },
  methods: {
    playBell(selectedBellId) {
      if (this.selectedBellAudio !== null) {
        this.selectedBellAudio.pause();
        this.selectedBellAudio.currentTime = 0;
      }
      this.selectedBellAudio = document.getElementById(`bell-${selectedBellId}`);
      this.selectedBellAudio.play();
      this.$emit("bellSelected", selectedBellId);
    },
    selectedButton(x) {
      x = this.selectedBellAudio;
      if (x !== null) {
        return x;
      }
    },
  },
});
</script> 

