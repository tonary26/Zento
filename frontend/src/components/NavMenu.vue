<script setup>
</script>

<template>
  <nav class="glass bottom-nav">
    <router-link :to="{ name: 'dashboard.index' }" class="bottom-nav__item">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 12L12 4L21 12" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M6 11V20H18V11" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
      </svg>
      <span>Главная</span>
    </router-link>
    <router-link :to="{ name: 'products.index' }" class="bottom-nav__item">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 7H20" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
        <path d="M6 7L7 19H17L18 7" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
        <path d="M9 4H15" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      </svg>
      <span>Каталог</span>
    </router-link>
    <button class="bottom-nav__item" type="button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 4H8L9 16H19L20 8H8.5" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>
        <circle cx="10" cy="20" r="1.4" stroke="currentColor" stroke-width="1.4"/>
        <circle cx="17" cy="20" r="1.4" stroke="currentColor" stroke-width="1.4"/>
      </svg>
      <span>Заказы</span>
    </button>
    <router-link :to="{ name: 'user.profile' }" class="bottom-nav__item" type="button">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="3.4" stroke="currentColor" stroke-width="1.7"/>
        <path d="M5 20C5 16.5 8 14 12 14C16 14 19 16.5 19 20" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
      </svg>
      <span>Профиль</span>
    </router-link>
  </nav>
</template>

<style scoped>
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

.bottom-nav {
  position: fixed;
  left: 12px;
  right: 12px;
  bottom: calc(12px + env(safe-area-inset-bottom));
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px;
  z-index: 1000;
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
  text-decoration: none;
  transition: all .25s cubic-bezier(.2,.8,.2,1);
  flex: 1;
}

.bottom-nav__item span {
  font-size: 10.5px;
  font-weight: 600;
}
.bottom-nav__item.router-link-active {
  background: rgba(255,255,255,.12);
  color: white;
  transform: translateY(-2px);
}

@media (min-width: 480px) {
  .bottom-nav {
    max-width: 456px;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
}
</style>