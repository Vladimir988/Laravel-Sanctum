<template>
    <div>
        <div class="mt-3">
            <input v-model="name" type="text" class="form-control mb-3" placeholder="Name">
            <input v-model="email" type="email" class="form-control mb-3" placeholder="Email">
            <input v-model="password" type="password" class="form-control mb-3" placeholder="Password">
            <input v-model="password_confirmation" type="password" class="form-control mb-3" placeholder="Confirm password">
            <div v-if="error" class="text-danger mb-3">{{ error }}</div>
            <input @click.prevent="register" type="submit" class="btn btn-outline-success">
        </div>
    </div>
</template>

<script>
export default {
    name: "Registration",
    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
            error: null,
        }
    },
    methods: {
        register() {
            axios.get('/sanctum/csrf-cookie').then(response => {
                axios.post('/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
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
