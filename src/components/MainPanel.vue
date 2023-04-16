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
                <CharactersViewer :characters="characters" />
            </n-card>
        </n-layout-footer>
      </n-layout>
    </n-space>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue"
import ArtifactsForm from "@/components/ArtifactsForm.vue"
import CharactersViewer from "@/components/CharactersViewer.vue";
import {getSuitableCharacters} from "@/common/algorithms";

export default {
    name: "MainPanel",
    data () {
        return {
            characters: []
        }
    },
    methods: {
        changedArtifacts (formValue) {
            let _characters = getSuitableCharacters(formValue)
            console.log(_characters)
            this.characters.splice(0, this.characters.length, ..._characters.filter((obj) => obj.score > 60))
        }
    },
    components: {
        CharactersViewer,
        AppHeader,
        ArtifactsForm,
    }
}
</script>

<style scoped>
.main-panel {
    padding: 0 50px;
    max-width: 1200px;
    margin: 0 auto;
}
.main-panel-layout .header {
    margin-bottom: 30px;
}
.main-panel-layout .content {
    margin: 30px 0;
}
.main-panel-layout .footer {
    margin-bottom: 30px;
}
</style>