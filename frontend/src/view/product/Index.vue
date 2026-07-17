<script setup>
import { useProductStore } from "@/stores/product.js"
import { useAuthStore } from "@/stores/auth.js"
import { onMounted } from "vue"
import { useRouter } from "vue-router"

const productStore = useProductStore()
const authStore = useAuthStore()

const router = useRouter()

function goBack() {
  router.back()
}

onMounted(async () => {
  await productStore.getProducts()
})
</script>

<template>
  <div class="dashboard">
    <div class="bg-orb bg-orb--1"></div>
    <div class="bg-orb bg-orb--2"></div>
    <div class="bg-orb bg-orb--3"></div>

    <div class="dashboard__scroll">
      <header class="glass topbar">
        <button class="topbar__icon-btn glass" type="button" aria-label="Назад" @click="goBack">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M15 5L8 12L15 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
        <div class="topbar__info">
          <span class="topbar__hello">Товары</span>
          <span class="topbar__name">Каталог</span>
        </div>
        <router-link v-if="authStore.isAdmin" :to="{ name: 'products.add' }" class="topbar__icon-btn glass" type="button" aria-label="Добавить товар">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
            <path d="M5 12H19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </router-link>

        <div v-else class="topbar__placeholder"></div>
      </header>

      <section class="glass search-bar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" class="search-bar__icon">
          <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/>
          <path d="M20 20L16.5 16.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
        </svg>
        <input type="text" class="search-bar__input" placeholder="Поиск по каталогу" />
      </section>

      <section class="section section--last">
        <div class="section__head">
          <h2 class="section__title">Все товары</h2>
          <span class="section__count">{{ productStore.products.length }}</span>
        </div>

        <div class="products-grid">
          <div v-for="product in productStore.products" :key="product.id" class="glass product-card">
            <router-link :to="{ name: 'products.show', params: { id: product.id } }" class="product-card__link">
              <img :src="product.image" class="product-card__thumb glass">
              <span class="product-card__title">{{ product.name }}</span>
              <span class="product-card__price">{{ product.price }}₽</span>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  background: #050505;
  color: #f5f5f5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.dashboard__scroll {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: calc(12px + env(safe-area-inset-top)) 16px 24px;
  padding-bottom: calc(24px + env(safe-area-inset-bottom));
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: relative;
  z-index: 1;
}

.bg-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(70px);
  pointer-events: none;
  z-index: 0;
}
.bg-orb--1 {
  width: 260px;
  height: 260px;
  top: -80px;
  left: -60px;
  background: rgba(255, 255, 255, 0.14);
}
.bg-orb--2 {
  width: 220px;
  height: 220px;
  top: 30%;
  right: -80px;
  background: rgba(255, 255, 255, 0.08);
}
.bg-orb--3 {
  width: 300px;
  height: 300px;
  bottom: -100px;
  left: 10%;
  background: rgba(255, 255, 255, 0.06);
}

.glass {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(20px) saturate(140%);
  -webkit-backdrop-filter: blur(20px) saturate(140%);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.16),
      inset 0 -1px 0 rgba(0, 0, 0, 0.3),
      0 8px 24px rgba(0, 0, 0, 0.4);
  border-radius: 20px;
  position: relative;
}
.glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 40%);
  pointer-events: none;
}

.topbar {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  border-radius: 18px;
}

.topbar__info {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  flex: 1;
  min-width: 0;
  text-align: center;
}
.topbar__hello {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.topbar__name {
  font-size: 15px;
  font-weight: 600;
}

.topbar__icon-btn {
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
  cursor: pointer;
  text-decoration: none;
}

.topbar__placeholder {
  width: 38px;
  height: 38px;
  text-decoration: none;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 16px;
}
.search-bar__icon {
  color: rgba(255, 255, 255, 0.4);
  flex-shrink: 0;
}
.search-bar__input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  color: #f5f5f5;
  font-size: 14px;
  font-family: inherit;
}
.search-bar__input::placeholder {
  color: rgba(255, 255, 255, 0.35);
}

.section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.section--last {
  padding-bottom: 4px;
}
.section__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.section__title {
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.01em;
}
.section__count {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.4);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}
.product-card {
  padding: 12px;
  border-radius: 18px;
  flex-direction: column;
  gap: 8px;
}

.product-card__link {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-decoration: none;
  color: inherit;
}

.product-card__thumb {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.08);
}
.product-card__title {
  font-size: 12.5px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.3;
}
.product-card__price {
  font-size: 13px;
  font-weight: 700;
  color: #fff;
}

@media (max-width: 380px) {
  .dashboard__scroll {
    padding-left: 12px;
    padding-right: 12px;
    gap: 14px;
  }
  .products-grid {
    gap: 8px;
  }
}

@media (min-width: 480px) {
  .dashboard__scroll {
    max-width: 480px;
    margin: 0 auto;
    width: 100%;
  }
}

@media (min-width: 768px) {
  .dashboard {
    align-items: center;
  }
  .dashboard__scroll {
    max-width: 520px;
  }
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>