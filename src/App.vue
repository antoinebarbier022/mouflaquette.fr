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

*{
    margin:0;
    padding:0;
}

a{
  color:white;
  text-decoration: none;
}

a:visited {
  color:white;
}

html, body{
  width:100%;
  height:100%;
}

/*
body{
  background-image: linear-gradient(110deg, #030020 0%, #16094C 30%, #C86DD7 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
}*/

body {
	background: linear-gradient(-45deg, #6f52ee, #8945c9, #281a66, #6750eb);
	background-size: 400% 400%;
	animation: gradient 30s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}

</style>
