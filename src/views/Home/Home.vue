<script setup lang="ts">
import Header from './Components/Header/Header.vue';
import Hero from './Components/Hero/Hero.vue';
import Projects from './Components/Projects/Projects.vue';

</script>

<template>
    <main>
        <Header />
        <hr class="divider" />
        <Hero />
        <hr class="divider2" />
        <Projects />
    </main>
</template>


<style scoped>
main {

    .divider {
        position: relative;
        left: 50%;
        right: 50%;

        border: none;
        border-top: 1px solid var(--divider-color);
        width: 100vw;
        margin-left: -50vw;
        margin-right: -50vw;
        margin-top: 0;

    }

    .divider2 {
        position: relative;
        margin: 0 auto;

        border: none;
        border-top: 1px solid var(--divider-color);
        max-width: 40em;
        margin-top: 4em;
    }

}
</style>