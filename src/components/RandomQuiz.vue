<template>
  <section class="app">
    <div class="quiz-bank">
      <!--  <div v-if="fetching">Fetching...</div>-->
      <!--  <div v-else v-html="questions[0].question"></div>-->
      <!--      <div v-if="!gameOver">-->
      <div v-if="!gameOver" class="quix-box">
        <div class="correctAnswers">
          <div class="bar-container">
            <div :class="{'bar-style': barActive, 'bar-text': true}" :style="{width: progressBar}">
              {{progressBar}}
            </div>
          </div>
        </div>
        <div class="medal-container">
          <div v-for="i in scoreCounter" :key="i">
          <img class="medal" src="../img/icons/star.png">
          </div>
        </div>
        <h3 class="question" v-html="fetching ? 'Loading quiz....' : thisQuestion.question"></h3>
        <div v-if="thisQuestion.img">
          <p><img :src="require('../img/quiz-img/' + thisQuestion.img)" alt=""></p>
        </div>

        <div class="alternatives" v-if="thisQuestion">
          <button
            v-for="answer in thisQuestion.answers"
            :questionCounter="thisQuestion.key"
            :key="answer"
            v-html="answer"
            @click.prevent="clickDisable"
          ></button>
          <hr class="line" />
          <button id= "next-button" @click="onClickNext">Next</button>
          <!--          <button @click="onClickBack">Back</button>-->
          <button @click="onClickRestart">Restart</button>
        </div>
      </div>

      <div v-else>
        <div v-if="scoreCounter >= 10">
          <img class="medal-icon" src="../img/icons/trophy.png" alt="" />
          <p>WOW! You got the champion trophy!</p>
          <p>You got a perfect score, {{ scoreCounter }} out of 10!</p>
        </div>
        <div v-if="scoreCounter > 7 && scoreCounter < 10">
          <img class="medal-icon" src="../img/icons/gold.png" alt="" />
          <p>Amazing! You got the gold medal!</p>
          <p>You got {{ scoreCounter }} out of 10!</p>
        </div>
        <div v-if="scoreCounter > 5 && scoreCounter < 8">
          <img class="medal-icon" src="../img/icons/silver.png" alt="" />
          <p>Good Job! You got the silver medal!</p>
          <p>You got {{ scoreCounter }} out of 10!</p>
        </div>
        <div v-if="scoreCounter > 3 && scoreCounter < 6">
          <img class="medal-icon" src="../img/icons/bronze.png" alt="" />
          <p>Not bad! You got the bronze medal!</p>
          <p>You got {{ scoreCounter }} out of 10!</p>
        </div>
        <div v-if="scoreCounter < 4">
          <img class="medal-icon" src="../img/icons/ohno.png" alt="" />
          <p>Try again! No medal this time.</p>
          <p>You got {{ scoreCounter }} out of 10</p>
        </div>

        <p
          class="saved-text"
          v-if="Object.entries(this.$store.getters.getUser).length > 0"
        >
          Score saved to account
        </p>
        <div class="endbuttons">
          <!--          <button @click="onClickBack">Back</button>-->
          <!--          <button @click="onClickRestart">Restart</button>-->
          <!--          <button @click="onClickBack">Browse Quizzes</button>-->
          <button @click="onClickBack">Want to play something else?</button>
          <!--          <button @click="onClickRestart">Start another quiz</button>-->
        </div>
      </div>

      <!--  <div v-else>-->
      <!--    <h3>Nice Job!</h3>-->
      <!--    <button @click="onClickRestart">Restart</button>-->
      <!--  </div>-->
    </div>
  </section>
</template>

<script>
export default {
  name: 'RandomQuiz',
  props: {
    apiUrl: String,
  },
  data() {
    return {
      questions: [],
      fetching: true,
      gameOver: false,
      questionCounter: 0,
      scoreCounter: 0,
      progressBar: '0%',
      barActive: false,
    }
  },
  computed: {
    thisQuestion() {
      if (this.questions !== []) {
        return this.questions[this.questionCounter]
      }
      return null
    },
  },
  methods: {
    async fetchQuestions() {
      this.fetching = true
      let res = await fetch('http://127.0.0.1:3000/api/' + this.apiUrl)
      let jsonRes = await res.json()
      let questionCounter = 0
      let data = jsonRes.quiz.map((question) => {

        question.answers = [question.a1, question.a2, question.a3, question.a4]
        question.correctAnswer = null
        question.img = question.imgLink
        question.key = questionCounter
        questionCounter++
        return question
      })
      this.questions = data
      this.fetching = false
    },
    onClickRestart() {
      this.scoreCounter = 0
      this.questionCounter = 0
      this.fetchQuestions()
    },
    onClickNext() {
      let allButtons = document.querySelectorAll(
        `[questionCounter="${this.questionCounter}"]`
      )
      for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].removeAttribute('disabled')
        allButtons[i].className = ''
      }
      this.questionCounter++
      this.progressBar = (this.questionCounter) * 10 + '%';
      this.barActive = true
    },
    async saveScore() {
      let user = this.$store.getters.getUser
      let score =
        parseInt(this.scoreCounter) + parseInt(user['questions_correct'])
      let questions =
        parseInt(this.questionCounter) + parseInt(user['questions_answered'])
      user['questions_correct'] = score
      user['questions_answered'] = questions

      let data = {
        user_id: user['id'],
        questions_answered: score,
        questions_correct: questions,
      }
      await fetch('http://127.0.0.1:3000/api/user/stats', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      this.$store.commit('changeUserValue', user)
    },
    onClickBack() {
      this.$router.push('BrowseQuiz')
    },
    clickDisable: function(event) {
      let questionCounter = event.target.getAttribute('questionCounter')
      let userAnswer = event.target.innerHTML
      let submittedAnswer = userAnswer.replace(/'/, '&#039;')
      this.questions[questionCounter].submittedAnswer = submittedAnswer
      event.target.classList.add('clicked')

      let allButtons = document.querySelectorAll(
        `[questionCounter="${questionCounter}"]`
      )
      for (let i = 0; i < allButtons.length; i++) {
        //if(allButtons[i] === event.target) continue
        allButtons[i].setAttribute('disabled', '')
      }
      this.onClickAnswer(event, questionCounter)
    },

    onClickAnswer: function(event, questionCounter) {
      let question = this.questions[questionCounter]

      /* if (question.submittedAnswer) {
        if (this.questionCounter < this.questions.length - 1) {
          setTimeout(
            function() {
              this.questionCounter += 1
            }.bind(this),
            20000
          )
        }
      }*/

      if (question.submittedAnswer === question.correct_answer) {
        event.target.classList.add('correctAnswer')
        this.questions[questionCounter].correctAnswer = true
        this.scoreCounter++
      } else {
        event.target.classList.add('incorrectAnswer')
        this.questions[questionCounter].correctAnswer = false
        let showCorrectAnswer = this.questions[questionCounter].correct_answer
        let allAnswers = document.querySelectorAll(
          `[questionCounter="${questionCounter}"]`
        )
        allAnswers.forEach(function(button) {
          if (button.innerHTML === showCorrectAnswer) {
            button.classList.add('displayCorrectAnswer')
          }
        })
      }
      if (this.questionCounter === 9) {
        this.gameOver = true
        if (this.$store.getters.getUser.username) {
          this.questionCounter++
          this.saveScore()
        }
      }
    },
  },
  mounted() {
    this.fetchQuestions()
  },
}
</script>

