<script setup lang="ts">
const props = defineProps<{
    publishData: string | undefined,
    titleData: string | null,
    shortMessage: string | null,
    urlPost: string,
}>()
</script>
<template>
    <div>
        <p class="publishData">{{ props.publishData }}</p>
        <RouterLink :to="urlPost" class="titleData" view-transition>{{ props.titleData }}</RouterLink>
        <p class="shortMessage">{{ props.shortMessage }}</p>
    </div>
</template>
<style lang="css" scoped>
div {


    .publishData {
        color: var(--text-color-neutral);
        font-size: .7em;
        margin: .3em 0;

        &:hover {
            cursor: default;
        }
    }

    .titleData {
        font-size: 1.4em;
        text-decoration: none;
        color: var(--text-color);
        transition: color .3s ease;

        &:hover {
            color: var(--text-color-neutral);
        }
    }

    .shortMessage {
        color: var(--text-color-neutral);
        font-size: 1em;
        margin: 0;

        &:hover {
            cursor: default;
        }
    }
}
</style>