<template>
  <n-config-provider
    :locale="locale"
    :date-locale="dateLocale"
  >
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </n-config-provider>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'

export default {
  name: 'App',
  setup () {
      const appStore = useAppStore()
      const { locale, dateLocale } = storeToRefs(appStore)

      return {
          locale,
          dateLocale
      }
  },
  components: {
    HelloWorld
  }
}
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
