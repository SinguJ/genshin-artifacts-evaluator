<template>
    <n-grid x-gap="12" :cols="5">
        <n-gi offset="1" span="3">
            <n-gradient-text :font-size="32" type="info" class="title">
                <b>{{ $t('app.title') }}</b>
            </n-gradient-text>
        </n-gi>
        <n-gi class="language-selector">
            <LanguageSelector />
        </n-gi>
    </n-grid>
</template>

<script>
import LanguageSelector from "@/components/lang/LanguageSelector.vue";

export default {
    name: "AppHeader",
    components: {
        LanguageSelector,
    }
}
</script>

<style scoped>
.language-selector > * {
    height: 100%;
}
.title {
    letter-spacing: 12px;
}
</style>