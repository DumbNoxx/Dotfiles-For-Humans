<script setup lang="ts">
import About from './Components/About/About.vue';
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
        <hr class="divider2" />
        <About />
        <hr class="divider2" />
    </main>
    <footer>
        <div class="copyright">
            <p>Apache License 2025</p>
            <p>Designed & Developed by Dylan Marcano</p>
        </div>
        <div class="email">
            <a href="mailto:nxusprotonmail@protonmail.com">
                <span>
                    Sent Email
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-arrow-right-icon lucide-arrow-right">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
            </a>
        </div>
    </footer>
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

footer {
    min-height: 7em;
    max-width: 40em;
    margin: 0 auto;
    margin-top: .4em;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .copyright {
        p {
            font-size: .75em;
            color: var(--text-color-neutral)
        }
    }

    .email {

        a {
            display: flex;
            text-decoration: none;
            align-items: center;
            justify-content: center;
            gap: .30em;
            color: var(--text-color);
            transition: color .3s ease;

            &:hover {
                color: var(--text-color-neutral);
            }
        }
    }

}
</style>