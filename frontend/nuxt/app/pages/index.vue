<template>
    <h1>sign up</h1>
    <form 
        style="display: flex; flex-direction: column; max-width: 200px; gap: 4px;" 
        @submit.prevent="signUp(name, password)">
        <input v-model="name" type="text" role="name" placeholder="name"  />
        <input v-model="password" type="password" role="password" placeholder="password"  />
        <input type="submit" value="sign up" style="text-align: left;">
        <!-- error -->
        <p style="color: red"> {{ error }}</p>
    </form>
</template>

<script setup>
const { $api } = useNuxtApp()

const name = ref('')
const password = ref('')
const error = ref('err text')

 const signUp = async (name, password) => {
    await $api('auth/sign-up', {
        method: 'POST',
        body: {
            name: name,
            password: password,
            },
        }
    ) 
}

</script>