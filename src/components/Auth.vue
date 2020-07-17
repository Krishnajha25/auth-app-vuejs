<template>
    <div class="auth-container">
        <div class="left">

        </div>
        <div class="right">
            <div class="error" v-if="error">
                {{ error }}
            </div>
            <div class="login-form-container" v-if="login" @submit.prevent="loginSubmit">
                <form method="post" name="loginForm" autocomplete="off">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input v-model="loginFormData.username" type="text" name="username" placeholder="Username">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model="loginFormData.password" type="password" name="password" placeholder="Password">
                    </div>
                    <button class="submit-btn" type="submit">
                        Login
                    </button>
                </form>
                <p class="new-user-cta" @click="registerForm">New user? Register here</p>
            </div>

            <div class="regiter-form-container" v-if="register" @submit.prevent="registerSubmit">
                <form method="post" name="registerForm" autocomplete="off">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input v-model="registerFormData.username" type="text" name="username" placeholder="Username">
                    </div>
                    <div class="form-group">
                        <label for="username">Email</label>
                        <input v-model="registerFormData.email" type="email" name="email" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input v-model="registerFormData.password" type="password" name="password" placeholder="Password">
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
export default {
    data(){
        return{
            register: false,
            login: true,
            loginFormData: {
                username: '',
                password: ''
            },
            registerFormData: {
                username: '',
                email: '',
                password: ''
            },
            error: null

        }
    },
    methods: {
        registerForm(){
            this.register = true
            this.login = false
            // console.log("Login -> ", this.login)
            // console.log("Register -> ", this.register)
        },
        loginForm(){
            this.register = false
            this.login = true
            // console.log("Login -> ", this.login)
            // console.log("Register -> ", this.register)
        },
        loginSubmit(){
            if(this.loginFormData.username == null || this.loginFormData.password == null){
                this.error = "All fields are required"
            }
            else{
                console.log("Login submitted")
                console.log(this.loginFormData.username)
            }
        },
        registerSubmit(){
            if(this.registerFormData.username == null || this.registerFormData.email == null || this.registerFormData.password == null){
                this.error = "All fields are required"
            }
            else{
                console.log("Register submitted")
                console.log(this.registerFormData.username)
                console.log(this.registerFormData.email)
            }
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