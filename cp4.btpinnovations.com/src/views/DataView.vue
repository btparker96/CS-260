<template>
    <div>
        <div class="head-container">
            <h2>Welcome to the settings page. Here you can add, delete, or filter jokes</h2>
            <div class="top-spacer"></div>
            <div>
                <h4>Add a joke or fact</h4>
            </div>
        </div>
    
        <div class="form-container">
            <div class="form">
                <textarea class="textInput" v-model="inputFactJoke.prompt" placeholder="Prompt"></textarea>
                <br>
                <textarea class="textInput" v-model="inputFactJoke.answer" placeholder="Answer"></textarea>
                <br>
                <div class="radio">
                    <div>
                        <input type="radio" id="one" value="joke" v-model="inputFactJoke.type">
                        <label for="one">joke</label>
                    </div>
                    <div>
                        <input type="radio" id="two" value="fact" v-model="inputFactJoke.type">
                        <label for="two">fact</label>
                    </div>
                </div>
            </div>
            <button type="button" class="button-submit" v-on:click="inputNew">Submit {{inputFactJoke.type}}</button>
        </div>
        <div class="top-spacer"></div>
        <div>
            <h4>Delete a joke or fact</h4>
        </div>
        <div class="all-facts-jokes">
            <div class="fact-joke-entry" v-for="(factJoke, index) in get_jokes_n_facts" :key="factJoke.id">
                <hr>
                <div class="factJokeDelete">
                    <div class="promptAnswer">
                        <p>{{index}}</p>
                        <p>Fact/Joke: {{factJoke.prompt}}</p>
                        <p>Answer: {{factJoke.answer}}</p>
                    </div>
                    <button type="button" class="button-delete" @click="deleteFJ(index)">Delete</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'JokesFacts',
        // props: {
        //     jokes_n_facts: Array
        // },
        data() {
            return {
                jokes_n_facts: [],
                inputFactJoke: {
                    prompt: '',
                    answer: '',
                    type: '',
                },
            }
        },
        created() {
        },
        methods: {
            inputNew() {
                if (this.inputFactJoke.prompt != '' && this.inputFactJoke.answer != '' && this.inputFactJoke.type != '') {
                    let input = {
                        prompt: '',
                        answer: '',
                        type: '',
                    }
                    input.prompt = this.inputFactJoke.prompt;
                    input.answer = this.inputFactJoke.answer;
                    input.type = this.inputFactJoke.type;
                    this.$root.$data.jokes_n_facts.push(input);
                    this.inputFactJoke.prompt = '';
                    this.inputFactJoke.answer = '';
                    this.inputFactJoke.type = '';
                }

                
            },
            deleteFJ(index) {
                this.$root.$data.jokes_n_facts.splice(index, 1);
            }

        },
        computed: {
            get_jokes_n_facts() {
                return this.$root.$data.jokes_n_facts;
            }
        }
    }
</script>
    
<style scoped>
    .promptAnswer {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .factJokeDelete {
        width: 100%;
        display: flex;
        align-items: center;
        /* border: 1px solid #fff; */
        justify-content: center;
    }
    .form-container {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        /* border: 1px solid #fff; */
        justify-content: center;
    }
    .form {
        width: 40%;
        display: flex;
        align-items: center;
        flex-direction: column;
        /* border: 1px solid #fff; */
        justify-content: center;
    }
    .radio {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        /* border: 1px solid #fff; */
        font-size: larger;
    }
    .textInput {
        width: 100%;
        height: auto;
    }
    .top-spacer {
        height: 100px;
    }
    .button-submit {
        width: 500px;
        font-size: larger;
        font-weight: 500;
    }
    .button-delete {
        width: 300px;
        font-size: larger;
        font-weight: 500;
    }
    .button {
        width: 40%;
        /* border: 1px solid #fff; */
    }
    .promptAnswer {
        width: 40%;
        /* border: 1px solid #fff; */
        font-size: larger;
    }
    .container {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        /* border: 1px solid #fff; */
        justify-content: center;
    }
    .fact_joke {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        /* border: 1px solid #fff; */
    }
</style>