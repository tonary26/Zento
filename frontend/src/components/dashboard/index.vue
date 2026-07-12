<script setup>
import { useProductStore } from "@/stores/product.js"
import { onMounted } from "vue"

const store = useProductStore()

onMounted(async () => {
  await store.getProducts()
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
        <p class="hero__eyebrow">Личный кабинет</p>
        <h1 class="hero__title">Привет!<br />Рады видеть вас снова.</h1>
        <p class="hero__subtitle">Здесь — ваши цифровые товары, заказы и баланс. Всё в одном месте.</p>
        <div class="hero__actions">
          <button class="btn btn--primary" type="button">Каталог товаров</button>
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
          <button class="glass quick-card" type="button">
            <span class="quick-card__icon glass">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M4 7H20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                <path d="M6 7L7 19H17L18 7" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                <path d="M9 4H15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
            </span>
            <span class="quick-card__text">Каталог</span>
          </button>
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
          <button class="glass quick-card" type="button">
            <span class="quick-card__icon glass">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="8" r="3.4" stroke="currentColor" stroke-width="1.6"/>
                <path d="M5 20C5 16.5 8 14 12 14C16 14 19 16.5 19 20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
            </span>
            <span class="quick-card__text">Профиль</span>
          </button>
        </div>
      </section>
      <section class="section">
        <div class="section__head">
          <h2 class="section__title">Рекомендуем</h2>
          <button class="section__more" type="button">Все товары →</button>
        </div>
        <div class="products-row">
          <div v-for="product in store.products" :key="product.id" class="glass product-card">
            <div class="product-card__thumb glass"></div>
            <span class="product-card__title">{{ product.name }}</span>
            <span class="product-card__price">{{ product.price }}₽</span>
          </div>
        </div>
      </section>
      <section class="section section--last">
        <div class="section__head">
          <h2 class="section__title">Последняя активность</h2>
        </div>
        <div class="glass activity-card">
          <div class="activity-card__icon glass">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 7V12L15 14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.6"/>
            </svg>
          </div>
          <div class="activity-card__body">
            <span class="activity-card__title">Пока нет активности</span>
            <span class="activity-card__desc">Ваши действия появятся здесь</span>
          </div>
        </div>
      </section>
    </div>
    <nav class="glass bottom-nav">
      <button class="bottom-nav__item bottom-nav__item--active" type="button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M3 12L12 4L21 12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 11V20H18V11" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
        </svg>
        <span>Главная</span>
      </button>
      <button class="bottom-nav__item" type="button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M4 7H20" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
          <path d="M6 7L7 19H17L18 7" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
          <path d="M9 4H15" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
        </svg>
        <span>Каталог</span>
      </button>
      <button class="bottom-nav__item" type="button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M4 4H8L9 16H19L20 8H8.5" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
          <circle cx="10" cy="20" r="1.4" stroke="currentColor" stroke-width="1.4"/>
          <circle cx="17" cy="20" r="1.4" stroke="currentColor" stroke-width="1.4"/>
        </svg>
        <span>Заказы</span>
      </button>
      <button class="bottom-nav__item" type="button">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="8" r="3.4" stroke="currentColor" stroke-width="1.7"/>
          <path d="M5 20C5 16.5 8 14 12 14C16 14 19 16.5 19 20" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
        </svg>
        <span>Профиль</span>
      </button>
    </nav>
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

/* ==================== ФОНОВЫЕ ПЯТНА (для стекла) ==================== */
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

/* ==================== ЖИДКОЕ СТЕКЛО (базовый класс) ==================== */
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

/* ==================== TOPBAR ==================== */
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

/* ==================== HERO ==================== */
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
.hero__eyebrow {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.55);
  margin: 0 0 10px;
  position: relative;
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

/* ==================== BUTTONS ==================== */
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
.btn--ghost {
  color: #fff;
  padding: 11px 20px;
}

/* ==================== STATS ==================== */
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

/* ==================== SECTIONS ==================== */
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
.section__more {
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
}

/* ==================== QUICK ACTIONS ==================== */
.quick-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.quick-card {
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
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
}

/* ==================== PRODUCTS ROW ==================== */
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

/* ==================== ACTIVITY ==================== */
.activity-card {
  padding: 18px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  gap: 14px;
}
.activity-card__icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.7);
}
.activity-card__body {
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.activity-card__title {
  font-size: 13.5px;
  font-weight: 600;
}
.activity-card__desc {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.45);
}

/* ==================== BOTTOM NAV ==================== */
.bottom-nav {
  position: absolute;
  left: 12px;
  right: 12px;
  bottom: calc(12px + env(safe-area-inset-bottom));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
  z-index: 2;
}
.bottom-nav__item {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px 10px;
  border-radius: 14px;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  font-family: inherit;
  transition: color 0.15s ease, background 0.15s ease;
  flex: 1;
}
.bottom-nav__item span {
  font-size: 10.5px;
  font-weight: 600;
}
.bottom-nav__item--active {
  color: #fff;
  background: rgba(255, 255, 255, 0.1);
}

/* ==================== АДАПТИВ ==================== */
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
  .bottom-nav {
    max-width: 456px;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
}

/* Более широкие экраны (десктоп-превью телеграм веб) */
@media (min-width: 768px) {
  .dashboard {
    align-items: center;
  }
  .dashboard__scroll {
    max-width: 520px;
  }
}
</style>