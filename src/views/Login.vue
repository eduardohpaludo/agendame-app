<template>
  <VContainer>
    <VTextField v-model="email"/>
    <VTextField v-model="password"/>
    <VBtn @click="sanctum">Sanctum</VBtn>
    <VBtn @click="login">Login</VBtn>
  </VContainer>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';


const email = ref();
const password = ref();

function sanctum(){
  axios.get('sanctum/csrf-cookie').then(r => {
    console.log(r)
  })
}

function login(){
  axios.post('api/login', {
    email: 'test@example.com',
    password: 'password'
  }).then(r => {
    console.log(r)
  })
}

function getUser(){
  axios.get('api/user').then(r => {
    console.log(r)
  })
}
</script>


