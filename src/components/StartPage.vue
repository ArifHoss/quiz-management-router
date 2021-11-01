<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <article class="startQuiz">
      <p>Lägg in quiz</p>
    </article>

    <article class="startQuiz">
      <p>Lägg in quiz</p>
    </article>

    <article class="startQuiz">
      <p>Lägg in quiz</p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'StartPage',
  props: {
    msg: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
