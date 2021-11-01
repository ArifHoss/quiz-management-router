<template>
  <div>
    <hr />

    <div v-if="loading">Loading...</div>
    <div v-else>
      <!-- Only first Question is displayed -->
      <h3>
        {{ questions[0].question }}
      </h3>
      <button>
        {{ questions[0].a1 }}
      </button>
      <button>
        {{ questions[0].a2 }}
      </button>
      <button>
        {{ questions[0].a3 }}
      </button>
      <button>
        {{ questions[0].a4 }}
      </button>
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
    }
  },
  methods: {
    async fetchQuestions() {
      this.loading = true
      let response = await fetch('http://127.0.0.1:3000/api/quizzes/10')
      // let response = await fetch("https://opentdb.com/api.php?amount=10&category=9")
      let jsonResponse = await response.json()
      let data = jsonResponse.quiz
      this.questions = data
      this.loading = false
    },
  },
  mounted() {
    this.fetchQuestions()
  },
}
</script>

<style scoped>
h2 {
  font-family: Georgia, Helvetica, Arial, san-serif;
}
</style>
