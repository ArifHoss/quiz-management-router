<template>
  <div class="hello">
    <h1>Welcome {{ user.username }}</h1>
    <div v-if="isLoggedIn">
      <button @click="logOut" class="sign-out">Log Out</button>
    </div>
    <div v-else>
      <router-link to="../Login"><button>Log In</button></router-link>
      <p></p>
      <router-link to="../SignUp"><button>Sign Up</button></router-link>
      <hr />
    </div>
    <h3>Digital Learning for kids</h3>
    <p>Free learning!</p>
    <p>Learning by doing!</p>
    <p>Fun for the whole family</p>

    <img alt="Happy children laughing lying in grass" src="../img/family.png" />
  </div>
</template>

<script>
export default {
  name: 'LogInPage',
  props: {
    msg: String,
  },
  data() {
    return {
      user: {
        username: '',
      },
      isLoggedIn: false,
    }
  },
  methods: {
    logOut() {
      let newUser = {}
      this.$store.commit('changeUserValue', newUser)
      window.location.reload()
    },
  },
  mounted() {
    this.user = this.$store.getters.getUser
    if (this.user.username) {
      this.isLoggedIn = true
    }
  },
}
</script>

<style scoped>
button {
  width: 60%;
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
img {
  width: 90%;
  max-width: 500px;
}
</style>
