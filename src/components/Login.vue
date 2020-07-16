<template>
    <div class="login-container">
        
        <div class="left">

        </div>
        <div class="right">
            <form method="post" autocomplete="off">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" name="username" placeholder="Username">
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" name="password" placeholder="Password">
                </div>
                <button class="submit-btn" type="submit">
                    Login
                </button>
            </form>
        </div>
        
    </div>
</template>

<script>
export default {
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

.login-container{
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
    font-size: 14px;
}

</style>