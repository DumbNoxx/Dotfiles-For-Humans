<script setup lang="ts">
defineProps<{
    data: {
        status: string,
        file?: string
    }
}>()
</script>
<template>
    <div class="status online"></div>
    <p class="online">
        {{ data.status }}
        | working in {{ data.file }}
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

    &.online {
        color: #47B543;
    }
}

.status.online {
    width: .34em;
    height: .34em;
    border-radius: 5em;

    animation: statusGreenOnline 2s linear infinite;
}

@keyframes statusGreenOnline {

    0%,
    100% {
        background-color: #143413;
    }

    50% {
        background-color: #47B543;
    }
}
</style>