import axios from 'axios';
import { defineStore } from "pinia";
import { useMe } from './me';



export const useAuth = defineStore('auth', {
    state: () => ({}),
    actions: {
        sanctum() {
            return axios.get('sanctum/csrf-cookie');
        },
        login(email, password) {
            return axios.post('api/login', {
                email,
                password
              })
        },
        logout(){}
    },
    getters: {
        isLoggedIn() {
            const meStore = useMe()
            return !!meStore.user
        }
    }
})