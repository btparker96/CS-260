<template>
  <div>
    <div class="top-spacer"></div>
    <div class="top-spacer"></div>
    <div class="about">
      <div class="description">
        <p>The Facts and Jokes group is a website dedicated to providng fun and clean facts and jokes. We currently have <strong>{{num_jokes_n_facts}}</strong> facts and jokes availble.
          We invite you to become a contributer! Simply use the setup page to add and delete jokes or facts. You can then randomly generate fax or jokes and filter by
          either on the home page! Enjoy!</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      name: 'AboutView',
      // props: {
      //     jokes_n_facts: Array
      // },
      data() {
          return {
              num_jokes_n_facts: 1
          }
      },
      created() {
        //console.log("got this " + this.get_num_jokes_n_facts().length);
        this.num_jokes_n_facts = this.get_num_jokes_n_facts();
      },
      methods: {
        get_num_jokes_n_facts() {
          return this.$root.$data.jokes_n_facts.length;
        }
      },
      computed: {

      }
  }
</script>

<style scoped>
  .top-spacer {
      height: 100px;
  }
  .about {
    display: flex;
    justify-content: center;
  }
  .description {
    border-left: 2px solid black;
    border-right: 2px solid black;
    width: 50%;
    font-size: larger;
  }
</style>
