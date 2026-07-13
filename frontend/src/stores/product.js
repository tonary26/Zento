import { defineStore } from 'pinia'
import api from "@/api.js"

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        product: {}
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
        },

        async addProduct(formData) {
            try {
                await api.post('/api/v1/products', formData);
            }
            catch(error) {
                console.log(error)
            }
        },

        async show(product_id) {
            try {
                const data = await api.get(`/products/${product_id}`)
                this.product = data.data.product
            }
            catch(error) {
                console.log(error)
            }
        }
    },
})