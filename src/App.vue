<template>
  <div id="app">
    <NavBar />
    <router-view />
    <footer>
      <p id="createdBy">
        created by
        <a
          href="https://www.linkedin.com/in/arif-hossain-92b438206/"
          target="_blank"
          >Arif Hossain,</a
        >
        <a
          href="https://www.linkedin.com/in/karin-ismael-589285157/"
          target="_blank"
        >
          Karin Ismael,
        </a>
        <a href="#" target="_blank"> Jonathan Lissman & </a>
        <a href="#" target="_blank"> Tobias Ekman </a>
      </p>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar,
  },
}
</script>

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
  left: auto;
  padding: 0.5rem 1rem;
  margin-left: 0px;
  width: 90%;
  font-size: 0.7rem;
  background-color: rgb(102, 255, 166);
  border: solid black;
}
#createdBy {
  float: bottom;
}
</style>
