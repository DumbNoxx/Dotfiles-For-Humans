<script setup lang="ts">
import DescriptionCard from './_components/DescriptionCard.vue';
const data = defineProps<{
    goxe: RepoApiGithub | null,
    pulse: RepoApiGithub | null,
}>();

</script>
<template>
    <section>
        <h2>MY REPOS</h2>
        <div class="repos">
            <DescriptionCard :data="goxe" />
            <DescriptionCard :data="pulse" />
        </div>
    </section>
</template>
<style lang="css" scoped>
section {
    max-width: 40em;
    margin: 0 auto;
    margin-top: 4em;


    h2 {
        color: var(--text-color-neutral);
        font-size: .85em;
        margin-bottom: 2.2em;
    }

    .repos {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
}
</style>
