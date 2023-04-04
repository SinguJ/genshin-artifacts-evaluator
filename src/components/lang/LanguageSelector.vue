<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAppStore } from '@/stores/app'
import { changeLanguage } from '@/i18n'
import { LANGUAGES } from '@/i18n/lang'
import { Language } from '@vicons/ionicons5'

const appStore = useAppStore()
const { language } = storeToRefs(appStore)

const value = ref(function () {
    return language
}())

const options = ref(function () {
    const _options = []
    for (const key in LANGUAGES) {
        _options.push({
            label: LANGUAGES[key]['label'],
            value: key,
            disabled: language === key
        })
    }
    return _options
}())

function handleUpdateValue (value) {
    for (const key in LANGUAGES) {
        if (value !== key) continue

        changeLanguage(key)
        language.value = key
        localStorage.setItem('LANGUAGE', key)
        break
    }
}
</script>

<template>
    <div class="lang-select">
        <n-popselect
            v-model:value="value"
            :options="options"
            trigger="hover"
            @update:value="handleUpdateValue"
        >
            <div>
                <n-icon class="lang-icon" size="24px">
                    <Language />
                </n-icon>
                <span class="lang-label">{{ LANGUAGES[value]['label'] }}</span>
            </div>
        </n-popselect>
    </div>
</template>

<style scoped>
.lang-select {
    width: 84px;
    height: 24px;
    margin-left: 5px;
    margin-right: 5px;
}
.lang-select > div {
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
}
.lang-select .lang-icon {

}
.lang-select .lang-label {
    display: block;
    min-width: 60px;
    margin-left: 8px;
    text-align: left;
    vertical-align: middle;
}
</style>