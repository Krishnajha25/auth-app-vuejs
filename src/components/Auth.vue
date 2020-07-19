<template>
    <div class="auth-container">
        <div class="left">

        </div>
        <div class="right">
            <div class="error" v-if="error.length">
                <h4 v-for="(e, index) in error" :key="index" class="error-text">{{ e }}</h4>
            </div>

            <!-- Login form -->
            <div class="login-form-container" v-if="login" @submit.prevent="loginSubmit">
                <h3>Login</h3>
                <form method="post" name="loginForm" autocomplete="off" novalidate="true">
                    <div class="form-group">
                        <!-- <label for="email">Email</label> -->
                        <v-text-field v-model="loginFormData.email" color="success" :rules="rules" hide-details="auto" @keydown="error=[]" label="Email" type="email" autofocus></v-text-field>
                        <!-- <input @keydown="error=[]" v-model="loginFormData.email" type="email" id="email" name="email" placeholder="Email"> -->
                    </div>
                    <div class="form-group">
                        <!-- <label for="password">Password</label> -->
                        <v-text-field v-model="loginFormData.password" color="success" :rules="rules" hide-details="auto" @keydown="error=[]" label="Password" type="password"></v-text-field>
                        <!-- <input @keydown="error=[]" v-model="loginFormData.password" type="password" id="password" name="password" placeholder="Password"> -->
                    </div>
                    <button class="submit-btn" type="submit">
                        Login
                    </button>
                </form>
                <p class="new-user-cta" @click="registerForm">New user? Register here</p>
            </div>

            <!-- Register form -->
            <div class="regiter-form-container" v-if="register" @submit.prevent="registerSubmit">
                <h3>Register</h3>
                <form method="post" name="registerForm" autocomplete="off" novalidate="true">
                    <div class="form-group">
                        <v-text-field v-model="registerFormData.username" :rules="rules" hide-details="auto" @keydown="error=[]" label="Username"></v-text-field>
                    </div>
                    <div class="form-group">
                        <v-text-field v-model="registerFormData.email" :rules="rules" hide-details="auto" @keydown="error=[]" label="Email" type="email"></v-text-field>
                    </div>
                    <div class="form-group">
                        <v-text-field v-model="registerFormData.password" :rules="rules" hide-details="auto" @keydown="error=[]" label="Password" type="password"></v-text-field>
                    </div>
                    <button class="submit-btn" type="submit">
                        Register
                    </button>
                </form>
                <p class="new-user-cta" @click="loginForm">Already have account? Login here</p>
            </div>
        </div>
        <div id="snackbar">You can now log in</div>
    </div>
</template>

<script>
import firebase from 'firebase'
// import func from '../../vue-temp/vue-editor-bridge'

