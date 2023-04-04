import { createI18n } from 'vue-i18n'
import { getLanguage, MESSAGES } from './lang'

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: getLanguage(),
    messages: MESSAGES
})

export function changeLanguage (language) {
    i18n.global.locale.value = language
}

export default i18n