<template>
  <div id="app">
    <div class="content">
      <NavBar />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    NavBar,
    Footer,
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
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}
</style>
