<script setup lang="ts">
defineProps<{
    data: {
        status: string,
        file?: string
    }
}>()
</script>
<template>
    <div class="status busy"></div>
    <p class="busy">
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

    &.busy {
        color: #F04747;
    }
}

.status.busy {
    width: .34em;
    height: .34em;
    border-radius: 5em;

    animation: statusGreenBusy 2s linear infinite;
}

@keyframes statusGreenBusy {

    0%,
    100% {
        background-color: #970C0C;
    }

    50% {
        background-color: #F04747;
    }
}
</style>