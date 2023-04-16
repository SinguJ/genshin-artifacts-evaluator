<template>
  <n-avatar
    round
    size="small"
    :src="elements[element]"
  />
</template>

<script>
import { ELEMENTS } from "@/common/enum";
import Ameno from '@/assets/icons/elements/ameno.svg'
import Cryo from '@/assets/icons/elements/cryo.svg'
import Dendro from '@/assets/icons/elements/dendro.svg'
import Electro from '@/assets/icons/elements/electro.svg'
import Geo from '@/assets/icons/elements/geo.svg'
import Hydro from '@/assets/icons/elements/hydro.svg'
import Pyro from '@/assets/icons/elements/pyro.svg'

export default {
    name: "ElementAvatar",
    props: {
        element: {
            type: String,
            require: true,
        }
    },
    data () {
        return {
            elements: {
                [ELEMENTS.Ameno]: Ameno,
                [ELEMENTS.Cryo]: Cryo,
                [ELEMENTS.Dendro]: Dendro,
                [ELEMENTS.Electro]: Electro,
                [ELEMENTS.Geo]: Geo,
                [ELEMENTS.Hydro]: Hydro,
                [ELEMENTS.Pyro]: Pyro,
            }
        }
    }
}
</script>

<style scoped>

</style>