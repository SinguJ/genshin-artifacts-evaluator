import { defineStore } from 'pinia'
import { getLanguage, getNaiveUILocale, getNaiveUIDateLocale } from '@/i18n/lang'

export const useAppStore = defineStore('app', {
    state: () => ({
        language: getLanguage(),
    }),
    getters: {
        locale () {
            return getNaiveUILocale(this.language)
        },
        dateLocale () {
            return getNaiveUIDateLocale(this.language)
        }
    },
})