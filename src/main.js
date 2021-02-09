import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import App from './App.vue';

import en from '/locales/en.json';
import zh from '/locales/zh.json';

let curLocale = sessionStorage.getItem('locale');
if (!curLocale) {
  curLocale = 'zh';
}

const i18n = createI18n({
  legacy: false,
  locale: curLocale,
  messages: {
    en,
    zh,
  }
});

createApp(App).use(i18n).mount('#app');
