<template>
  <div class="hello">
    <h1>Welcome {{ this.$store.getters.getUser.username }}</h1>

<!--    <div v-if="Object.entries(this.$store.getters.getUser).length === 0">-->
<!--      <router-link to="../Login"><button>Log In</button></router-link>-->
<!--      <p></p>-->
<!--      <router-link to="../SignUp"><button>Sign Up</button></router-link>-->
<!--      <hr />-->
<!--    </div>-->
    <h3>Digital Learning for kids</h3>
    <img alt="Happy children laughing lying in grass" src="../img/family.png" />
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
h1{
  color: #475569;
  font-family: "Bauhaus 93";
}
h3{
  color: #475569;
  font-family: "Bauhaus 93";
}
p{
  color: #09523c;
  font-family: Papyrus;
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
}
</style>