<style scoped>
/*General*/
/*MobileFirst*/
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,400&display=swap');
img {

  max-height: 300px;
  max-width: 300px;
}

body {
  background-color: mintcream;
}
template {
  background-color: mintcream;
}
.app {
  text-align: center;
  margin-top: 40px;
}

h3 {
  margin-top: 20px;
  height: 50px;
  font-size: 1.2rem;
}
.quix-box {
  display: grid;
}

.alternatives {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: center;
}
.bar-container {
  background-color: rgb(240, 240, 240);
  box-shadow:
      0 1px 1px rgb(220, 220, 220),
      0 2px 2px rgb(220, 220, 220),
      0 4px 4px rgb(220, 220, 220),
      0 8px 8px rgb(220, 220, 220),
      0 16px 16px rgb(220, 220, 220)
    ;
  width: 80%;
  border-radius: 5px;
  margin: auto;
  max-width: 500px;
 }
.bar-style {
  background: linear-gradient(25deg,
  rgba(209,229,240,1) 0%,
  rgba(161,215,245,1) 50%,
  rgba(87,185,240,1) 100%);
  color: black;
  text-align: right;
  border-radius: 5px;
  transition: 0.3s;
 }
 .bar-text {
   font-size: 0.8rem;
   padding: 1%;
 }
.medal-container {
   display: flex;
   flex-direction: row;
   margin: auto;
   margin-top: 50px;
 }
.medal {
  width: 25px;
  height: 25px;
  border: none;
  margin-right: 5px;
}

button {
  margin-bottom: 10px;
  width: 85%;
  max-width: 500px;
  font-size: 1rem;
  border: none;
  background: linear-gradient(25deg,
  rgba(193,235,250,1) 0%,
  rgba(201,246,233,1) 38%,
  rgba(193,250,202,1) 100%);
  box-shadow:
      0 1px 1px hsl(0deg 0% 0% / 0.075),
      0 2px 2px hsl(0deg 0% 0% / 0.075),
      0 4px 4px hsl(0deg 0% 0% / 0.075),
      0 8px 8px hsl(0deg 0% 0% / 0.075),
      0 16px 16px hsl(0deg 0% 0% / 0.075)
    ;
}

.endbuttons {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  align-items: center;
}

button.correctAnswer {
  animation: flashButton;
  animation-duration: 700ms;
  animation-delay: 200ms;
  animation-iteration-count: 3;
  animation-timing-function: ease-in-out;
  color: black;
  background: linear-gradient(
    210deg,
    rgba(0, 178, 72, 0.25),
    rgba(0, 178, 72, 0.5)
  );
}

button.incorrectAnswer {
  color: black;
  background: linear-gradient(
    210deg,
    rgba(245, 0, 87, 0.25),
    rgba(245, 0, 87, 0.5)
  );
}

button.displayCorrectAnswer {
  animation: flashButton;
  animation-duration: 700ms;
  animation-delay: 200ms;
  animation-iteration-count: 2;
  animation-timing-function: ease-in-out;
  color: black;
  background: linear-gradient(
    210deg,
    rgba(0, 178, 72, 0.25),
    rgba(0, 178, 72, 0.5)
  );
}

button:active {
    -ms-transform: translateY(4px);
    -webkit-transform: translateY(4px);
    transform: translateY(4px);
    border-bottom: none;
}

.medal-icon {
  border: none;
  width: 100px;
}

.saved-text {
  margin-top: 100px;
}

/*tablet*/
@media screen and (min-width: 786px) and (max-width: 1024px) {
  /*button {*/
  /*  width: 30%;*/
  /*  max-width: 200px;*/
  /*  font-size: 1rem;*/
  /*}*/
  img {

    max-height: 500px;
    max-width: 500px;
  }
}

/*desktop*/
@media screen and (min-width: 1025px) {
  img {
    max-height: 500px;
    max-width: 500px;
  }
}
</style>
