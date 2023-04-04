// noinspection SpellCheckingInspection

import { zhCN, dateZhCN } from 'naive-ui'
import { LANG_VALUES } from "@/common/enum"
import zh from './zh.js'
import en from './en.js'

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

export const LANGUAGES = {
    [LANG_VALUES.EN]: {
        label: 'English',
        message: en,
        naiveui: {
            locale: null,
            dateLocale: null
        }
    },
    [LANG_VALUES.ZH]: {
        label: '中文',
        message: zh,
        naiveui: {
            locale: zhCN,
            dateLocale: dateZhCN
        }
    },

}

export const MESSAGES = (function () {
    const messages = {}
    for (const key in LANGUAGES) {
        messages[key] = LANGUAGES[key]['message']
    }
    return messages
})()

export function getNaiveUILocale(language) {
    const lang = LANGUAGES[language]
    if (!lang) return;
    const naiveUI = lang['naiveui']
    if (!naiveUI) return;
    return naiveUI['locale']
}

export function getNaiveUIDateLocale(language) {
    const lang = LANGUAGES[language]
    if (!lang) return;
    const naiveUI = lang['naiveui']
    if (!naiveUI) return;
    return naiveUI['dateLocale']
}
