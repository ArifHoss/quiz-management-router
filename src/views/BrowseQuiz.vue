<template>
  <section class="container">

    <div v-if="Object.entries(this.$store.getters.getUser).length === 0">
      <router-link :to="{ name: 'RandomQuiz', params: { apiUrl: 'quizzes/10' } }">
      <h3>Random Quiz</h3>
      <img src="../img/halloweenfilmandtvpreview.png" alt="" />
      </router-link>
      <h3> Create an account or LogIn to get all quizzes!</h3>
    </div>
    <div class="grid-item" v-else>

      <router-link :to="{ name: 'RandomQuiz', params: { apiUrl: 'quizzes/10' } }">
      <h3>Random Quiz</h3>
      <img src="../img/halloweenfilmandtvpreview.png" alt="" />
      </router-link>

      <router-link :to="{name: 'RandomQuiz',params: { apiUrl: 'quizzes/get/category/sports/10' },}">
        <h3>Sports Quiz</h3>
        <img src="../img/lionel-messi-quiz.jpg" alt="" />
      </router-link>

      <router-link :to="{ name: 'RandomQuiz', params: { apiUrl: 'quizzes/get/category/dinosaurs/10' } }">
        <h3>Dinosaur Quiz</h3>
        <img src="../img/cheese.png" alt="" />
      </router-link>

      <router-link :to="{ name: 'RandomQuiz', params: { apiUrl: 'quizzes/get/category/movies/10' } }">
        <h3>Movie Quiz</h3>
        <img src="../img/avengers-quiz.jpg" alt="" />
      </router-link>


      <router-link :to="{ name: 'RandomQuiz', params: { apiUrl: 'quizzes/get/category/fruits/10' } }">
        <h3>Fruits Quiz</h3>
        <img src="../img/healthy-eating.jpg" alt="" />
      </router-link>

      <router-link :to="{ name: 'RandomQuiz', params: { apiUrl: 'quizzes/get/category/image/10' } }">
        <h3>Image Quiz</h3>
        <img src="../img/photo.jpg" alt="" />
      </router-link>

    </div>
  </section>
</template>

<script>
export default {
  name: 'BrowseQuiz',
  data() {
    return {
      apiUrl: '',
    }
  },
}
</script>

<style scoped>
.container {
  background-image: repeating-conic-gradient(#d5f8e5,#fffdfd, #f1cece);
  margin-top: 20px;
  width: 100%;
  border-radius: 10px;
}

h3{
  font-family: Consolas;
}

img {
  width: 95%;
  max-width: 400px;
}

/*tablet*/
@media screen and (min-width: 786px) and (max-width: 1024px) {
  img{
    max-width: 600px;
  }
}

/*desktop*/
@media screen and (min-width: 1025px) {
  img{
    max-width: 600px;
  }
  /*section{*/
  /*  display: grid;*/
  /*  !*grid-template-rows: 1fr 1fr;*!*/
  /*  grid-template-columns: 1fr 1fr;*/
  /*}*/
  .grid-item{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
