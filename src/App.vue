<template>
  <n-config-provider
    :locale="locale"
    :date-locale="dateLocale"
  >
    <n-message-provider>
      <MainPanel />
    </n-message-provider>
  </n-config-provider>
</template>

<script>
import MainPanel from './components/MainPanel.vue'
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
    MainPanel
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
