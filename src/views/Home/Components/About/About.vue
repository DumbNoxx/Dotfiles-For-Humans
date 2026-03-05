<script setup lang="ts">
import AboutCard from './component/AboutCard.vue';
import AboutExpertise from './component/AboutExpertise.vue';

</script>
<template>
    <section>
        <h2>ABOUT</h2>
        <article>
            <AboutCard title="INTENT" description=" Performance is found in what is removed. I focus on technical rigor, low-level precision, and logic
            that stays out of its own way." />
            <AboutCard title="BACKGROUND" description="Over three years of experience in software development, I specialize in creating clean, efficient,
                    and user-centered digital experiences." />
            <AboutExpertise />

            <AboutCard title="APPROACH"
                description="I believe in minimalism not just as an aesthetic choice, but as a development philosophy. By focusing on what truly matters and eliminating unnecessary complexity, I create digital products that are intuitive, maintainable, and built to last." />
        </article>
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
        margin-bottom: 4em;
    }

    article {
        display: flex;
        flex-direction: column;
        gap: 2em;
    }
}
</style>