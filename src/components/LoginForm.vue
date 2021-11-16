<template>
  <div class="container">
    <h1>Log in</h1>
    <div class="errors" v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <form>
      <label>Username</label>
      <input
        v-on:change="clearErrors"
        type="text"
        placeholder="Username"
        v-model="username"
      />
      <label>Password</label>
      <input
        v-on:change="clearErrors"
        type="password"
        placeholder="Password"
        v-model="password"
      />
      <input @click="onClickLogin" class="btn" type="button" value="Log In" />
    </form>
    <hr>
    <p>Dont have an account yet? Sign up below!</p>
    <router-link to="../SignUp"><button>Sign Up</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      username: '',
      password: '',
      user: {
        username: '',
      },
      errors: [],
      isLoading: false,
    }
  },
  methods: {
    onClickLogin(e) {
      e.preventDefault()
      this.clearErrors()
      if (this.username && this.password) {
        this.getUser(this.username, this.password)
      } else {
        this.errors.push('You need to provide username & password')
      }
    },
    async getUser(username, password) {
      await fetch('http://localhost:3000/api/user/' + username + '/' + password)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          if (data.user) {
            this.user = data.user
            this.$store.commit('changeUserValue', this.user)
          } else {
            this.errors.push(data.message)
          }
        })
      if (this.user.username !== '') {
        this.$router.push('/')
      }
    },
    clearErrors() {
      this.errors = []
    },
  },
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 50px auto auto auto;
}
form {
  display: flex;
  flex-direction: column;
}
input {
  margin-top: 5px;
  width: 100%;
  border-radius: 4px;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  border: 1px solid;
}
label {
  margin-top: 10px;
}
.btn {
  margin-top: 20px;
  width: 100%;
  height: 40px;
  border: 2px solid #5bc293;
  border-radius: 5px;
  color: white;
  background-color: #5bc293;
  font-weight: bolder;
  transition: 0.3s;
}
.btn:hover {
  background-color: #338e64;
}
</style>
