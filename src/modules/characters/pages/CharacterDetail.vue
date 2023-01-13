<script setup lang="ts">
import { useCharacter } from '../composables/useCharacter'

const props = defineProps<{ id: number }>()

const {
    hasError,
    character,
    isLoading,
    errorMessage,
} = useCharacter(props.id)

</script>

<template>
    <div>
        <router-link :to="{ name: 'characters-list' }">
            <small>Atras</small>
        </router-link>

        <h3 v-if="isLoading && !character">Loading...</h3>

        <div v-else-if="hasError">
            <h3>¡Algo salio mal!</h3>
            <span><b>Error:</b> {{ errorMessage }}</span>
        </div>

        <div v-else class="character">
            <img :src="character?.image" :alt="character?.name" />
            <ul>
                <li>
                    <b>Nombre:</b> {{ character?.name }}
                </li>
                <li>
                    <b>Especie:</b> {{ character?.species }}
                </li>
                <li>
                    <b>Genero:</b> {{ character?.gender.charAt(0).toUpperCase() }}
                </li>
            </ul>
        </div>

    </div>

</template>

<style scoped>
.character {
    display: flex;
    flex-direction: rows;
}

img {
    width: 300px;
    height: 300px;
    border-radius: 10%;
}
</style>