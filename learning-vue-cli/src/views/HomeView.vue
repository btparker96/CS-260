<template>
<div>
  <h1>Current Tickets</h1>
  <div v-for="ticket in tickets" v-bind:key="ticket.id">
    <hr>
    <div class="ticket">
      <div class="problem">
        <p>{{ticket.problem}}</p>
        <p><i>-- {{ticket.name}}</i></p>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'homeVue',
  data() {
    return {}
  },
  computed: {
    tickets() {
      return this.$root.$data.getTickets();
    }
  }
}

</script>

<!--Original--------------------------------------------------------------------------------------------------
/*
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png"> //Accesses a picture from the assets folder
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue' //import a component like this

export default { //put the component in the export default section so it is also available to other parts of the app
  name: 'home',
  components: {
    HelloWorld //The HelloWorld component lets us access this component with the <HelloWorld> element in the template. We pass data to the component using attributes, such as the msg attribute.
}
*/
-->

