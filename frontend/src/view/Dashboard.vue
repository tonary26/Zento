<script setup>
import { useProductStore } from "@/stores/product.js"
import { useAuthStore } from "@/stores/auth.js"
import { onMounted } from "vue"

const productStore = useProductStore()
const authStore = useAuthStore()

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
        <div class="topbar__avatar glass">
          <span class="topbar__avatar-letter">Z</span>
        </div>
        <div class="topbar__info">
          <span class="topbar__hello">Добро пожаловать</span>
          <span class="topbar__name">в Zento</span>
        </div>
        <button class="topbar__icon-btn glass" type="button" aria-label="Уведомления">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 3C9.5 3 7.5 5 7.5 7.5V11L5.5 15H18.5L16.5 11V7.5C16.5 5 14.5 3 12 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
            <path d="M10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          </svg>
        </button>
      </header>
      <section class="glass hero">
        <div class="hero__glow"></div>
        <h1 class="hero__title">Привет!<br />Рады видеть вас снова.</h1>
        <p class="hero__subtitle">Здесь - ваши цифровые товары, заказы и баланс. Всё в одном месте.</p>
        <div class="hero__actions">
          <router-link :to="{ name: 'products.index' }" class="btn btn--primary" type="button">Каталог товаров</router-link>
          <button class="btn btn--ghost glass" type="button">Мои покупки</button>
        </div>
      </section>
      <section class="stats">
        <div class="glass stat-card">
          <span class="stat-card__label">Баланс</span>
          <span class="stat-card__value">0.00 ₽</span>
          <span class="stat-card__hint">Пополнить →</span>
        </div>
        <div class="glass stat-card">
          <span class="stat-card__label">Заказы</span>
          <span class="stat-card__value">0</span>
          <span class="stat-card__hint">История →</span>
        </div>
        <div class="glass stat-card">
          <span class="stat-card__label">Избранное</span>
          <span class="stat-card__value">0</span>
          <span class="stat-card__hint">Открыть →</span>
        </div>
      </section>
      <section class="section">
        <div class="section__head">
          <h2 class="section__title">Быстрые действия</h2>
        </div>
        <div class="quick-grid">
          <router-link :to="{ name: 'products.index' }" class="glass quick-card" type="button">
            <span class="quick-card__icon glass">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 7H20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                <path d="M6 7L7 19H17L18 7" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                <path d="M9 4H15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
            </span>
            <span class="quick-card__text">Каталог</span>
          </router-link>
          <button class="glass quick-card" type="button">
            <span class="quick-card__icon glass">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H8L9 16H19L20 8H8.5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                <circle cx="10" cy="20" r="1.4" stroke="currentColor" stroke-width="1.4"/>
                <circle cx="17" cy="20" r="1.4" stroke="currentColor" stroke-width="1.4"/>
              </svg>
            </span>
            <span class="quick-card__text">Заказы</span>
          </button>
          <button class="glass quick-card" type="button">
            <span class="quick-card__icon glass">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 12L12 4L21 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 11V20H18V11" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
              </svg>
            </span>
            <span class="quick-card__text">Главная</span>
          </button>
          <router-link :to="{ name: 'user.profile', params: { id: authStore.user.id } }" class="glass quick-card" type="button">
            <span class="quick-card__icon glass">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="3.4" stroke="currentColor" stroke-width="1.6"/>
                <path d="M5 20C5 16.5 8 14 12 14C16 14 19 16.5 19 20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
            </span>
            <span class="quick-card__text">Профиль</span>
          </router-link>
        </div>
      </section>
      <section class="section">
        <div class="section__head">
          <h2 class="section__title">Рекомендуем</h2>
          <router-link :to="{ name: 'products.index' }" class="section__more" type="button">Все товары →</router-link>
        </div>
        <p v-if="productStore.loading" class="state-message">
          Загружаю товары...
        </p>
        <p v-else-if="productStore.error" class="state-message state-message--error">
          {{ productStore.error }}
        </p>

        <div v-else class="products-row">
          <div v-for="product in productStore.products" :key="product.id" class="glass product-card">
            <router-link :to="{name: 'products.show', params: { id: product.id }}" class="product-card__link">
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
  padding-bottom: calc(96px + env(safe-area-inset-bottom));
  display: flex;
  flex-direction: column;
  gap: 20px;
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

.topbar__avatar {
  width: 40px;
  height: 40px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.topbar__avatar-letter {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.topbar__info {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  flex: 1;
  min-width: 0;
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
}

.hero {
  padding: 26px 20px;
  border-radius: 24px;
  overflow: hidden;
}

.hero__glow {
  position: absolute;
  top: -40%;
  right: -20%;
  width: 220px;
  height: 220px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0) 70%);
  pointer-events: none;
}

.hero__title {
  font-size: 26px;
  font-weight: 700;
  line-height: 1.22;
  margin: 0 0 10px;
  letter-spacing: -0.01em;
  position: relative;
}

.hero__subtitle {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.62);
  line-height: 1.5;
  margin: 0 0 20px;
  max-width: 34ch;
  position: relative;
}

.hero__actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  position: relative;
}

.btn {
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 20px;
  border-radius: 14px;
  text-decoration: none;
  transition: transform 0.15s ease, opacity 0.15s ease;
  font-family: inherit;
}

.btn:active {
  transform: scale(0.96);
}

.btn--primary {
  background: #fff;
  color: #050505;
  box-shadow: 0 6px 18px rgba(255, 255, 255, 0.18);
}

.btn--ghost {
  color: #fff;
  padding: 11px 20px;
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.stat-card {
  padding: 16px 14px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stat-card__label {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.stat-card__value {
  font-size: 18px;
  font-weight: 700;
}

.stat-card__hint {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.4);
  margin-top: 2px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.product-card__link {
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-decoration: none;
  color: inherit;
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
.section__more {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  text-decoration: none;
}

.state-message {
  margin: 0;
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
}

.state-message--error {
  background: rgba(120, 24, 24, 0.24);
  color: #ffd6d6;
  border: 1px solid rgba(255, 95, 95, 0.3);
}

.quick-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

.quick-card {
  text-decoration: none;
  padding: 14px 6px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #fff;
  font-family: inherit;
}

.quick-card__icon {
  width: 42px;
  height: 42px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quick-card__text {
  font-size: 11px;
  text-decoration: none;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
}

.products-row {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  padding-bottom: 4px;
  scroll-snap-type: x mandatory;
}

.products-row::-webkit-scrollbar {
  display: none;
}

.product-card {
  flex: 0 0 132px;
  padding: 12px;
  border-radius: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  scroll-snap-align: start;
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
    gap: 16px;
  }
  .hero__title {
    font-size: 22px;
  }
  .quick-grid {
    gap: 8px;
  }
  .stat-card__value {
    font-size: 16px;
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
}
</style>
