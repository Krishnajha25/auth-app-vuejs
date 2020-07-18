<template>
    <div>
       <h2 v-if="user">Welcome. Now you are logged in.</h2>
    </div>
</template>

<style>
    
</style>

<script>
import {mapGetters} from 'vuex'

export default {

    computed: {
        ...mapGetters({
            user: "user"
        })
    }
}
</script>