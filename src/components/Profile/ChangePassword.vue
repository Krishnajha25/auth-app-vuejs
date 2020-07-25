<template>
    <v-app>
        <div class="password-container">
            <div class="error" v-if="errors.length">
                <div class="error" v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </div>
            </div>
            <form method="post" autocomplete="off" novalidate="true" @submit.prevent="changePassword">
                <div class="form-group">
                    <v-text-field v-model="changePasswordData.oldPassword" color="success" :rules="rules" hide-details="auto" @keydown="error=[]" label="Previous password" type="password"></v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field v-model="changePasswordData.newPassword" color="success" :rules="rules" hide-details="auto" @keydown="error=[]" label="New password" type="password"></v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field v-model="changePasswordData.confirmPassword" color="success" :rules="rules" hide-details="auto" @keydown="error=[]" label="Confirm new password" type="password"></v-text-field>
                </div>
                <!-- <v-btn color="primary">Change Password</v-btn> -->
                <button class="submit-btn" type="submit">
                    Change Password
                </button>
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

            // console.log("Inside change password");
            var user = firebase.auth().currentUser
            var cred = firebase.auth.EmailAuthProvider.credential(
                user.email,
                this.changePasswordData.oldPassword
            )

            if(!this.changePasswordData.oldPassword || !this.changePasswordData.newPassword || !this.changePasswordData.confirmPassword){
                this.errors.push("All fields are required")
                // console.log("All fields required");
            }else if(this.changePasswordData.newPassword !== this.changePasswordData.confirmPassword){
                this.errors.push("Password do not match")
                // console.log("Password do not match");
            }
            else{
                user.reauthenticateWithCredential(cred)
                .then(() => {
                    user.updatePassword(this.changePasswordData.confirmPassword)
                    .then(() => {
                        console.log("Password updated")
                    })
                    .catch((err) => {
                        this.errors.push(err)
                    })
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