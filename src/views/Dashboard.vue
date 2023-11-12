<template>
  <VContainer>
    Dashboard

    <VBtn @click="logout">Logout</VBtn>
  </VContainer>
</template>

<script setup>
import { useAuth } from '@/store/auth';
import { useRouter } from 'vue-router';
const authStore = useAuth();
const router = useRouter();

function logout(){
  authStore.logout().then(() => {
    router.push({ name: 'login' });
  })
}
</script>


