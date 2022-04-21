import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//This script imports stuff and makes available throughout the App

import jo_n_fa from './starting_data/facts_n_jokes.js'

let data = {
  jokes_n_facts: jo_n_fa,
  favorites: []
}

new Vue({
  router,
  data, //Make the data available everywhere in the app
  render: h => h(App)
}).$mount('#app')
