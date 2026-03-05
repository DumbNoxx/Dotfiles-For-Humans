<script setup lang="ts">
const props = defineProps<{
    title: string,
    description: string,
}>()
</script>
<template>
    <div>
        <h3>{{ props?.title }}</h3>
        <p>
            {{ props?.description }}
        </p>
    </div>
</template>
<style lang="css" scoped>
div {
    h3 {
        font-size: .70em;
        color: var(--text-color-neutral)
    }
}
</style>