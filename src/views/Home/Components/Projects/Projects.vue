<script setup lang="ts">
import DescriptionCard from './Component/DescriptionCard.vue';

</script>
<template>
    <section>
        <h2>MY REPOS</h2>
        <div class="repos">
            <DescriptionCard url="https://api.github.com/repos/DumbNoxx/goxe" />
            <DescriptionCard url="https://api.github.com/repos/DumbNoxx/PomoHub" :is-web="true" />
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
        gap: 2em;
    }
}
</style>