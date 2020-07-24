<template>
    <v-app>
        <div class="password-container">
            <form @submit.prevent="changePassword">
                <div class="form-group">
                    <v-text-field v-model="changePassword.oldPassword" color="success" :rules="rules" hide-details="auto" @keydown="error=[]" label="Previous password" type="password"></v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field v-model="changePassword.newPassword" color="success" :rules="rules" hide-details="auto" @keydown="error=[]" label="New password" type="password"></v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field v-model="changePassword.confirmPassword" color="success" :rules="rules" hide-details="auto" @keydown="error=[]" label="Confirm new password" type="password"></v-text-field>
                </div>
                <v-btn color="primary">Change Password</v-btn>
            </form>
        </div>
    </v-app>
</template>

<script>
export default {
    data(){
        return {
            changePassword:{
                oldPassword: null,
                newPassword: null,
                confirmPassword: null
            }
        }
    }
    
}
</script>

<style>

.password-container{
    width: 400px;
}

form{
    text-align: start;
}

.form-group{
    margin-bottom: 20px;
}

</style>