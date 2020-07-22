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
          <router-link class="profile-btn" to="/profile"><button class="btn profile">Profile</button></router-link>
          <button class="btn signout" @click.prevent="signOut">Sign Out</button>
        </div>
      </div>
      <div class="menu" v-else>
        <router-link to="/login">Login</router-link>
      </div>
    </header>
    <div class="component-container">
      <transition :name="transitionName" mode="out-in">
        <router-view></router-view>
      </transition>
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
      name: localStorage.getItem('username'),
      transitionName: '',
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
  },
  watch: {
    '$route' (to, from) {
    const toDepth = to.path.split('/')[1].length
    const fromDepth = from.path.split('/')[1].length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
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
  background: #564fce;
  color: #fff;
  /* transition: .2s ease-in; */
}

a{
  text-decoration: none;
  color: #2c3e50;
}
.menu:hover{
  background: #564fce;
  color: #fff
}

.menu:hover .signout-container{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: .2s ease-in;
}

.component-container{
  padding: 20px;
  width: 100%;
  height: 100vh;
}

.signout-container {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 30px;
    left: 0;
    background: #564fce;
    width: 100%;
    height: 60px;
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
  /* padding-bottom: 10px; */
}

.profile:hover{
  color: green;
}
.signout:hover{
  color: #e7e7e7;
}

.profile-btn{
  color: #fff;
}

.profile-btn:hover{
  color: #e7e7e7;
}

.slide-left-leave-active,
.slide-left-enter-active {
  transition: .5s;
}
.slide-left-enter {
  transform: translate(100%, 0);
}
.slide-left-leave-to {
  transform: translate(-100%, 0);
}

.slide-right-leave-active,
.slide-right-enter-active {
  transition: .5s;
}
.slide-right-enter {
  transform: translate(-100%, 0);
}
.slide-right-leave-to {
  transform: translate(100%, 0);
}


</style>