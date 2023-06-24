<template>
    <div>
        Get
    </div>
</template>

<script>
export default {
    name: "Get",
    methods: {
        getData() {
            axios.get('/api/get').then(response => {
                console.log(response);
            });
        }
    },
    mounted() {
        this.getData();
    }
}
</script>

<style scoped>

</style>
