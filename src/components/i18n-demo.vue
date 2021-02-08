<template>
  <div class="container">
    <select name="locale" v-model="locale">
      <option value="cn">cn</option>
      <option value="en">en</option>
    </select>

    <div class="msg">{{ t('hello') }}</div>
  </div>
</template>

<script>
import { watch } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
  name: "i18n-demo",
  setup() {
    const { locale, t } = useI18n({
      useScope: 'global',
    });

    watch(locale, (newVal, oldVal) => {
      sessionStorage.setItem('locale', newVal);
    });

    return { locale, t };
  },
};
</script>
