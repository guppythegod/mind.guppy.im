<template>
    <label>Email</label>
    <input type="text" v-model="email">
    <label>Password</label>
    <input type="text" v-model="password">
    <button v-on:click="login">LOGIN</button>
</template>

<script>
    import firebase from 'firebase';

    export default {
        name: "Login",
        data() {
            return {
                password: null,
                email: null
            }
        },
        methods: {
            login() {
                firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
                    console.log("logged in"+user.toString());
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>

</style>