<template>
    <n-empty v-if="characters.length === 0" size="large" :description="$t('app.charactersViewer.empty')">
    </n-empty>
    <div v-if="characters.length !== 0" class="viewer">
        <CharacterCard
            v-for="character in characters"
            :key="character.name"
            :character="character.character"
            :score="character.score"
        />
    </div>
</template>

<script>
import CharacterCard from "@/components/CharacterCard.vue";

export default {
    name: "CharactersViewer",
    components: { CharacterCard },
    props: {
        characters: {
            type: Array,
            required: true,
        }
    }
}
</script>

<style scoped>
.viewer {

}
</style>