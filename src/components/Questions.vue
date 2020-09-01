<template>
    <form @submit="submitForm" id="quiz">
        <QuestionCard 
            v-for="(q, index) in question" 
            v-bind:key="q.style" 
            v-bind:c="q.correct" 
            v-bind:cA="q.answer"
            v-bind:q="q.question" 
            v-bind:o="q.options" 
            v-bind:s="q.style"
            v-bind:r="r" 
            v-model="answers" 
            v-bind:n="index"/>
        <button 
            id="submitBtn" 
            v-bind:disabled="results.allAnswered" 
            type="submit"
            >
            Submit</button>
        <p 
            v-show="results.showError" 
            style="color: red; margin-top: 1%;"
            >
            Answer all questions before submitting. Unaswered questions are displayed in yellow.
        </p>
    </form>
</template>

<script>
import QuestionCard from './QuestionCard.vue';

//Check for whether user answered all questions
function checkIfAllAnswered(answers, questions){
        return Object.keys(answers).length !== questions.length;
}

//Grade quiz
function evaluateAnswers(answers, questions, results){
        //console.log(answers, questions);
        let answersCorrect = 0;
        questions.forEach(question => {
            if (question.question){
                if (answers[question.question] === question.answer) { 
                    answersCorrect++; 
                    question.style = {border: "2px solid limegreen"};
                    question.correct = 'Correct';
                }
                else{
                    question.style = {border: "2px solid red"};
                    question.correct = 'Wrong';
                }
            }
        });
        if (results.showError) { results.showError = false; }
        results.correct = answersCorrect;
        results.total = questions.length;
        results.allAnswered = true;
        // console.log(`Answered ${answersCorrect} question(s) correctly out of ${questions.length} questions`);
}

//hilights unanswered questions in yellow border
function sendMissingAnswerState(answers, questions, results){
    questions.forEach(question => {
        if (question.question){
            if(!answers[question.question]){
                console.log("here for", question.question);
                question.style = {border: "2px solid rgb(220,255,0)"};
            }
            else{
                question.style= {};
            }
        }
    });
    results.allAnswered = false;
    results.showError = true;
}

export default {
    name: 'Questions',
    components: {
        QuestionCard,
    },
    props: {
        test: String,
        questions: Array,
        results: Object
    },
    methods:{
        submitForm: function(e){
            e.preventDefault();
            //Did not answer
            if (checkIfAllAnswered(this.answers, this.questions)){
                //show error state
                console.log("here");
                sendMissingAnswerState(this.answers, this.questions, this.results);
                this.$forceUpdate();
            }
            else{
                //evaluate correct answers
                evaluateAnswers(this.answers, this.questions, this.results);
                
                this.$forceUpdate();
            }
        },
    },
    data: function(){
        // console.log("this is ", this.questions);
        return{
            question: this.questions,
            r: this.results,
            answers:{},
            }
        }
}
</script>

<style >

#submitBtn{
    border: 2px solid green;
    border-radius: 5px;
    padding: 10px 15px 10px 15px;
    margin-top: 2%;
    color: white;
    background-color: limegreen;
}

#submitBtn:disabled, #submitBtn[disabled=disabled]{
    background-color: rgba(0, 250, 0, .5);
    color: rgb(240, 240, 240)
}
</style>