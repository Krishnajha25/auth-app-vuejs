<template>
<v-app>
    <div class="profile-container">
        <div class="left">
            <div class="profile-pic-container">
                <img src="../assets/women.jpeg" alt="" srcset="">
            </div>
            <div class="profile-name">
               
            </div>
            <div class="menus">
                <ul>
                    <router-link to="/user/profile"><li>Profile</li></router-link>
                    <router-link to="/user/orders"><li>Orders</li></router-link>
                    <router-link to="/user/address"><li>Address</li></router-link>
                    <!-- <router-link to="/user/changePassword"><v-btn class="btn-change" raised color="error">Change Password</v-btn></router-link> -->
                </ul>
            </div>
        </div>
        <div class="right">
            <div class="details-container">
                <router-view></router-view>
            </div>
        </div>
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
    box-shadow: 0px 8px 15px -3px #919191;
    overflow: hidden;
}

.profile-pic-container img{
    cursor: pointer;
    transition: transform .2s ease-in-out;
    width: 100%;
}

.profile-pic-container img:hover{

    transform: scale(1.2);
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
    width: 50%;
    /* display: flex; */
    /* flex-direction: column;
    align-items: flex-start; */
    text-align: left;
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
}

.details-container ul li:hover{
    box-shadow: -3px 8px 15px -3px #ccc;
    /* font-size: 22px; */
}

.btn-change{
    margin-top: 20px;
}

</style>