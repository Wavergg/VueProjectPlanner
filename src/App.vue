<template>
  <NavBar/>
  <router-view/>
</template>

<script>
import NavBar from './components/Navbar.vue'

export default {
  components: {
    NavBar
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #555;
  max-width: 600px;
  margin: 0 auto;
}

body { 
  background: #f2f2f2;
}
</style>
