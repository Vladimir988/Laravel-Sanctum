<template>
    <div class="container">
        <router-link v-if="token" :to="{name: 'get.index'}">Get</router-link>
        <router-link v-if="!token" :to="{name: 'user.login'}">Login</router-link>
        <router-link v-if="!token" :to="{name: 'user.registration'}">Registration</router-link>
        <router-link v-if="token" :to="{name: 'user.personal'}">Personal</router-link>
        <a v-if="token" @click.prevent="logout" href="#">Logout</a>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index",
    data() {
        return {
            token: null
        }
    },
    methods: {
        logout() {
            axios.post('/logout').then(response => {
                localStorage.removeItem('x_xsrf_token');
                this.$router.push({name: 'user.login'});
            });
        },
        getToken() {
            this.token = localStorage.getItem('x_xsrf_token');
        }
    },
    mounted() {
        this.getToken();
    },
    updated() {
        this.getToken();
    }
}
</script>

<style scoped>

</style>
