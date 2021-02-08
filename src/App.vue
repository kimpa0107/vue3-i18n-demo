<template>
  <div class="container">
    <i18n-demo></i18n-demo>
  </div>
</template>

<script>
import I18nDemo from './components/i18n-demo.vue';
export default {
  name: 'App',
  components: {
    I18nDemo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>