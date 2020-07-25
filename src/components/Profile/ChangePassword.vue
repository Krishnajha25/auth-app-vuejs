<template>
    <v-app>
        <div class="password-container">
            <form @submit.prevent="changePassword">
                <div class="form-group">
                    <v-text-field v-model="changePasswordData.oldPassword" color="success" :rules="rules" hide-details="auto" @keydown="error=[]" label="Previous password" type="password"></v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field v-model="changePasswordData.newPassword" color="success" :rules="rules" hide-details="auto" @keydown="error=[]" label="New password" type="password"></v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field v-model="changePasswordData.confirmPassword" color="success" :rules="rules" hide-details="auto" @keydown="error=[]" label="Confirm new password" type="password"></v-text-field>
                </div>
                <v-btn color="primary">Change Password</v-btn>
            </form>
        </div>
    </v-app>
</template>

<script>
import firebase from 'firebase'

export default {
    data(){
        return {
            changePasswordData:{
                oldPassword: null,
                newPassword: null,
                confirmPassword: null
            },
            rules: [
                value => !!value || 'Required.'
            ],
            errors: []
        }
    },
    methods: {
        changePassword(){

            var user = firebase.auth().currentUser

            if(!this.changePasswordData.oldPassword || !this.changePasswordData.newPassword || !this.changePasswordData.confirmPassword){
                this.errors.push("All fields are required")
            }else if(this.changePasswordData.newPassword !== this.changePasswordData.confirmPassword){
                this.errors.push("Password do not match")
            }
            else{
                user.updatePassword(this.changePasswordData.confirmPassword)
                .then(() => {
                    console.log("Password updated")
                })
                .catch((err) => {
                    this.errors.push(err)
                })
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