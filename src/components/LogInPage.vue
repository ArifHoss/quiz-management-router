<template>
  <div class="hello">
    <h1>Welcome {{ user.username }}</h1>
    <h3>Digital Learning for kids</h3>
    <router-link to="../Login"><button>Log In</button></router-link>
    <p></p>
    <router-link to="../SignUp"><button>Sign Up</button></router-link>
    <hr class="line"/>
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
      user: '',
    }
  },
  mounted() {
    this.user = this.$store.getters.getUser
  },
}
</script>

<style scoped></style>
