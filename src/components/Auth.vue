<template>
    <div class="auth-container">
        <div class="left">

        </div>
        <div class="right">
            <div class="error" v-if="error">
                <h4 v-for="(e, index) in error" :key="index" class="error-text">{{ e }}</h4>
            </div>
            <div class="login-form-container" v-if="login" @submit.prevent="loginSubmit">
                <h3>Login</h3>
                <form method="post" name="loginForm" autocomplete="off" novalidate="true">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input v-model="loginFormData.email" type="email" id="email" name="email" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model="loginFormData.password" type="password" id="password" name="password" placeholder="Password">
                    </div>
                    <button class="submit-btn" type="submit">
                        Login
                    </button>
                </form>
                <p class="new-user-cta" @click="registerForm">New user? Register here</p>
            </div>

            <div class="regiter-form-container" v-if="register" @submit.prevent="registerSubmit">
                <h3>Register</h3>
                <form method="post" name="registerForm" autocomplete="off" novalidate="true">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input v-model="registerFormData.email" type="email" id="email" name="email" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model="registerFormData.password" type="password" id="password" name="password" placeholder="Password">
                    </div>
                    <button class="submit-btn" type="submit">
                        Register
                    </button>
                </form>
                <p class="new-user-cta" @click="loginForm">Already have account? Login here</p>
            </div>
        </div>
        
    </div>
</template>

<script>
import firebase from 'firebase'

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
                email: null,
                password: null
            },
            error: []

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
            if(this.loginFormData.email !== "" || this.loginFormData.password !== ""){
                // console.log("Inside loginSubmit true")
                firebase
                    .auth()
                    .signInWithEmailAndPassword(this.loginFormData.email, this.loginFormData.password)
                    .then(() => {
                        console.log(this.loginFormData.password.length)
                        this.$router.replace({name: 'Welcome'})
                        // console.log("Welcome ", this.loginFormData.email)
                    })
                    .catch(err => {
                        if(err.code === "auth/user-not-found"){
                            this.error = "Email is not registered"
                        }
                        else if(err.code === "auth/wrong-password"){
                            this.error = "Email id or password is wrong"
                        }
                        else{
                            this.error = "Some error occured. Please try again!"            
                        }
                        // this.error = err.code
                        // console.log(err)
                    })
            }
            else{
                this.error = "Some error occured. Please try again!"
            }
        },
        registerSubmit(){
            if(this.registerFormData.email && this.registerFormData.password){
                if(this.validateEmail(this.registerFormData.email)){
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
                                        this.$router.replace({name: 'Welcome'})
                                    })
                            })
                            .catch(err => {
                                this.error = err.message
                            })
                        }
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
        }
    },
    mounted(){
        // console.log('Login page mounted')
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
    width: 80%;
    margin: 0 10%;
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
    border-bottom: 2px solid #6c63ff;
    margin-bottom: 20px;
}

.error-text{
    border: 1px solid #dd3030;
    background: #f07b7b;
    color: #ffffff;
    padding: 5px;
    margin-bottom: 20px;
    text-align: center;
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

label{
    font-size: 12px;
}

input{
    width: 100%;
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

</style>