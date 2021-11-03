<template>
  <section class="app">
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="../BrowseQuiz">Browse Quiz</router-link> |
      <router-link to="../FirstQuiz">Quiz Sida</router-link>
    </div>

    <router-view/>
  </div>

  <footer>
    <p id="createdBy">
      created by
      <a
          href="https://www.linkedin.com/in/arif-hossain-92b438206/" target="_blank">Arif Hossain,
      </a>
      <a
          href="https://www.linkedin.com/in/karin-ismael-589285157/" target="_blank">Karin Ismael,
      </a>
      <a href="#" target="_blank"> Jonathan Lissman & </a>
      <a href="#" target="_blank"> Tobias Ekman </a>
    </p>
  </footer>
  </section>
</template>

<script>

export default {
  data() {
    return {
      
    }
  },
}
</script>

<style>
.app {
  text-align: center;
}

/*#nav {
  padding: 30px;
  background-color: #cbf6e1;
}*/

/*#nav a {
  font-weight: bold;
  color: #2c3e50;
}*/

/*#nav a.router-link-exact-active {
  color: #42b983;
}*/

/*#createdBy {
  float: right;
}*/
</style>
