<template class="body">
  <div class="hello">
    <h1>Welcome to <a id="Super-Quizzer">SuperQuizzer</a></h1>

<!--    <div v-if="Object.entries(this.$store.getters.getUser).length === 0">-->
<!--      <router-link to="../Login"><button>Log In</button></router-link>-->
<!--      <p></p>-->
<!--      <router-link to="../SignUp"><button>Sign Up</button></router-link>-->
<!--      <hr />-->
<!--    </div>-->
<!--    <img alt="Happy children laughing lying in grass" src="../img/family.png" />-->
    <h2 v-if="Object.entries(this.$store.getters.getUser).length > 0">
      You are logged in as: {{ this.$store.getters.getUser.username }}
    </h2>
    <img alt="" src="../img/quizTime.jpg" />
    <h3>Digital Learning for kids</h3>
    <p>Free learning!</p>
    <p>Learning by doing!</p>
    <p>Fun for the whole family!</p>


  </div>
</template>

<script>
export default {
  name: 'LogInPage',
}
</script>

<style scoped>
.hello{
  background-image: linear-gradient(#42b983,#09523c,#fffdfd);
/*background-image: linear-gradient(to bottom right, #00ffd9, #ffffff);*/
  border-radius: 10px;
}

/*body > .hello{
  height: 100%;
  width: 100%;
  background-color: #c2ded6;
}*/

h1{
  color: #475569;
  font-family: 'Quicksand', sans-serif;
  font-size: 25px;
  /*font-family: "Bauhaus 93";*/
}
#Super-Quizzer{
  color: #475569;
  font-family: 'Quicksand', sans-serif;
  /*font-family: 'Balsamiq Sans', cursive;*/
  font-size: 25px;
  /*color: #5bc293;*/
  /*font-weight: lighter;*/
}
/*#Super-Quizzer:hover{
  color: #f25e60;
}*/
h2{
  /*font-family: 'Quicksand', sans-serif;*/
  /*font-family: 'Caveat', cursive;*/
  font-family: 'Indie Flower', cursive;
  /*font-family: Rockwell, serif;*/
  font-size: 25px;
  color: #81cea8;
  /*color: #5bc293;*/
}
h3{
  color: #475569;
  font-size: 25px;
  font-family: 'Quicksand', sans-serif;
  /*font-family: "Bauhaus 93";*/
}

p{
  color: #09523c;
  font-family: 'Quicksand', sans-serif;
  /*font-family: Papyrus;*/
}

/*button {*/
/*  width: 60%;*/
/*  height: 40px;*/
/*  border: 2px solid #5bc293;*/
/*  border-radius: 5px;*/
/*  background-color: white;*/
/*  color: #5bc293;*/
/*  font-weight: bolder;*/
/*  padding: 0;*/
/*}*/
/*button:hover {*/
/*  color: white;*/
/*  background-color: #5bc293;*/
/*}*/
/*.sign-out {*/
/*  border: 2px solid #f25e60;*/
/*  background-color: white;*/
/*  color: #f25e60;*/
/*}*/
/*.sign-out:hover {*/
/*  color: white;*/
/*  background-color: #f25e60;*/
/*}*/

img {
  width: 90%;
  max-width: 500px;
  border: 0px;
}
</style>
