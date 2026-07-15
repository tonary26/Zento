import { defineStore } from 'pinia'
import api from "@/api.js"

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        token: localStorage.getItem('token') || null,
        loading: true,
    }),

    getters: {
        isAuthenticated: (state) => !!state.token && !!state.user,
    },

    actions: {
        async authenticate() {
            this.loading = true

            const tg = window.Telegram?.WebApp

            if (!tg || !tg.initData) {
                this.loading = false
                return
            }

            tg.ready()
            tg.expand()

            try {
                const { data } = await api.post('/telegram-auth', { initData: tg.initData })

                this.user = data.user
                this.token = data.token
                localStorage.setItem('token', data.token)

                api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
            }
            catch (error) {
                console.log(error)
            }
            finally {
                this.loading = false
            }
        }
    },
})