<template>
  <div class="main-panel">
    <n-space vertical size="large">
      <n-layout class="main-panel-layout">
        <n-layout-header class="header">
            <n-card size="small">
                <AppHeader />
            </n-card>
        </n-layout-header>
        <n-layout-content class="content">
            <n-card size="huge">
                <ArtifactsForm :changed="changedArtifacts"/>
            </n-card>
        </n-layout-content>
        <n-layout-footer class="footer">
            <n-card size="huge">
                角色展示区
            </n-card>
        </n-layout-footer>
      </n-layout>
    </n-space>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue"
import ArtifactsForm from "@/components/ArtifactsForm.vue"

export default {
    name: "MainPanel",
    methods: {
        changedArtifacts (formValue) {
          console.log(formValue)
        }
    },
    components: {
        AppHeader,
        ArtifactsForm,
    }
}
</script>

<style scoped>
.main-panel {
    padding: 0 50px;
}
.main-panel-layout .header {
    margin-bottom: 30px;
}
.main-panel-layout .content {
    margin: 30px 0;
}
</style>