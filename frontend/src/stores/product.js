import { defineStore } from 'pinia'
import api from "@/api.js"

export const useProductStore = defineStore('product', {
    state: () => ({
        products: []
    }),

    getters: {
    },

    actions: {
        async getProducts() {
            try {
                const data = await api.get('/api/v1/products')
                this.products = data.data.products
            }
            catch(error) {
                console.log(error)
            }
        }
    },
})