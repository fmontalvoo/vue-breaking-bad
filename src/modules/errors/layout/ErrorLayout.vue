<template>
    <div id="main">
        <div class="fof">
            <RouterView />
            <RouterLink :to="{ name: 'characters' }">Go Home</RouterLink>
        </div>
    </div>
</template>

<style scoped>
#main {
    display: table;
    width: 100%;
    height: 100vh;
    text-align: center;
}

.fof {
    display: table-cell;
    vertical-align: middle;
}
</style>