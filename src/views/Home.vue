<template>
  <div>
    <div class="home">
      <LogInPage />
      <StartPage />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import LogInPage from '../components/LogInPage'
import StartPage from '../components/StartPage'

export default {
  name: 'Home',
  components: {
    LogInPage,
    StartPage,
  },
}
</script>

<style></style>
