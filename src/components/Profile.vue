<template>
    <div class="profile-container">
        <div class="left">
            <div class="profile-pic-container">
                <img src="../assets/women.jpeg" alt="" srcset="">
            </div>
            <div class="profile-name">
               
            </div>
            <div class="menus">
                <ul>
                    <li>Profile</li>
                    <li>Orders</li>
                    <li>Address</li>
                    <li>Others</li>
                </ul>
            </div>
        </div>
        <div class="right">
            <div class="details-container">
                <p>Your profile details</p>
                <ul>
                    <li><span>  <v-icon large color="teal darken-2">mdi-account</v-icon> Name</span> <input type="text" name="" id="" value="Meera" readonly> </li>
                    <li><span>  <v-icon large color="teal darken-2">mdi-email</v-icon> Email</span> <input type="email" name="" id="" value="meera@gmail.com" readonly> </li>
                    <li><span>Other</span> <input type="text" name="" id="" value="meera@gmail.com" readonly> </li>
                </ul>
            </div>
        </div>
    </div>
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

.profile-container{
    width: 70%;
    margin: auto 15%;
    /* background: #d2d2d2; */
    height: 100vh;
    display: flex;
    flex-direction: row;
    /* justify-content: space-evenly; */
}

.left{
    width: 40%;
    position: relative;
    display: flex;
    flex-direction: column;
    /* justify-content: left; */
    align-items: center;
    /* text-align: ; */
}

.profile-pic-container{
    height: 170px;
    width: 170px;
    background: crimson;
    border-radius: 50%;
    box-shadow: 3px 5px 15px #919191;
    overflow: hidden;
}

.profile-pic-container img{
    width: 100%;
}

.profile-name{
    font-size: 40px;
    font-weight: 400;
    color: #383838;
    margin-top: 25px;
}

.menus{
    margin-top: 20px;
}

.menu ul{
    margin-left: -40px;
    font-size: 18px;
}

.menus ul li{
    margin-bottom: 10px;
    display: flex;
    align-items: flex-start;
    list-style: none;
    color: #cccccc;
    font-size: 20px;
    margin-left: -36px;
}

.menus ul li:nth-child(1){
    color: #383838;
}

.right{
    width: 60%;
    /* display: flex; */
    /* flex-direction: column;
    align-items: flex-start; */
    text-align: left;
}

.details-container{
    min-height: 400px;
    background: #f5f5f5;
    box-shadow: 0px 5px 10px #919191;
    padding: 10px;
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
    background: rgba(173, 216, 230, 0.7);
    padding: 5px;
}

</style>