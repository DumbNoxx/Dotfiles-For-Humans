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
            <div class="button-navs">
                <a href="mailto:nxusdev@protonmail.com" aria-label="Sent me email">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-mail-icon lucide-mail boca">
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" pathLength="1" />
                        <rect x="2" y="4" width="20" height="16" rx="2" pathLength="1" />
                    </svg>
                </a>
                <RouterLink to="/blog" view-transition aria-label="Go to blog">
                    <svg fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M 14.519531 4.0097656 C 14.239531 3.9997656 14 4.2295312 14 4.5195312 L 14 6.5 C 14 6.78 14.22 7 14.5 7 L 14.5 7.0195312 C 20.73 7.2595312 25.740469 12.27 25.980469 18.5 L 26 18.5 C 26 18.78 26.22 19 26.5 19 L 28.480469 19 C 28.770469 19 29.000234 18.760469 28.990234 18.480469 C 28.720234 10.620469 22.379531 4.2797656 14.519531 4.0097656 z M 14.519531 9.0097656 C 14.239531 8.9997656 14 9.2395313 14 9.5195312 L 14 11.5 C 14 11.78 14.22 12 14.5 12 L 14.5 12.029297 C 17.97 12.259297 20.740703 15.03 20.970703 18.5 L 21 18.5 C 21 18.78 21.22 19 21.5 19 L 23.480469 19 C 23.760469 19 24.000234 18.760469 23.990234 18.480469 C 23.720234 13.380469 19.619531 9.2797656 14.519531 9.0097656 z M 5.5 10 C 5.22 10 5 10.22 5 10.5 L 5 21.5 C 5 25.08 7.92 28 11.5 28 C 15.08 28 18 25.08 18 21.5 C 18 17.92 15.08 15 11.5 15 C 11.22 15 11 15.22 11 15.5 L 11 18.5 C 11 18.78 11.22 19 11.5 19 C 12.88 19 14 20.12 14 21.5 C 14 22.88 12.88 24 11.5 24 C 10.12 24 9 22.88 9 21.5 L 9 10.5 C 9 10.22 8.78 10 8.5 10 L 5.5 10 z">
                            </path>
                        </g>
                    </svg>
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<style lang="css" scoped>
section {
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

        .button-navs {

            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 2em;
            transition: color .35s ease;
            margin-right: 5em;

            svg {
                width: 2em;
                height: 2em;
                color: var(--text-color);
                transition: color .3s ease;


                &:hover {
                    color: var(--text-color-neutral);
                }
            }



        }

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

    }
}

@media (width <=40em) {
    section {
        .container {
            .button-navs {
                margin-right: 0;

                svg {
                    width: 1.7em;
                    height: 1.7em;

                }
            }
        }
    }
}
</style>