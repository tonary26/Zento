<script setup>
import { useProductStore } from "@/stores/product.js"
import { reactive } from "vue"
import { useRouter } from "vue-router"

const productStore = useProductStore()
const formData = reactive({
  image: '',
  name: '',
  description: '',
  price: ''
})

const router = useRouter()

const onEnter = function () {
  window.Telegram.WebApp.hideKeyboard()
}

const addProduct = async function() {
  try {
    await productStore.addProduct(formData)
    Object.assign(formData, {
      image: '',
      name: '',
      description: '',
      price: ''
    })
  } catch (error) {
  }
}

function goBack() {
   router.back()
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

      <section class="section">
        <form class="glass form-card" @submit.prevent="addProduct">
          <p v-if="productStore.error" class="state-message state-message--error">
            {{ productStore.error }}
          </p>

          <label class="field">
            <span class="field__label">Изображение товара</span>
            <input
                v-model="formData.image"
                type="text"
                class="field__input"
                placeholder="Вставьте ссылку на изображение"
                @keyup.enter="onEnter"
            />
          </label>
          <label class="field">
            <span class="field__label">Название товара</span>
            <input
                v-model="formData.name"
                type="text"
                class="field__input"
                placeholder="Например, Подарочная карта"
                @keyup.enter="onEnter"
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
                placeholder="Кратко расскажите о товаре"
                @keyup.enter="onEnter"
            ></textarea>
          </label>

          <label class="field">
            <span class="field__label">Цена, ₽</span>
            <input
                v-model="formData.price"
                type="number"
                min="0"
                class="field__input"
                placeholder="1"
                @keyup.enter="onEnter"
            />
          </label>
        </form>

        <div class="glass action-bar">
          <button class="btn btn--ghost glass action-bar__cancel" type="button" @click="goBack">
            Отмена
          </button>
          <button
              class="btn btn--primary action-bar__submit"
              type="button"
              :disabled="productStore.loading"
              @click="addProduct"
          >
            {{ productStore.loading ? 'Добавляю товар...' : 'Добавить товар' }}
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
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
  z-index: 1;
}

.action-bar {
  position: fixed;
  left: 12px;
  right: 12px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  z-index: 999;
  max-width: calc(100vw - 24px);
}

.action-bar__cancel {
  flex: 0 0 auto;
  padding: 12px 14px;
  white-space: nowrap;
}

.action-bar__submit {
  flex: 1;
  min-width: 0;
  padding: 12px 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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

.state-message {
  margin: 0;
  padding: 12px 14px;
  border-radius: 14px;
  font-size: 13px;
  font-weight: 600;
  line-height: 1.4;
}

.state-message--error {
  background: rgba(120, 24, 24, 0.24);
  color: #ffd6d6;
  border: 1px solid rgba(255, 95, 95, 0.3);
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

@media (min-width: 480px) {
  .action-bar {
    max-width: 456px;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
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
