<template>
  <div class="home">
    <LogInPage msg="Welcome"/>
    <StartPage/>
    <FirstQuiz/>
  </div>

</template>

<script>
// @ is an alias to /src
import LogInPage from "../components/LogInPage";
import StartPage from "../components/StartPage";
import FirstQuiz from "@/components/FirstQuiz";

export default {
  name: 'Home',
  components: {
    FirstQuiz,
    LogInPage,
    StartPage
  }
}
</script>
