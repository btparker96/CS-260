import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


let data = {
  currentID: 2,
  tickets: [{
    id: 1,
    problem: 'This app is not completely written yet.',
    name: 'Emma'
  }],
  getTickets() {
    return this.tickets;
  },
  addTicket(name, problem) {
    this.tickets.push({
      id: this.currentID,
      name: name,
      problem: problem
    });
    this.currentID += 1;
  }
}

//Vue instace is created here and given a reference to the router (provided in index.js?).
//It is directed to render the app using App from App.vue, and to control the DOM in the div with the #app id.
new Vue({
  router,
  data: data,
  render: h => h(App)
}).$mount('#app') //The mount function tells Vue to find the #app div in index.html and replace it with the template defined in App.vue.

//data can be accessed elsewhere with this.$root.$data