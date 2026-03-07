<script setup lang="ts">
import { computed } from 'vue';
import OnlineStatus from './OnlineStatus.vue';
import OfflineStatus from './OfflineStatus.vue';
import BusyStatus from './BusyStatus.vue';
import IdleStatus from './IdleStatus.vue';

const props = defineProps<{
    data: {
        status: string,
        file?: string
    }
}>();

const statusComponent = computed(() => {
    const components: Record<string, any> = {
        online: OnlineStatus,
        offline: OfflineStatus,
        busy: BusyStatus,
        idle: IdleStatus
    };
    return components[props.data.status] || OfflineStatus;
});
</script>
<template>
    <component :is="statusComponent" :data="data" />
</template>
<style lang="css" scoped></style>