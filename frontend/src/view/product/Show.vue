<script setup>
import { useProductStore } from "@/stores/product.js"
import { onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"

const productStore = useProductStore()

const route = useRoute()
const router = useRouter()

function goBack() {
  router.back()
}

onMounted(async () => {
  await productStore.showProduct(route.params.id)
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
          <span class="topbar__hello">Каталог</span>
          <span class="topbar__name">Товар</span>
        </div>
        <button class="topbar__icon-btn glass" type="button" aria-label="В избранное">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path d="M12 19.5C12 19.5 4 15 4 9.5C4 6.9 6 5 8.5 5C10 5 11.2 5.8 12 7C12.8 5.8 14 5 15.5 5C18 5 20 6.9 20 9.5C20 15 12 19.5 12 19.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
          </svg>
        </button>
      </header>

      <section class="glass gallery">
        <div class="gallery__thumb"></div>
      </section>

      <section class="glass product-info">
        <div class="product-info__top">
          <h1 class="product-info__title">{{ productStore.product.name }}</h1>
          <span class="product-info__price">{{ productStore.product.price }} ₽</span>
        </div>
      </section>

      <section v-if="productStore.product.description"
          class="section">
        <div class="section__head">
          <h2 class="section__title">Описание</h2>
        </div>
        <div class="glass description-card">
          <p class="description-card__text">
            {{ productStore.product.description }}
          </p>
        </div>
      </section>
      <section v-else class="section">
        <div class="section__head">
          <h2 class="section__title">Описание отсутствует</h2>
        </div>
      </section>
    </div>

    <div class="glass buy-bar">
      <div class="buy-bar__price">
        <span class="buy-bar__price-label">Цена</span>
        <span class="buy-bar__price-value">{{ productStore.product.price }}₽</span>
      </div>
      <button class="btn btn--primary buy-bar__btn" type="button">
        Купить
      </button>
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
}

.gallery {
  padding: 12px;
  border-radius: 24px;
}
.gallery__thumb {
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.08);
}

.product-info {
  padding: 20px;
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.product-info__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
}
.product-info__title {
  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  letter-spacing: -0.01em;
  flex: 1;
}
.product-info__price {
  font-size: 20px;
  font-weight: 700;
  white-space: nowrap;
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

.description-card {
  padding: 18px;
  border-radius: 18px;
}
.description-card__text {
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
}

.buy-bar {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: calc(12px + env(safe-area-inset-bottom));
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 10px 10px 18px;
  z-index: 2;
}
.buy-bar__price {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}
.buy-bar__price-label {
  font-size: 10.5px;
  color: rgba(255, 255, 255, 0.45);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.buy-bar__price-value {
  font-size: 16px;
  font-weight: 700;
}
.buy-bar__btn {
  flex: 1;
}

.btn {
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 20px;
  border-radius: 14px;
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

@media (max-width: 380px) {
  .dashboard__scroll {
    padding-left: 12px;
    padding-right: 12px;
    gap: 16px;
  }
  .product-info__title {
    font-size: 18px;
  }
}

@media (min-width: 480px) {
  .dashboard__scroll {
    max-width: 480px;
    margin: 0 auto;
    width: 100%;
  }
  .buy-bar {
    max-width: 456px;
    margin: 0 auto;
    left: 0;
    right: 0;
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