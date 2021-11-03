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
      @click.prevent="clickDisable"
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
      let questionCounter = 0
      let data = jsonRes.quiz.map((question) =>{
        question.answers = [ question.a1,question.a2, question.a3, question.a4]

        question.correctAnswer = null
        question.key = questionCounter
        questionCounter++
        return question
      })
      this.questions = data
      this.fetching = false
    },
    clickDisable: function (event){
      let questionCounter = event.target.getAttribute("questionCounter")
      let polutedUserAnswer = event.target.innerHTML
      let submittedAnswer = polutedUserAnswer.replace(/'/, "&#039;")
      this.questions[questionCounter].submittedAnswer = submittedAnswer
      event.target.classList.add("clicked")

      let allButtons = document.querySelectorAll(`[questionCounter="${questionCounter}"]`)
      for (let i = 0; i < allButtons.length; i++) {
        if(allButtons[i] === event.target) continue
        allButtons[i].setAttribute("disabled", "")
      }
      this.onClickAnswer(event, questionCounter)
    },
    onClickAnswer: function (event, questionCounter){
      let question = this.questions[questionCounter]

      if(question.submittedAnswer === question.corrct_answer){
        event.target.classList.add("correctAnswer")
        this.questions[questionCounter].correctAnswer = true
      }else {
        event.target.classList.add("incorrectAnswer")
        this.questions[questionCounter].correctAnswer = false
        let showCorrectAnswer = this.questions[questionCounter].correct_answer
        let allAnswers = document.querySelectorAll(`[questionCounter="${questionCounter}"]`)
        allAnswers.forEach(function (button){
          if(button.innerHTML === showCorrectAnswer){
            button.classList.add("displayCorrectAnswer")
          }
        })
      }

    }
  },
  mounted() {
    this.fetchQuestions()
  }
}
</script>

<style scoped>

</style>