import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  state () {
      return{
        minutes: 30,
        selectedBell: 1,
        reminders: 0,
      } 
  },
  mutations: {
    setMinutes (state, minutes) {
      state.minutes = minutes
    },
    setBell (state, selectedBell) {
      state.selectedBell = selectedBell
    },
    setReminders (state, reminders) {
      state.reminders = reminders
    },
  },
  plugins: [createPersistedState()],
})

export default store