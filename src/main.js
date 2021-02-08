import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import App from './App.vue';

import en from '/locales/en.json';
import cn from '/locales/cn.json';

let curLocale = sessionStorage.getItem('locale');
if (!curLocale) {
  curLocale = 'cn';
}

const i18n = createI18n({
  legacy: false,
  locale: curLocale,
  messages: {
    en,
    cn,
  }
});

createApp(App).use(i18n).mount('#app');
