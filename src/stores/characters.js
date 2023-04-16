import { ELEMENTS } from "@/common/enum";
// Albedo
import AlbedoAvatar from '@/assets/characters/albedo/avatar.png'
import AlbedoCard from '@/assets/characters/albedo/card.webp'
import AlbedoFullWish from '@/assets/characters/albedo/full-wish.webp'

export class Character {
    constructor(props) {
        this.id = props.id
        this.key = props.key
        this.name = props.name
        this.element = props.element
        this.images = {
            avatar: props.images.avatar,
            card: props.images.card,
            fullWish: props.images.fullWish,
        }
    }
}

export default {
    Albedo: new Character({
        id: '1360',
        key: 'Albedo',
        name: 'characters.albedo',
        element: ELEMENTS.Geo,
        images: {
            avatar: AlbedoAvatar,
            card: AlbedoCard,
            fullWish: AlbedoFullWish,
        }
    })
}