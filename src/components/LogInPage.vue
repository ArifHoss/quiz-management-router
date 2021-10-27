<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Digital Learning for kids</h3>
    <button>Log in</button>
    <p></p>
    <button>Create User</button>
    <hr>
    <p>Free learning!</p>
    <p>Learning by doing!</p>
    <p>Fun for the whole family</p>
    <img alt="Vue logo" src="../img/family.png">
  </div>

</template>

<script>
export default {
  name: "LogInPage",
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>