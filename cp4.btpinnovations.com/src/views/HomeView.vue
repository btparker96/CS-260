<template>
  <div>
    <JokesFacts :jokes_n_facts="jokes_n_facts" msg="welcome"/>
  </div>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
</template>

<script>
// @ is an alias to /src
import JokesFacts from '@/components/JokesFacts.vue'

export default {
  name: 'HomeView',
  components: {
    JokesFacts
  },
  data() {
    return {
    }
  },
  computed: {
    jokes_n_facts() {
      //console.log(this.$root.$data.jokes_n_facts);
      return this.$root.$data.jokes_n_facts;
    }
  }
}
</script>
