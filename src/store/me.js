import axios from "axios";
import { defineStore } from "pinia";

export const useMe = defineStore('me', {
    state: () => ({
        user: null
    }),

    actions: {
        async getMe() {
            this.user = await axios.get('/api/user')
        }
    }
})