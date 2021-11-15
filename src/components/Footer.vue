<template>
  <div>
    <footer>
      <p id="createdBy">
        Created by:
        <a class="nav-link"
          href="https://www.linkedin.com/in/arif-hossain-92b438206/"
          target="_blank"
          >Arif Hossain,</a
        >
        <a class="nav-link"
          href="https://www.linkedin.com/in/karin-ismael-589285157/"
          target="_blank"
        >
          Karin Ismael,
        </a>
        <a class= "nav-link" href="#" target="_blank"> Jonathan Lissman & </a>
        <a class= "nav-link" href="#" target="_blank"> Tobias Ekman </a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
footer {
  /*font-family: Roboto,sans-serif;*/
  font-family: 'Quicksand', sans-serif;
  color: #475569;
  padding: 0.05rem 1rem;
  margin: 50px auto auto auto;
  width: 90%;
  font-size: 0.7rem;
  background-color: #c9f6e9;
  /*border: solid 1px black;*/
  border-radius: 10px;
}
p{
  font-size: 15px;
}
a{
  font-size: 12px;
  color: #475569;
}
.nav-link:hover {
  color: #5bc293;
}
#createdBy {
  float: bottom;
}


</style>
