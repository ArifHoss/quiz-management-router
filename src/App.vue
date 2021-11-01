<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="../BrowseQuiz">Browse Quiz</router-link>|
      <router-link to="../FirstQuiz">Quiz Sida</router-link>

      <footer>
        <p id="createdBy">
          created by <a href="https://www.linkedin.com/in/arif-hossain-92b438206/" target="_blank">Arif Hossain,</a>
          <a href="https://www.linkedin.com/in/karin-ismael-589285157/" target="_blank"> Karin Ismael, </a>
          <a href="#" target="_blank"> Jonathan Lissman & </a>
          <a href="#" target="_blank"> Tobias Ekman </a>
        </p>
      </footer>
    </div>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

footer {
  position: fixed;
  bottom: 0;
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 0.7rem;
  background-color: rgb(102, 255, 166);
}

#createdBy {
  float: right;
}
</style>
