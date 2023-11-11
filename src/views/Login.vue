<template>
  <VContainer>
    {{ authStore.isLoggedIn }}
    <VTextField v-model="email"/>
    <VTextField v-model="password"/>
    <VBtn @click="sanctum">Sanctum</VBtn>
    <VBtn @click="login">Login</VBtn>
  </VContainer>
</template>

<script setup>
import { ref } from 'vue';
import { useAuth } from '@/store/auth';

const authStore = useAuth()


const email = ref('test@example.com');
const password = ref('password');

function sanctum(){
  authStore.sanctum()
}

function login(){
  authStore.login(email.value, password.value)
}

</script>


