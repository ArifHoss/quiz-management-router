<template>
  <header class="header">
    <nav class="navbar">
      <router-link to="/">
        <div class="nav-logo">SuperQuizzer</div>
      </router-link>
      <!--      <h3>Quiz Time</h3>-->
      <!--      <h3>Fun Time</h3>-->

      <ul :class="{ 'nav-menu ': true, active: isActive }">
        <li class="nav-item">
          <router-link to="/">
            <div @click="toggleHamburger" class="nav-link">Home</div>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="../BrowseQuiz">
            <div @click="toggleHamburger" class="nav-link">Browse Quiz</div>
          </router-link>
        </li>
        <div
            class="logged-in"
            v-if="Object.entries(this.$store.getters.getUser).length !== 0"
        >
          <li class="nav-item">
            <router-link to="../user">
              <div @click="toggleHamburger" class="nav-link">My Profile</div>
            </router-link>
          </li>
          <li class="nav-item">
            <button @click="logOut" class="sign-out">Log Out</button>
          </li>
        </div>
        <div v-else>
          <li class="nav-item">
            <button @click="logIn">Log In/Sign up</button>
          </li>
        </div>
      </ul>
      <div
          @click="toggleHamburger"
          :class="{ 'hamburger ': true, active: isActive }"
      >
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggleHamburger() {
      this.isActive = !this.isActive
    },
    logIn() {
      this.toggleHamburger()
      if (this.$router.currentRoute.path !== '/Login') {
        this.$router.push('/Login')
      }
    },
    logOut() {
      let newUser = {}
      this.$store.commit('changeUserValue', newUser)
      this.toggleHamburger()
      if (this.$router.currentRoute.path !== '/') {
        this.$router.push('/')
      }
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,400&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  font-size: 62.5%;
  background-color: #ec797a;
  width: 100%;
  font-family: 'Roboto', sans-serif;
  border-radius: 10px;
}

h3 {
  color: #151414;
  font-family: Papyrus;
}

.logged-in {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

.header {
  border-bottom: 1px solid #e2e8f0;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
}

.hamburger {
  display: none;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #101010;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-item {
  margin-left: 5rem;
}

.nav-link {
  font-family: Rockwell;
  font-size: 1rem;
  font-weight: 400;
  color: #475569;
}

.nav-link:hover {
  color: #5bc293;
}

.nav-logo {
  font-family: Rockwell;
  font-size: 2.1rem;
  border: 2px #42b983;
  font-weight: 500;
  color: #5bc293;
}

.nav-logo:hover {
  color: #f25e60;
}

.nav-logo:active {
  color: aqua;
}

button {
  width: 120px;
  height: 40px;
  border: 2px solid #5bc293;
  border-radius: 5px;
  background-color: white;
  color: #5bc293;
  font-weight: bolder;
  padding: 0;
}

button:hover {
  color: white;
  background-color: #5bc293;
}

.sign-out {
  border: 2px solid #f25e60;
  background-color: white;
  color: #f25e60;
}

.sign-out:hover {
  color: white;
  background-color: #f25e60;
}

@media only screen and (max-width: 768px) {

  .nav-menu {
    position: fixed;
    left: -100%;
    top: 5rem;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
  }

  .logged-in {
    display: inline;
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
    margin: 2.5rem 0;
  }
  .nav-logo{
    margin: 2.5rem 0;
  }

  .hamburger {
    display: block;
    cursor: pointer;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }

}

/*desktop*/
@media screen and (min-width: 1025px){

  header{
    font-size: 42%;
  }
  .nav-link{
    font-size: 2rem;
  }

}
</style>
