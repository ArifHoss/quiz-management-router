<template>
<div class="quiz-bank">
  <div class="correctAnswers">
    You have <strong>{{scoreCounter}} correct answers!</strong>
  </div>
  <div class="correctAnswers">Currently at question {{questionCounter + 1}}/ 10</div>


</div>
</template>

<script>
export default {
  name: "RandomQuiz",
  data(){
    return{
      questions: [],
      fetching: true

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
  }
}
</script>

<style scoped>

</style>