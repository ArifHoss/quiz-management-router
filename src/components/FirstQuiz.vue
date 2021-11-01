<template>
  <div>
    <hr>

    <div v-if="loading">Loading...</div>
    <div v-else v-html="questions[0].question">
      <!-- Only first Question is displayed -->
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "FirstQuiz",
  data() {
    return {
      questions: [],
      loading: true

    };
  },
  methods:{
    async fetchQuestions(){
      this.loading=true;
       let response = await fetch("http://127.0.0.1:3000/api/quiz/");
     // let response = await fetch("https://opentdb.com/api.php?amount=10&category=9")
      let jsonResponse = await response.json();
      let data = jsonResponse.results.map((question) =>{
        question.answers = [question.correct_answer, question.incorrect_answers]
        return question;
      })
      this.questions = data;
      this.loading = false;
    },

  },
  mounted() {
    this.fetchQuestions();

  }

};
</script>

<style scoped>

h2{
  font-family: Georgia, Helvetica, Arial, san-serif;
}

</style>