<template>
  <div class="container">
    <div v-if="Object.entries(this.$store.getters.getUser).length === 0">
      WOW! You successfully hacked the system
    </div>
    <div v-else>
      <ul>
        <li>
          <h3>
            Username
          </h3>
          {{ user.username }}
        </li>
        <li>
          <h3>
            Email
          </h3>
          {{ user.email }}
        </li>
        <li v-if="this.user.questions_answered">
          <h3>
            Questions answered
          </h3>
          {{ user.questions_answered }}
        </li>
        <li v-if="this.user.questions_answered">
          <h3>
            Correct answers
          </h3>
          {{ user.questions_correct }}
        </li>
        <li v-if="this.user.questions_answered">
          <h3>
            Average Score
          </h3>
          {{ calculateAverageScore() }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserPage',
  data() {
    return {
      user: this.$store.getters.getUser,
    }
  },
  methods: {
    calculateAverageScore() {
      let questions = this.user.questions_answered
      let answers = this.user.questions_correct
      let quizzesTaken = questions / 10
      let averageScorePerQuiz = answers / quizzesTaken
      return Math.round(averageScorePerQuiz * 10) / 10
    },
  },
}
</script>

<style scoped>
.container {
  width: 100%;
}
ul {
  list-style-type: none;
}
</style>
