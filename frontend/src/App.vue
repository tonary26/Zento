<script setup>
import NavMenu from "./components/NavMenu.vue"
import { useAuthStore } from "@/stores/auth.js"
import { onMounted } from "vue"

const authStore = useAuthStore()

onMounted(async () => {
  await authStore.authenticate()
})
</script>

<template>
  <div>
    <div v-if="authStore.loading">Загрузка...</div>
    <router-view v-else-if="authStore.isAuthenticated" />
    <NavMenu />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body,
#app {
  background: #050505;
  min-height: 100%;
}
</style>
