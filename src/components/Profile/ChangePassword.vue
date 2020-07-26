<template>
    <v-app>
        <div class="success" v-if="success">
            Password changed successfully!
        </div>
        <div class="password-container" v-if="!success">
            
            <div class="error" v-if="errors.length">
                <div class="error" v-for="(error, index) in errors" :key="index">
                    {{ error }}
                </div>
            </div>
            <form method="post" autocomplete="off" novalidate="true" @submit.prevent="changePassword">
                <div class="form-group">
                    <v-text-field v-model="changePasswordData.oldPassword" @keydown="errors=[]" color="success" :rules="rules" hide-details="auto" label="Previous password" type="password"></v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field v-model="changePasswordData.newPassword" @keydown="errors=[]" color="success" :rules="rules" hide-details="auto" label="New password" type="password"></v-text-field>
                </div>
                <div class="form-group">
                    <v-text-field v-model="changePasswordData.confirmPassword" @keydown="errors=[]" color="success" :rules="rules" hide-details="auto" label="Confirm new password" type="password"></v-text-field>
                </div>
                <v-btn type="submit" color="primary">Change Password</v-btn>
                <!-- <button class="submit-btn" type="submit">
                    Change Password
                </button> -->
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
            errors: [],
            success: false
        }
    },
    methods: {
        changePassword(){

            // console.log("Inside change password");
            var user = firebase.auth().currentUser

            if(!this.changePasswordData.oldPassword || !this.changePasswordData.newPassword || !this.changePasswordData.confirmPassword){
                if(!this.errors.includes("All fields are required")){
                    this.errors.push("All fields are required")
                }
                // console.log("All fields required");
            }else if(this.changePasswordData.newPassword !== this.changePasswordData.confirmPassword){
                if(!this.errors.includes("Password do not match")){
                    this.errors.push("Password do not match")
                }
                // console.log("Password do not match");
            }
            else{
                var cred = firebase.auth.EmailAuthProvider.credential(
                    user.email,
                    this.changePasswordData.oldPassword
                )
                user.reauthenticateWithCredential(cred)
                .then(() => {
                    user.updatePassword(this.changePasswordData.confirmPassword)
                    .then(() => {
                        // console.log("Password updated")
                        this.success = true
                    })
                    .catch((err) => {
                        // console.log("Update err", err)
                        if(!this.errors.includes(err)){
                            this.errors.push(err)
                        }
                    })
                })
                .catch((err) => {
                    // console.log("reauthenticate error", err)
                    // this.errors.push(err)
                    if(err.code === "auth/wrong-password"){
                        if(!this.errors.includes("Previous password is wrong.")){
                            this.errors.push("Previous password is wrong.")
                        }
                    }
                })
            }
        },
    },
    mounted(){
        
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

.success{
    color: #fff;
    padding: 10px;
    border-radius: 5px;
}

</style>