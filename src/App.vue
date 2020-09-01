<template>
  <div id="app">
    <!-- Imported fixed header created by github user TriDiamond-->
    <scroll-fixed-header :fixed.sync="fixed" :threshold="80"><p class="header"> Quiz Application </p> </scroll-fixed-header>
      <div class="container">
        <p class="title">{{questions.title}}</p>
          <div v-show="results.allAnswered" style="font-size:150%">
            <u>Results</u>
            <br><br> 
            You got {{results.correct}} / {{results.total}} questions correct
            <p style="color: red">
              <b>{{((results.correct/results.total)*100).toFixed(2)}} %</b>
            </p>
          </div>
        <!-- Questions component using data supplied by questions.json -->
        <Questions v-bind="questions" :results="results"/>
      </div>
  </div>
</template>

<script>
import questions from '../questions.json';
import Questions from './components/Questions.vue';


export default {
  name: 'App',
  components: {
    Questions
  },
  data(){
    return{
      questions: questions,
      results: {},
      fixed: false,
    }
  },
}
</script>

<style>
body{
  margin:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 0;
  padding-bottom: 5%;
  color: #2c3e50;
  background-color: rgba(250,250,255);
}

.header{
  color: white;
  text-align: left;
  background-color: darkred;
  padding: 1%;
  margin-top: 0;
}

.container{
  margin-left: 10%;
  margin-right: 10%;
}

.title{
  font-size: 200%;
  text-align: left;
}
</style>
