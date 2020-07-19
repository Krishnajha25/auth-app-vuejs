<template>
  <div id="app">
    <header>
      <div class="logo">
        <router-link to="/"><h1>Vue Auth App</h1></router-link>
      </div>
      <div v-if="user.loggedIn" class="menu">
        <!-- <a @click.prevent="signOut">Sign Out</a> -->
        <p > Welcome, {{ user.data.displayName }} </p>
        <!-- <p v-else>Welcome, {{ user.data.displayName }} </p> -->
        <div class="signout-container">
          <router-link to="/profile"><button class="btn profile">Profile</button></router-link>
          <button class="btn signout" @click.prevent="signOut">Sign Out</button>
        </div>
      </div>
      <div class="menu" v-else>
        <router-link to="/login">Login</router-link>
      </div>
    </header>
    <div class="component-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from 'firebase'
export default {
  name: 'App',
  // components: {
  //   Home
  // },
  data() {
    return{
      showSignOut: false,
      name: localStorage.getItem('username')
    }
  },
  methods: {
    signOut(){
      firebase
      .auth()
      .signOut()
      .then(() => {
        localStorage.clear()
        this.$router.replace({
          name: "Login"
        })
      })
    }
  },
  computed: {
    ...mapGetters({
      user: "user"
    })
  },
  mounted(){
    this.computed
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
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  padding: 8px;
  border-radius: 5px;
  /* transition: .2s ease-in; */
}
a{
  text-decoration: none;
  color: #2c3e50;
}
.menu:hover{
  background: #fff
}
.menu:hover .signout-container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  /* transition: .2s ease-in; */
}
.component-container{
  padding: 20px;
  width: 100%;
  height: 100vh;
}
.signout-container {
    display: none;
    position: absolute;
    top: 35px;
    left: 0;
    background: #fff;
    width: 100%;
    height: 100%;
    border-radius: 0 0 5px 5px;
    /* transition: .2s ease-in; */
}
.btn{
  cursor: pointer;
  background: none;
  border: none;
  margin-top: 10px;
  outline: none;
  /* transition: .2s ease-in; */
}

.profile:hover{
  color: green;
}
.signout:hover{
  color: red;
}
</style>