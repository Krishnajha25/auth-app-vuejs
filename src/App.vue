<template>
  <div id="app">
    <header>
      <div class="logo">
        <router-link to="/"><h1>Vue Auth App</h1></router-link>
      </div>
      <div class="menu">
        <router-link to="/login">Login</router-link>
      </div>
    </header>
    <div class="component-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  // components: {
  //   Home
  // },
  data() {
    return{
      msg: [
      'Red',
      'Yellow',
      'Green'
      ]
    }
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header{
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-content: center;
  text-align: center;
  color: #2c3e50;
  flex-direction: row;
  background: rgb(235, 233, 233);
}

.menu{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  transition: .2s ease-in;
}

a{
  text-decoration: none;
  color: #2c3e50;
}

.menu:hover{
  background: rgb(199, 198, 198);
}

.component-container{
  padding: 20px;
  width: 100%;
  height: 100vh;
}
</style>