export default {
    data(){
        return{
            register: false,
            login: true,
            loginFormData: {
                email: null,
                password: null
            },
            registerFormData: {
                username: null,
                email: null,
                password: null
            },
            error: [],
            rules: [
                value => !!value || 'Required.'
            ]

        }
    },
    methods: {
        registerForm(){
            this.register = true
            this.login = false
        },
        loginForm(){
            this.register = false
            this.login = true
        },
        loginSubmit(){
            if(this.loginFormData.email && this.loginFormData.password){
                if(this.validateEmail(this.loginFormData.email)){
                    firebase
                        .auth()
                        .signInWithEmailAndPassword(this.loginFormData.email, this.loginFormData.password)
                        .then(() => {
                            // this.showSnackbar()
                            localStorage.loggedIn = true
                            // localStorage.username = user.
                            localStorage.email = 
                            this.$router.replace({name: 'Welcome'})
                        })
                        .catch(err => {
                            if(err.code === "auth/user-not-found"){
                                this.error.push("Email is not registered")
                            }
                            else if(err.code === "auth/wrong-password"){
                                this.error.push("Email id or password is wrong")
                            }
                            else{
                                this.error.push("Some error occured. Please try again!")
                            }
                            // this.error = err.code
                            // console.log(err)
                        })
                }
                else{
                    this.error.push("Please enter a valid email")
                }
            }
            else{
                this.error.push("Email and password are required.")
            }
        },
        registerSubmit(){
            if(this.registerFormData.email && this.registerFormData.password){
                if(this.validateEmail(this.registerFormData.email)){
                    if(this.registerFormData.password.length >= 6){
                        firebase
                        .auth()
                        .createUserWithEmailAndPassword(this.registerFormData.email, this.registerFormData.password)
                        .then(data => {
                            
                            data.user
                                .updateProfile({
                                    displayName: this.registerFormData.username
                                })
                                .then(() => {
                                    // console.log()
                                    localStorage.username = this.registerFormData.username
                                    localStorage.email = this.registerFormData.email    
                                    this.$router.replace({name: 'Welcome'})
                                })
                        })
                        .catch(err => {
                            this.error.push(err.message)
                            // console.log(err.message)
                        })
                    }
                    else{
                        // console.log( typeof(this.registerFormData.password.length))
                        this.error.push("Password should contain atleast 6 characters")
                    }
                }
                else{
                    this.error.push('Please enter a valid email')
                }
            }
            else{
                this.error.push('Email and password are required')
            }
        },
        validateEmail(email){
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email)
        },
        showSnackbar(){
            const x = document.getElementById("snackbar")
            x.className = "show"
            console.log("Snackbar called")
            setTimeout(function(){
                x.className = x.className.replace("show", "")
            }, 3000)
        },
    },
    mounted(){
        console.log('Login page mounted')
    }
}
</script>

<style scoped>

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.auth-container{
    width: 60%;
    margin: 0 20%;
    display: flex;
    justify-content: space-evenly;
}

.left{
    background: url('../assets/login.svg');
    height: 320px;
    width: 50%;
    background-size: contain;
    background-repeat: no-repeat;
}

.right{
    height: 320px;
    width: 40%;
    margin: 0 5%;
}

h3{
    text-align: start;
    /* border-bottom: 2px solid #6c63ff; */
    margin-bottom: 20px;
}

.error-text{
    border: 1px solid #dd3030;
    background: #f07b7b;
    color: #ffffff;
    padding: 5px;
    margin-bottom: 20px;
    text-align: center;
    transition: .3s ease-in;
}

form{
    text-align: start;
}

.form-group {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    margin-bottom: 20px;
}

/* label{
    font-size: 12px;
    margin-bottom: 4px;
    padding-left: 5px;
} */

input{
    width: 100%;
    border-bottom: 2px solid #ccc;
    padding: 5px;
}

input::placeholder{
    display: flex;
    align-items: center;
}

.submit-btn {
    cursor: pointer;
    background: #6c63ff;
    border: none;
    width: 80px;
    height: 30px;
    border-radius: 5px;
    color: #fff;
    transition: .2s ease-in-out;
}

.submit-btn:hover{
    background: #564fce;
    box-shadow: 0px 5px 10px #807f7f;
}

p{
    cursor: pointer;
    margin-top: 20px;
    text-align: start;
}

 /* The snackbar - position it at the bottom and in the middle of the screen */
#snackbar {
  visibility: hidden; /* Hidden by default. Visible on click */
  min-width: 250px; /* Set a default minimum width */
  margin-left: -125px; /* Divide value of min-width by 2 */
  background-color: #333; /* Black background color */
  color: #fff; /* White text color */
  text-align: center; /* Centered text */
  border-radius: 2px; /* Rounded borders */
  padding: 16px; /* Padding */
  position: fixed; /* Sit on top of the screen */
  z-index: 1; /* Add a z-index if needed */
  left: 50%; /* Center the snackbar */
  bottom: 30px; /* 30px from the bottom */
}

/* Show the snackbar when clicking on a button (class added with JavaScript) */
#snackbar.show {
  visibility: visible; /* Show the snackbar */
  /* Add animation: Take 0.5 seconds to fade in and out the snackbar.
  However, delay the fade out process for 2.5 seconds */
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

/* Animations to fade the snackbar in and out */
@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
} 

</style>