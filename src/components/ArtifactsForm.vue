<template>
    <n-form
            ref="formRef"
            size="large"
            :label-width="80"
            :model="formValue"
            :rules="rules"
    >
        <n-form-item :label="$t('app.form.position')">
            <n-radio-group v-model:value="formValue.position" size="large">
                <n-radio-button
                        v-for="position in data.positions"
                        :key="position.value"
                        :value="position.value"
                >
                    <n-icon color="#0e7a0d" :name="position.icon">
                    </n-icon>
                    {{ $t(position.labelKey) }}
                </n-radio-button>
            </n-radio-group>
        </n-form-item>
        <n-form-item :label="$t('app.form.mainStat')">
            <n-select
                v-model:value="formValue.mainStat"
                filterable
                :placeholder="$t('app.form.mainStatPlaceholder')"
                :options="data.mainStats"
            >
            </n-select>
        </n-form-item>
        <n-form-item :label="$t('app.form.subStat1')">
            <n-select
                v-model:value="formValue.subStat1"
                filterable
                :placeholder="$t('app.form.subStat1Placeholder')"
                :options="data.subStats"
            >
            </n-select>
        </n-form-item>
        <n-form-item :label="$t('app.form.subStat2')">
            <n-select
                v-model:value="formValue.subStat2"
                filterable
                :placeholder="$t('app.form.subStat2Placeholder')"
                :options="data.subStats"
            >
            </n-select>
        </n-form-item>
        <n-form-item :label="$t('app.form.subStat3')">
            <n-select
                v-model:value="formValue.subStat3"
                filterable
                :placeholder="$t('app.form.subStat3Placeholder')"
                :options="data.subStats"
            >
            </n-select>
        </n-form-item>
        <n-form-item :label="$t('app.form.subStat4')">
            <n-select
                v-model:value="formValue.subStat4"
                filterable
                :placeholder="$t('app.form.subStat4Placeholder')"
                :options="data.lastSubStats"
            >
            </n-select>
        </n-form-item>
    </n-form>
</template>

<script>
import { defineComponent, ref } from "vue"
import { Positions, MainStats, SubStats } from "@/stores/data";

const formRef = ref(null);

export default defineComponent({
    name: "ArtifactsForm",
    setup () {
        return {
            formRef,
            data: {
                positions: Positions,
                mainStats: MainStats,
                subStats: SubStats,
                lastSubStats: [{
                    labelKey: 'artifacts.stats.none',
                    icon: '',
                    value: null,
                }].concat(SubStats)
            },
        }
    },
    props: {
        changed: {
            type: Function,
            required: true,
        }
    },
    data() {
        return {
            formValue: {
                position: 'flowerOfLife',
                mainStat: null,
                subStat1: null,
                subStat2: null,
                subStat3: null,
                subStat4: null,
            }
        }
    },
    watch: {
        formValue: {
            deep: true,
            handler () {
                this.changed(this.formValue)
            }
        }
    }
})
</script>

<style scoped>

</style>