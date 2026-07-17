<script setup>
import { useAuthStore } from "@/stores/auth.js"

const authStore = useAuthStore()
</script>

<template>
  <div class="dashboard">
    <div class="bg-orb bg-orb--1"></div>
    <div class="bg-orb bg-orb--2"></div>
    <div class="bg-orb bg-orb--3"></div>

    <div class="dashboard__scroll">
      <header class="glass topbar">
        <div class="topbar__info">
          <span class="topbar__hello">Аккаунт</span>
          <span class="topbar__name">Профиль</span>
        </div>
      </header>
      <section class="glass profile-card">
        <div class="profile-card__glow"></div>
        <div class="profile-card__avatar glass">
          <img class="user-avatar" :src="authStore.user.avatar" :alt="authStore.user?.name" v-if="authStore.user?.avatar" />
        </div>
        <h1 class="profile-card__name">{{ authStore.user?.name }}</h1>
        <span class="profile-card__username">@{{ authStore.user?.username }}</span>
        <div class="profile-card__stats">
          <div class="profile-card__stat">
            <span class="profile-card__stat-value">0</span>
            <span class="profile-card__stat-label">Заказов</span>
          </div>
          <div class="profile-card__divider"></div>
          <div class="profile-card__stat">
            <span class="profile-card__stat-value">0.00 ₽</span>
            <span class="profile-card__stat-label">Баланс</span>
          </div>
          <div class="profile-card__divider"></div>
          <div class="profile-card__stat">
            <span class="profile-card__stat-value">0</span>
            <span class="profile-card__stat-label">Избранное</span>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="section__head">
          <h2 class="section__title">Аккаунт</h2>
        </div>
        <div class="glass menu-list">
          <button class="menu-item" type="button">
            <span class="menu-item__icon glass">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 4H8L9 16H19L20 8H8.5" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                <circle cx="10" cy="20" r="1.4" stroke="currentColor" stroke-width="1.4"/>
                <circle cx="17" cy="20" r="1.4" stroke="currentColor" stroke-width="1.4"/>
              </svg>
            </span>
            <span class="menu-item__text">Мои заказы</span>
            <svg class="menu-item__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="menu-list__divider"></div>
          <button class="menu-item" type="button">
            <span class="menu-item__icon glass">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M12 19.5C12 19.5 4 15 4 9.5C4 6.9 6 5 8.5 5C10 5 11.2 5.8 12 7C12.8 5.8 14 5 15.5 5C18 5 20 6.9 20 9.5C20 15 12 19.5 12 19.5Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
              </svg>
            </span>
            <span class="menu-item__text">Избранное</span>
            <svg class="menu-item__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <div class="menu-list__divider"></div>
          <button class="menu-item" type="button">
            <span class="menu-item__icon glass">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M4 7H20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
                <path d="M6 7L7 19H17L18 7" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>
                <path d="M9 4H15" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
              </svg>
            </span>
            <span class="menu-item__text">Пополнить баланс</span>
            <svg class="menu-item__chevron" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 5L16 12L9 19" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
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
  display: flex;
  flex-direction: column;
}

.dashboard__scroll {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: calc(12px + env(safe-area-inset-top)) 16px 24px;
  padding-bottom: calc(28px + env(safe-area-inset-bottom));
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

.profile-card {
  padding: 28px 20px 22px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: hidden;
}

.profile-card__glow {
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 260px;
  height: 200px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 70%);
  pointer-events: none;
}

.profile-card__avatar {
  width: 76px;
  height: 76px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  position: relative;
}

.user-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}

.profile-card__name {
  font-size: 19px;
  font-weight: 700;
  margin: 0 0 4px;
  letter-spacing: -0.01em;
  position: relative;
}

.profile-card__username {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  position: relative;
}

.profile-card__stats {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 22px;
  width: 100%;
  position: relative;
}

.profile-card__stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
}

.profile-card__stat-value {
  font-size: 15px;
  font-weight: 700;
}

.profile-card__stat-label {
  font-size: 10.5px;
  color: rgba(255, 255, 255, 0.45);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.profile-card__divider {
  width: 1px;
  height: 28px;
  background: rgba(255, 255, 255, 0.14);
}

.section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.section--last {
  align-items: center;
  gap: 10px;
  padding-top: 4px;
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

.menu-list {
  border-radius: 20px;
  padding: 6px;
  display: flex;
  flex-direction: column;
}

.menu-item {
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 8px;
  border-radius: 14px;
  cursor: pointer;
  font-family: inherit;
  color: #fff;
  width: 100%;
  text-align: left;
}

.menu-item__icon {
  width: 36px;
  height: 36px;
  border-radius: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: rgba(255, 255, 255, 0.75);
}

.menu-item__text {
  font-size: 13.5px;
  font-weight: 500;
  flex: 1;
}

.menu-item__chevron {
  color: rgba(255, 255, 255, 0.3);
  flex-shrink: 0;
}

.menu-list__divider {
  height: 1px;
  background: rgba(255, 255, 255, 0.08);
  margin: 2px 8px;
}

@media (max-width: 380px) {
  .dashboard__scroll {
    padding-left: 12px;
    padding-right: 12px;
    gap: 16px;
  }
  .profile-card__stats {
    gap: 12px;
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