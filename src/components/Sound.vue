<template>
  <div class="grid grid-col-1 w-full py-6">
    <p>Select a bell sound</p>
    <div class="grid grid-col-1 mx-auto">
      <button
        class="text-md w-56 text-center font-semibold rounded-3xl border border-gray-50 border-opacity-25 shadow-lg text-white bg-white bg-opacity-10 active:bg-opacity-20 hover:bg-opacity-20 py-3 px-0 mt-5"
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

