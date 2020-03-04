<template>
  <div id="app">
      <Home/>
  </div>
</template>

<script>
import Home from './pages/home/index.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body{
  width:100%;
  height:100%;
  margin:0;
  padding:0;
}

body{
  background-image: linear-gradient(110deg, #030020 0%, #16094C 30%, #C86DD7 100%);
}
</style>
