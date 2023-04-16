<template>
  <a :href="detailsUrl()" target="_blank" style="display: contents">
      <n-card :title="$t(character.name)" class="character" hoverable>
          <template #cover>
              <img :src="character.images.card" alt="CharacterCard">
          </template>
          <ElementAvatar :element="character.element" /><br />
          {{ score.toFixed(2) }}
      </n-card>
  </a>
</template>

<script>
import { Character } from "@/stores/characters";
import ElementAvatar from "@/components/ElementAvatar.vue";

export default {
    name: "CharacterCard",
    components: {
        ElementAvatar
    },
    props: {
        character: {
            type: Character,
            required: true,
        },
        score: {
            type: Number,
            required: true,
        }
    },
    methods: {
        detailsUrl () {
            let urlFormat = this.$t('app.url.charactersDetails')
            for (let key of ['id', 'key', 'name']) {
                console.log(urlFormat, key, this.character[key])
                urlFormat = urlFormat.replaceAll(`$$${key}$$`, this.character[key])
            }
            console.log(urlFormat)
            return urlFormat
        }
    }
}
</script>

<style scoped>
.character {
    width: 182px;
    height: 420px;
}
</style>