<template>
    <div class="card" v-bind:style="style">
        <!-- Question name -->
        {{num+1}}. {{question}}
        <!-- Answer choices -->
        <QuestionChoices 
            :question="question" 
            :answersObject="answersObject"
            :correctAnswer="correctAnswer"
            :res="res" 
            v-for="o in options" 
            v-bind:key="o" 
            v-bind:o="o"/>
        <!-- Correct or Wrong -->
        <p v-show="correct" v-bind:style="correctOrWrong">
            {{correct}}
        </p>
    </div>
</template>

<script>
import QuestionChoices from './QuestionChoices.vue';

//Determines color of 'Correct' and 'Wrong'
function generateStyle(answerIs){
    let style = {
        textAlign: "right",
        marginBottom: "0%",
        marginRight: "-1%",
    }
    if (answerIs === 'Correct'){
        style.color= "limegreen";
    }
    else{
        style.color= "red";
    }    
    return style;
}

export default {
    name: 'QuestionCard',
    components: {
        QuestionChoices
    },
    props: {
        q: String,
        c: String,
        cA: String,
        o: Array,
        a: String,
        s: Object,
        r: Object,
        n: Number    
    },
    data: function() {
        return {
            question: this.q,
            correct: this.c,
            correctAnswer: this.cA,
            correctOrWrong: generateStyle(this.c),
            options: this.o,
            style: this.s,
            res: this.r,
            num: this.n,
            answersObject: this.$parent.answers
        }
    }
}
</script>

<style>
.card {
    box-shadow: 2px 4px 5px rgba(0,0,0,.5);
    border-radius: 10px;
    margin-top: 2%;
    padding: 2% 2% 1% 2%;
    background-color: white;
    text-align: left;
}


</style>