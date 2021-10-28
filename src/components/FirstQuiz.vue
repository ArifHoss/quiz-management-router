<template>
  <div>
    <h2>Djur Quiz</h2>

    <ul>
      <li v-for="food in foods" v-bind:key="food.id">
        <h4>{{food.question}}</h4>
        <p>{{food.a1}}</p>

      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "FirstQuiz",
  data: function () {
    return {
      foods: []

    }
  },
  mounted() {
    fetch('http://127.0.0.1:3000/api/quiz/')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data.quiz);
          this.foods = data.quiz;
        });
  }

}
</script>

<style scoped>

h2{
  font-family: Georgia, Helvetica, Arial, san-serif;
}

</style>