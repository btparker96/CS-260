<template>
<div>
    <div class="top-spacer"></div>

    <div class="container">
        <div class="fact_joke">
            <div class="button">
                <button @click="getNew">Give me a new joke/fact</button>
            </div>
            <div class="promptAnswer">
                <p>{{currentFactJoke.prompt}}</p>
            </div> 
        </div>
        <div class="fact_joke">
            <div class="button">
                <button @click="giveAnswer">Give answer</button>
            </div>
            <div class="promptAnswer" v-show='showAnswer'>
                <p>{{currentFactJoke.answer}}</p>
            </div>
        </div>
        <div class="radio">
            <div>
                <label>Filter by:</label>
                <input type="radio" id="one" value="joke" v-model="type">
                <label for="one">joke</label>
                <input type="radio" id="two" value="fact" v-model="type">
                <label for="two">fact</label>
                <input type="radio" id="three" value='' v-model="type">
                <label for="three">none</label>
            </div>
        </div>
    </div>

    
</div>
</template>


<script>
export default {
    name: 'JokesFacts',
    props: {
        jokes_n_facts: Array
    },
    data() {
        return {
            currentFactJoke: {
                prompt: '',
                answer: '',
                type: '',
            },
            showAnswer: false,
            type: ''
        }
    },
    created() {
    },
    methods: {
        getNew() {
            this.showAnswer = false;
            //console.log(this.type)
            let filteredArray = this.$root.$data.jokes_n_facts.filter(jk => jk.type.search(this.type) >= 0);
            //console.log(filteredArray);
            let random = Math.floor(Math.random()*(filteredArray.length));
            this.currentFactJoke = filteredArray[random];
        },
        giveAnswer() {
            this.showAnswer = true;
        }
    }
}
</script>

<style scoped>
    label {
        margin: 20px;
    }
    .radio {
        /* width: 100%; */
        /* display: flex; */
        /* justify-content: space-around; */
        /* align-items: center; */
        /* border: 1px solid #fff; */
        font-size: larger;
    }
    .top-spacer{
        height: 300px;
    }
    button {
        width: 500px;
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
        flex-wrap: wrap;
    }
</style>
