<script setup>
import { useProductStore } from "@/stores/product.js"
import { reactive } from "vue"

const productStore = useProductStore()
const formData = reactive({
  name: '',
  description: '',
  price: ''
})

const addProduct = async function() {
  await productStore.addProduct(formData)
  Object.assign(formData, {
    name: '',
    description: '',
    price: ''
  })
}

function goBack() {
  // сюда - переход назад/на каталог
}

function handleSubmit() {
  // сюда - отправка данных формы
}
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
          <span class="topbar__name">Новый товар</span>
        </div>
      </header>

      <section class="glass hero hero--form">
        <div class="hero__glow"></div>
        <p class="hero__eyebrow">Добавление товара</p>
        <h1 class="hero__title">Заполните<br />карточку товара</h1>
        <p class="hero__subtitle">Название и цена обязательны, описание можно добавить позже.</p>
      </section>

      <section class="section">
        <form class="glass form-card" @submit.prevent="handleSubmit">
          <label class="field">
            <span class="field__label">Название товара</span>
            <input
                v-model="formData.name"
                type="text"
                class="field__input"
                placeholder="Например, Подарочная карта"
                maxlength="120"
            />
          </label>

          <label class="field">
            <span class="field__label">
              Описание
              <span class="field__optional">необязательно</span>
            </span>
            <textarea
                v-model="formData.description"
                class="field__textarea"
                rows="4"
                maxlength="500"
                placeholder="Кратко расскажите о товаре"
            ></textarea>
          </label>

          <label class="field">
            <span class="field__label">Цена, ₽</span>
            <input
                v-model="formData.price"
                type="number"
                min="0"
                class="field__input"
                placeholder="0"
            />
          </label>

          <div class="form-card__actions">
            <button @click="addProduct" class="btn btn--primary" type="submit">
              Добавить товар
            </button>
            <button class="btn btn--ghost glass" type="button" @click="goBack">
              Отмена
            </button>
          </div>
        </form>
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

.hero {
  padding: 26px 20px;
  border-radius: 24px;
  overflow: hidden;
}
.hero--form {
  padding-bottom: 22px;
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
  margin: 0;
  max-width: 34ch;
  position: relative;
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
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.btn--primary {
  background: #fff;
  color: #050505;
  box-shadow: 0 6px 18px rgba(255, 255, 255, 0.18);
  flex: 1;
}
.btn--ghost {
  color: #fff;
  padding: 11px 20px;
}

.section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form-card {
  padding: 20px;
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.field__label {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.field__optional {
  font-size: 10.5px;
  font-weight: 500;
  text-transform: none;
  letter-spacing: 0;
  color: rgba(255, 255, 255, 0.35);
}

.field__input,
.field__textarea {
  width: 100%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 14px;
  padding: 13px 14px;
  font-size: 14px;
  color: #f5f5f5;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s ease, background 0.15s ease;
}
.field__input::placeholder,
.field__textarea::placeholder {
  color: rgba(255, 255, 255, 0.32);
}
.field__input:focus,
.field__textarea:focus {
  border-color: rgba(255, 255, 255, 0.4);
  background: rgba(255, 255, 255, 0.09);
}
.field__textarea {
  resize: none;
  line-height: 1.5;
}

.form-card__actions {
  display: flex;
  gap: 10px;
  margin-top: 4px;
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