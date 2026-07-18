import { defineStore } from 'pinia'
import api from "@/api.js"

export const useProductStore = defineStore('product', {
    state: () => ({
        products: [],
        product: null,
        loading: false,
        error: null
    }),

    getters: {
    },

    actions: {
        async getProducts() {
            this.loading = true
            this.error = null

            try {
                const data = await api.get('/products')
                this.products = data.data.products
            }
            catch(error) {
                console.log(error)
                this.error = error.response?.data?.message || 'Не удалось загрузить товары'
            }
            finally {
                this.loading = false
            }
        },

        async addProduct(formData) {
            this.loading = true
            this.error = null

            try {
                await api.post('/products', formData)
                await this.getProducts()
            }
            catch(error) {
                console.log(error)
                this.error = error.response?.data?.message || 'Не удалось добавить товар'
                throw error
            }
            finally {
                this.loading = false
            }
        },

        async showProduct(id) {
            this.loading = true
            this.error = null

            try {
                this.product = null
                const data = await api.get(`/products/${id}`)
                this.product = data.data.product
            }
            catch(error) {
                console.log(error)
                this.error = error.response?.data?.message || 'Не удалось загрузить данные о товаре'
            }
            finally {
                this.loading = false
            }
        }
    },
})
