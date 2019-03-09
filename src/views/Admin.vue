<template>
    <input type="text" v-model="thought">
    <button v-on:click="submitThought">SUBMIT</button>
</template>

<script>
    export default {
        name: "Admin.vue",
        data() {
            return {
                thought: null
            }
        },
        methods: {
            submitThought() {

            }
        }
    }
</script>

<style scoped>

</style>