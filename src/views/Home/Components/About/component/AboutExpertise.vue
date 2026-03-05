<script setup lang="ts">
import type { DataExpertise } from "@/models/dataExpertise";
import dataJson from "@/utils/data/expertise.json";
const Data: DataExpertise = dataJson as DataExpertise;
</script>
<template>
    <div class="container-expertise">
        <h3>ls ~/skills/expertise</h3>
        <div v-for="(items, key) in Data" :key="key" class="expertise-group">
            <div v-for="value in items" :key="value.Name" class="container">
                <p class="data-type">[{{ value.type }}]</p>
                <p class="data-name">{{ value.Name }}</p>
                <p class="data-status">{{ value.status }}</p>
            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>
.container-expertise {
    display: flex;
    flex-direction: column;
    gap: 0;

    h3 {
        font-size: .70em;
        color: var(--text-color-neutral);
        margin-bottom: 1em;
    }

    .expertise-group {
        display: flex;
        flex-direction: column;
        margin-bottom: .80em;
    }

    .container {
        display: flex;
        align-items: center;
        width: 100%;
        font-size: .85em;
        margin: -0.4em 0;

        .data-type {
            color: rgb(73, 73, 73);
            margin-right: 2em;
            min-width: 60px;

            &:hover {
                cursor: default;
            }
        }

        .data-name {
            color: var(--text-color-neutral);
            flex-grow: 1;
            text-align: left;
            display: flex;
            gap: 0;
            transition: color .3s ease;

            &:hover {
                color: white;
                cursor: default;
            }

            &::before {
                content: "_";
                opacity: 0;
                transition: opacity .3s ease;
            }

            &:hover::before {
                opacity: 1;
                color: white;
            }
        }

        .data-status {
            color: rgb(73, 73, 73);
            text-align: right;

            &:hover {
                cursor: default;
            }
        }
    }
}
</style>