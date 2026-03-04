<script setup lang="ts">
defineOptions({
    inheritAttrs: false
})
</script>

<template>
    <a v-bind="$attrs" class="svg">
        <slot />
    </a>
</template>

<style scoped>
.svg {
    color: white;
    padding: .4em .4em;
    border-radius: .5em;
    transition: background-color .35s ease;

    &:deep(svg) {
        width: 1.2em;
        height: 1.2em;
        fill: currentColor;
    }

    &:hover {
        cursor: pointer;
        background-color: rgb(43, 43, 43);
    }
}
</style>