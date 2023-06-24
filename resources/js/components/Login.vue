<template>
    <div class="mt-3">
        <input v-model="email" type="email" class="form-control mb-3" placeholder="Email">
        <input v-model="password" type="password" class="form-control mb-3" placeholder="Password">
        <div v-if="error" class="text-danger mb-3">{{ error }}</div>
        <input @click.prevent="login" type="submit" class="btn btn-outline-success">
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            email: null,
            password: null,
            error: null,
        }
    },
    methods: {
        login() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/login', {
                    email: this.email,
                    password: this.password
                }).then(response => {
                    localStorage.setItem('x_xsrf_token', response.config.headers['X-XSRF-TOKEN']);
                    this.$router.push({name: 'user.personal'});
                }).catch(error => {
                    this.error = error.response.data.message;
                });
            });
        }
    }
}
</script>

<style scoped>

</style>
