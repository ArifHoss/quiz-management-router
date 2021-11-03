<template>
<div class="quiz-bank">
  <div class="correctAnswers">
    You have <strong>{{scoreCounter}} correct answers!</strong>
  </div>
  <div class="correctAnswers">Currently at question {{questionCounter + 1}}/ 10</div>

<!--  <div v-if="fetching">Fetching...</div>-->
<!--  <div v-else v-html="questions[0].question"></div>-->
  <div>
    <h3 v-html="fetching ? 'Loading quiz....' : thisQuestion.question"></h3>
    <table v-if="thisQuestion">
      <button
      v-for="answer in thisQuestion.answers"
      :questionCounter="thisQuestion.key"
      :key="answer"
      v-html="answer"
      @click.prevent="onClickAnswer"
      ></button>
      <hr>
      <button @click="questionCounter++">Next</button>
    </table>
  </div>



</div>
</template>

<script>
export default {
  name: "RandomQuiz",
  data(){
    return{
      questions: [],
      fetching: true,
      questionCounter: 0

    }
  },
  computed:{
    thisQuestion(){
      if(this.questions !==[]){
        return this.questions[this.questionCounter]
      }
      return null
    }
  },
  methods:{
    async  fetchQuestions(){
      this.fetching = true
      let res = await fetch("http://127.0.0.1:3000/api/quizzes/10")
      let jsonRes = await res.json()
      let data = jsonRes.quiz.map((question) =>{
        question.answers = [ question.a1,question.a2, question.a3, question.a4]
        return question
      })
      this.questions = data
      this.fetching = false
    }
  },
  mounted() {
    this.fetchQuestions()
  }
}
</script>

<style scoped>

</style>