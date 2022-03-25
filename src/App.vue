<template>
<NavBar/>
  <router-view/>
</template>
<script>
import NavBar from './components/Navbar.vue'
export default {
  data() {
    
  },
  components:{NavBar}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
max-width: 600px;
  color: #2c3e50;
  margin: 0 auto;
  color: #2c3e50;
}

body{
  background: lightgrey;
}
</style>
