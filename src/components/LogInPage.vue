<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Digital Learning for kids</h3>
    <router-link to="../Login"><button>Log In</button></router-link>
    <p></p>
    <router-link to="../SignUp"><button>Sign Up</button></router-link>
    <hr />
    <p>Free learning!</p>
    <p>Learning by doing!</p>
    <p>Fun for the whole family</p>
    <img alt="Vue logo" src="../img/family.png" />
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
      userState: {},
    }
  },
  mounted() {
    this.userState = this.$store.getters.getUser
    console.log(this.userState)
  },
}
</script>

<style scoped></style>
