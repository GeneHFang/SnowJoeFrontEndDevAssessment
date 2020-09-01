<template>
    <p v-bind:style="style" v-bind:key="style.color">
        <input v-on:click="selectEvent" type="radio" :name="question" v-bind:value="option" v-model="answers[question]"> {{option}}
    </p>
</template>

<script>

//Creates highlight around correct answer choice if user entered wrong choice
function hilightCorrect(correctAns, thisAns, alreadyAnswered, answerSelected){
    let style = {
        textAlign: "left",
        marginLeft: "3%",
        marginRight: "10%",
        padding: "1%"
    };
    if (alreadyAnswered){
        if (alreadyAnswered.allAnswered && correctAns===thisAns && answerSelected !==thisAns){
            style.border = "2px solid green";
            style.backgroundColor = "limegreen";
            style.color = "white";
            style.borderRadius = "10px";
        }
    }
    return style;
}

export default {
    name: 'QuestionChoices',
    props: {
        o: String,
        question: String,
        answersObject: Object,
        correctAnswer: String,
        res: Object,
    },
    data: function() {
        return {
            option: this.o,
            q: this.question,
            answers: this.answersObject,
            style: hilightCorrect(this.correctAnswer,this.o, this.res, this.answersObject[this.question])
        }
    },
    methods:{
        selectEvent: function(e) {
            if (this.answersObject){
                this.answersObject[e.target.name] = e.target.value;
            }
            console.log(this.answersObject);
        }
    }
}
</script>