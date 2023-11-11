<template>
  <VContainer>
    <VBtn @click="sanctum">Sanctum</VBtn>
    <VBtn @click="login">Login</VBtn>
    <VBtn @click="getUser">User</VBtn>
  </VContainer>
</template>

<script setup>
import Cookie from 'js-cookie';
import axios from 'axios';
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
    config.headers['X-XSRF-TOKEN'] = Cookie.get('XSRF-TOKEN');
    return config
  });
  function sanctum(){
    axios.get('http://localhost:8000/sanctum/csrf-cookie').then(r => {
      console.log(r)
    })
  }

  function login(){
    axios.post('http://localhost:8000/api/login', {
      email: 'test@example.com',
      password: 'password'
    }).then(r => {
      console.log(r)
    })
  }

  function getUser(){
    axios.get('http://localhost:8000/api/user').then(r => {
      console.log(r)
    })
  }
</script>


