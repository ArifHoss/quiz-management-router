<template>
  <div id="quiz-bank">
    <div class="correctAnswers">
      You have <strong>{{scoreCounter}} correct answers!</strong>
    </div>
    <div class="correctAnswers">Currently at question {{questionCounter + 1}}/ 10</div>
    <hr />
    <div v-if="loading">Loading...</div>
    <div v-else>
      <!-- Only first Question is displayed -->
<!--      <p>Score: {{ scoreCounter }} / 10</p>-->
      <div v-if="!gameOver">
<!--        <h2>Question {{ questionCounter + 1 }}</h2>-->
        <h3>
          {{ questions[questionCounter].question }}
        </h3>
        <button @click="onClickAnswer1">
          {{ questions[questionCounter].a1 }}
        </button>
        <button @click="onClickAnswer2">
          {{ questions[questionCounter].a2 }}
        </button>
        <button @click="onClickAnswer3">
          {{ questions[questionCounter].a3 }}
        </button>
        <button @click="onClickAnswer4">
          {{ questions[questionCounter].a4 }}
        </button>

        <button @click="questionCounter++">Next</button>
      </div>

      <div v-else>
        <h3>Good Job!</h3>

        <button @click="onClickRestart">Restart</button>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'FirstQuiz',
  data() {
    return {
      questions: [],
      loading: true,
      gameOver: false,
      questionCounter: 0,
      scoreCounter: 0,
    }
  },
  methods: {
    async fetchQuestions() {
      this.loading = true
      let response = await fetch('http://127.0.0.1:3000/api/quizzes/10')
      let jsonResponse = await response.json()
      let data = jsonResponse.quiz
      this.questions = data
      this.loading = false
    },
    onClickRestart() {
      window.location.reload()
    },

    onClickAnswer1() {
      if (
        this.questions[this.questionCounter].a1 ===
        this.questions[this.questionCounter].correct_answer
      ) {
        this.scoreCounter++
      }
      if (this.questionCounter === 9) {
        this.gameOver = true
      }
    },
    onClickAnswer2() {
      if (
        this.questions[this.questionCounter].a2 ===
        this.questions[this.questionCounter].correct_answer
      ) {
        this.scoreCounter++
      }
      if (this.questionCounter === 9) {
        this.gameOver = true
      }
    },
    onClickAnswer3() {
      if (
        this.questions[this.questionCounter].a3 ===
        this.questions[this.questionCounter].correct_answer
      ) {
        this.scoreCounter++
      }
      if (this.questionCounter === 9) {
        this.gameOver = true
      }
    },
    onClickAnswer4() {
      if (
        this.questions[this.questionCounter].a4 ===
        this.questions[this.questionCounter].correct_answer
      ) {
        this.scoreCounter++
      }
      if (this.questionCounter === 9) {
        this.gameOver = true
      }
    },
  },
  mounted() {
    this.fetchQuestions()
  },
}
</script>

<style scoped>
button{
  padding: 20px;
}

h2 {
  font-family: Georgia, Helvetica, Arial, san-serif;
}
</style>
