<template>
  <header class="header">
    <nav class="navbar">
      <router-link to="/">
        <div class="nav-logo">SuperQuizzer</div>
      </router-link>
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
        <li class="nav-item">
          <router-link to="../FirstQuiz">
            <div @click="toggleHamburger" class="nav-link">Quiz Page</div>
          </router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">My Profile</a>
        </li>
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
  font-family: 'Roboto', sans-serif;
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
  font-size: 1rem;
  font-weight: 400;
  color: #475569;
}

.nav-link:hover {
  color: #5bc293;
}

.nav-logo {
  font-size: 2.1rem;
  font-weight: 500;
  color: #5bc293;
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

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
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
</style>
