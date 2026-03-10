<script setup lang="ts">
defineProps<{
    data: {
        status: string,
        file?: string
    }
}>()
</script>
<template>
    <div class="status offline"></div>
    <p class="">
        {{ data.status }}
    </p>
</template>
<style lang="css" scoped>
p {
    color: var(--text-color-neutral);

    font-size: 0.8em;
    font-weight: 400;

    &:hover {
        cursor: default;
    }


}

.status.offline {
    width: .34em;
    height: .34em;
    border-radius: 5em;

    animation: statusGreenOffline 2s linear infinite;
}

@keyframes statusGreenOffline {

    0%,
    100% {
        background-color: var(--text-color-neutral);
    }

    50% {
        background-color: var(--text-color);
    }
}
</style>