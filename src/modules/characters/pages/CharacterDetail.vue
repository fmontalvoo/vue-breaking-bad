<script setup lang="ts">
import { watch } from 'vue';
import { useRouter } from 'vue-router';

import { useCharacter } from '../composables/useCharacter'

import Logger from '@/utils/logger';

const props = defineProps<{ id: number }>()

const router = useRouter()

const {
    hasError,
    character,
    isLoading,
    errorMessage,
} = useCharacter(props.id)

watch(hasError, () => {
    if (hasError.value) {
        Logger.info('hasError', hasError.value)
        router.replace({ name: 'characters-list' })
    }

})
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