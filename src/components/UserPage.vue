<template>
  <div class="container">
    <div v-if="Object.entries(this.$store.getters.getUser).length === 0">
      WOW! You successfully hacked the system of
    </div>
    <div v-else>
      <ul>
        <hr class="user-line">
        <hr class="user-line">
        <li>
          <h3> {{ user.username }}'s Profile</h3>

        </li>
        <li>
          <h2> {{ user.email }}</h2>

        </li>
        <hr class="user-line">
        <hr class="user-line">
        <h1 v-if="this.user.questions_answered">
          You answer correct {{calculatePercentageScore()}} of the time</h1>
          <h3 > Achivements:</h3>
          <h2 v-if="this.user.questions_answered == 0">No achivements found - GO DO SOME QUIZZES!</h2>
        <li class="achiMedal" v-if="this.user.questions_answered">
          <h3>
            <img id="gold" TITLE="One Gold medal for each correct answer" src="../img/gold.png" style="width:50px; height:100px" > x {{ user.questions_correct }}
          </h3>

        </li>
        <li class="achiMedal" v-if="this.user.questions_answered">
          <h3>
            <img id="silver" title="One Silver medal for each completed quiz" src="../img/silver.png" style="width:50px; height:100px"> x {{this.user.questions_answered / 10}}
          </h3>
        </li>

        <li class="achiMedal" v-if="this.user.questions_answered">

            <img id="average" :title="getTitle(user.questions_answered, user.questions_correct)" :src="getMedalURL(user.questions_answered, user.questions_correct)" style="width:50px; height:100px">

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
    infoPopup(element){
      console.log(element)

    },
    calculatePercentageScore(){
      let percentage = parseInt(this.user.questions_correct) / parseInt(this.user.questions_answered)
      return Math.round(percentage * 100)+"%"

    },
    getMedalURL(questions_answered, questions_correct){

      let average = (parseInt(questions_correct) / parseInt(questions_answered))
      console.log("avg is "+average)
      if (average <0.4) {
        console.log("lessthan4")
        return require('../img/bronze.png')
      }
      if (average > 0.4 && average < 0.7){
        return require("../img/silver.png")
      }
      if(average > 0.7){
        return require("../img/gold.png")
      }



    },
    getTitle(questions_answered,questions_correct){
      let average = (parseInt(questions_correct) / parseInt(questions_answered))
      console.log("avg is "+average)
      if (average <0.4) {
        console.log("lessthan4")
        return "Reached more than 0% average score - CONGRATULATIONS "
      }
      if (average > 0.4 && average < 0.7){
        return "Reached more than a 40% average score"
      }
      if(average > 0.7){
        return "Reached more than a 70% average score"
      }

    }
  },
}
</script>

<style scoped>
/*Mobile first*/
h1{
  color: #475569;
  font-size: 14px;
  font-family: 'Quicksand', sans-serif;
}

h2{
  color: #475569;
  font-family: 'Quicksand', sans-serif;
}
h3{
  color: #475569;
  font-family: 'Quicksand', sans-serif;
  /*font-family: "Bauhaus 93";*/
}
.user-line {
  color: #09523c;
  background-color: #09523c;
  height: 1px;
  width: 80%;
}

div, html{
  background-image: url("../img/achievment.jpg");
  background-image: radial-gradient(circle, #fffdfd, rgba(250, 231, 185, 0.65), #c9f6e9);
  padding: 0;
  margin: 0;
  /*background: #bd7856;*/
  width: 100%;
  min-height: 100%;
  border-radius: 10px;
}
.container {
  width: 100%;
}
ul {
  list-style-type: none;
}

.achiMedal{
  display:inline-grid;
}

/*tablet/iPad*/
@media screen and (min-width: 768px) and (max-width: 1024px){
  .user-line{
    width: 50%;
  }
  h1{
    font-size: 20px;
  }

}

/*iPadPro*/
/*desktop*/
@media screen and (min-width: 1024px){
  .user-line{
    width: 35%;
  }
  h1{
    font-size: 30px;
  }
}
</style>
