<script setup lang="ts">
defineProps<{
    data: {
        status: string,
        file?: string
    }
}>()
</script>
<template>
    <div class="status idle"></div>
    <p class="idle">
        {{ data.status }}
    </p>
</template>
<style lang="css" scoped>
p {
    font-size: 0.8em;
    font-weight: 400;

    &:hover {
        cursor: default;
    }

    &.idle {
        color: #FAA61A;
    }
}

.status.idle {
    width: .34em;
    height: .34em;
    border-radius: 5em;

    animation: statusGreenIdle 2s linear infinite;
}

@keyframes statusGreenIdle {

    0%,
    100% {
        background-color: #A06603;
    }

    50% {
        background-color: #FAA61A;
    }
}
</style>