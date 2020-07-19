<template>
    <div>
       <h2 v-if="user.loggedIn">Welcome. Now you are logged in.</h2>
    </div>
</template>

<style>
    
</style>

<script>
import {mapGetters} from 'vuex'
import store from '../store'

export default {

    computed: {
        ...mapGetters({
            user: "user"
        })
    },
    methods: {
        printStore(){
            console.log(store.getters.user.loggedIn)
        }
    },
    mounted(){
        this.printStore()
    }
}
</script>