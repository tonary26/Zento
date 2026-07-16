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

            console.log('tg exists:', !!tg)
            console.log('tg.initData:', tg?.initData)

            if (!tg || !tg.initData) {
                console.log('ВЫХОД: initData пустой или tg не существует')
                this.loading = false
                return
            }

            tg.ready()
            tg.expand()

            try {
                const { data } = await api.post('/telegram-auth', { initData: tg.initData })
                console.log('Успех, получен user:', data.user)
                this.user = data.user
                this.token = data.token
                localStorage.setItem('token', data.token)
                api.defaults.headers.common['Authorization'] = `Bearer ${data.token}`
            }
            catch (error) {
                console.log('ОШИБКА ЗАПРОСА:', error.response?.status, error.response?.data)
            }
            finally {
                this.loading = false
            }
        }
    },
})