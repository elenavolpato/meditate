<template>
  <div
    class="text-xl lowercase leading-5 text-center pt-6 pb-6 font-thin text-gray-600"
  >
    <p>Select a bell sound</p>
    <div class="grid grid-cols-3 gap-3 pt-3 pb-3">
      <div
        class="text-sm font-medium rounded-md bg-gradient-to-r from-purple-400 to-pink-500 text-white p-2 mt-2"
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
      </div>
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
      this.selectedBellAudio = document.getElementById(
        `bell-${selectedBellId}`
      );
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

