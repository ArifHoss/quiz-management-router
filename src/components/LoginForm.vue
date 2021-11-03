<template>
  <div class="container">
    <div v-if="errors.length">
      <b>Please correct the following error(s):</b>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <form>
      <label>Username</label>
      <input v-on:change="clearErrors" type="text" v-model="username" />
      <label>Password</label>
      <input v-on:change="clearErrors" type="password" v-model="password" />
      <input @click="onClickLogin" type="button" value="Sign In" />
    </form>
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
        questionsAnswered: 0,
        questionsCorrect: 0,
      },
      errors: [],
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
  height: 500px;
  width: 500px;
  margin: auto;
}
form {
  display: flex;
  flex-direction: column;
}
input {
  margin-bottom: 5px;
  width: 100%;
  border-radius: 4px;
  outline: none;
  padding: 8px;
  box-sizing: border-box;
  transition: 0.3s;
  border: 1px solid;
}
</style>
