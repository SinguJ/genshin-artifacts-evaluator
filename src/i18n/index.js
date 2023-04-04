import { createI18n } from 'vue-i18n'
import { LANG_VALUES } from '@/common/enum'
import zh from './zh.js'
import en from './en.js'

const messages = {
    [LANG_VALUES.ZH]: zh,
    [LANG_VALUES.EN]: en,
}

export function getLanguage () {
    const chooseLanguage = window.localStorage.getItem('LANGUAGE')
    if (chooseLanguage) return chooseLanguage

    const language = navigator.language.toLowerCase()
    for (const key in LANG_VALUES) {
        const locale = LANG_VALUES[key]
        if (language.indexOf(locale) > -1) {
            return locale
        }
    }
    return LANG_VALUES.EN
}

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: getLanguage(),
    messages
})

export default i18n