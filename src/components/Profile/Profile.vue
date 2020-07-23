<template>
    <v-app>
        <div class="meta-container">
            <p>Your profile details</p>
            <ul>
                <li><span>  <v-icon large color="teal darken-2">mdi-account</v-icon> Name</span> <input type="text" name="" id="" value="Meera" readonly> </li>
                <li><span>  <v-icon large color="teal darken-2">mdi-email</v-icon> Email</span> <input type="email" name="" id="" value="meera@gmail.com" readonly> </li>
                <!-- <li><span>Other</span> <input type="text" name="" id="" value="meera@gmail.com" readonly> </li> -->
                <li><router-link to="/user/changePassword"><v-btn class="btn-change" raised color="error">Change Password</v-btn></router-link></li>
            </ul>
        </div>
    </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import { mdiAccount } from '@mdi/js';

export default {
    data(){
        return{
            svgPath: mdiAccount,
            // emailIcon: mdiEmail
        }
    },
    computed: {
        ...mapGetters({
            user: 'user'
        })
    }
    
}
</script>

<style>

.meta-container{
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.details-container{
    min-height: 400px;
    /* box-shadow: -3px 8px 15px -3px #ccc; */
    padding: 10px;
}

.details-container p{
    font-size: 20px;
    margin-bottom: 20px;
    border-bottom: 2px solid crimson;
    padding: 5px;
}

.details-container ul {
    padding: 0;
}

.details-container ul li:nth-child(1){
    margin-top: 10px;
    margin-bottom: 10px;
}

.details-container ul li:nth-child(2){
    margin-bottom: 10px;
}

.details-container ul li{
    list-style: none;
    /* background: rgba(173, 216, 230, 0.7); */
    padding: 5px;
    font-size: 20px;
    align-items: center;
    border-radius: 5px;
    transition: .2s ease;
    cursor: pointer;
    text-align: start;
}

.details-container ul li:hover{
    box-shadow: -3px 8px 15px -3px #ccc;
    /* font-size: 21px; */
}

.btn-change{
    margin-top: 20px;
}

.meta-container ul li:nth-child(3){
    width: max-content;
    box-shadow: none;
}
</style>