<template>
  <div class="container">
    <div v-if="!isCreated">
      <h1>Sign Up</h1>
      <div v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors" :key="error">{{ error }}</li>
        </ul>
      </div>
      <form @submit="onClickSubmit">
        <label >Email</label>
        <input
          v-model="signupData.email"
          type="text"
          name="email"
          placeholder="Email"
        />
        <label >Username</label>
        <input
          v-model="signupData.username"
          type="text"
          name="username"
          placeholder="Username"
        />
        <label >Password</label>
        <input
          v-model="signupData.password"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
    <div v-else>
      <h1>User Created</h1>
      <router-link to="/">Return</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpForm',
  data() {
    return {
      signupData: {
        username: '',
        email: '',
        password: '',
      },
      isCreated: false,
      errors: [

      ]
    }
  },
  methods: {
    async postUser(user) {
      const response = await fetch('http://localhost:3000/api/user', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(user),
      })
      return response.json()
    },
    onClickSubmit(e) {
      this.errors = []
      if(this.signupData.username && this.signupData.email && this.signupData.password) {
        this.isCreated = true
        this.postUser(this.signupData)
      }
      if(!this.signupData.username) {
        this.errors.push('Username required')
      }
      if(!this.signupData.email) {
        this.errors.push('Email required')
      }
      if(!this.signupData.password) {
        this.errors.push('Password is required')
      }
      e.preventDefault()
    },
  },
}
</script>

<style scoped>
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
