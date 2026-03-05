<script setup lang="ts">
import type { UserApiGithub } from '@/models/userApiGithub';



const dataGh = defineProps<{
    data: UserApiGithub | null
}>();

</script>
<template>
    <section>
        <h1>Dylan Marcano</h1>
        <p id="job-title">SOFTWARE DEVELOPER</p>
        <div class="container">
            <p v-if="!dataGh.data" class="skeleton-bio"></p>
            <p v-else>{{ dataGh.data.bio }}</p>
            <a href="/blog">
                <span>Blog</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-arrow-right-icon lucide-arrow-right">
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
            </a>
        </div>
    </section>
</template>

<style lang="css" scoped>
section {
    max-width: 40em;
    margin: 0 auto;
    margin-top: 7em;
    margin-bottom: 5em;

    h1 {
        color: var(--text-color);
        font-size: 4em;
        margin: 0;
    }

    #job-title {
        margin-top: .4em;
        color: var(--text-color-neutral);
        font-weight: 100;
    }

    .container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .skeleton-bio {
            width: 60%;
            background: var(--text-color-neutral);
            opacity: 0.1;
            border-radius: 4px;
            animation: pulse 2s infinite;
        }

        p {
            min-height: 17px;
        }

        a {
            color: var(--text-color);
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: .5em;
            transition: color .35s ease;
            visibility: hidden;

            svg {
                width: 1.2em;
                height: 1.2em;
            }

            &:hover {
                color: lch(81.69% 0.01 296.81);
            }
        }
    }
}
</style>