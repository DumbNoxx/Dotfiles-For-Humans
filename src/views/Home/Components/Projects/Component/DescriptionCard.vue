<script setup lang="ts">
import { getData } from '@/pkg/genericFetch';
import { onMounted, ref } from 'vue';
import type { RepoApiGithub } from "@/models/repoApiGithub";


const props = withDefaults(defineProps<{
    url: string,
    isWeb?: boolean
}>(), {
    isWeb: false
})

const dataRepo = ref<RepoApiGithub | null>(null);

onMounted(async () => {
    dataRepo.value = await getData<RepoApiGithub>(props.url)

})
</script>
<template>
    <div class="card-description">
        <a :href="props.isWeb ? dataRepo?.homepage : dataRepo?.html_url" target="_blank">{{ dataRepo?.name }}</a>
        <div class="container">
            <p class="description">{{ dataRepo?.description }}</p>
            <div class="details">
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-star-icon lucide-star">
                        <path
                            d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                    </svg>
                    <span>{{ dataRepo?.stargazers_count }}</span>
                </p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-git-fork-icon lucide-git-fork">
                        <circle cx="12" cy="18" r="3" />
                        <circle cx="6" cy="6" r="3" />
                        <circle cx="18" cy="6" r="3" />
                        <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
                        <path d="M12 12v3" />
                    </svg>
                    <span>{{ dataRepo?.forks_count }}</span>
                </p>
                <p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-scale-icon lucide-scale">
                        <path d="M12 3v18" />
                        <path d="m19 8 3 8a5 5 0 0 1-6 0zV7" />
                        <path d="M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1" />
                        <path d="m5 8 3 8a5 5 0 0 1-6 0zV7" />
                        <path d="M7 21h10" />
                    </svg>
                    <span>{{ dataRepo?.license.name }}</span>
                </p>
            </div>
        </div>
    </div>
</template>
<style lang="css" scoped>
.card-description {
    .container {
        .description {
            margin-top: .8em;
            margin-bottom: 0;
            color: var(--text-color-neutral)
        }

        .details {
            display: flex;
            justify-content: space-between;
            align-items: center;

            p {
                display: flex;
                flex-direction: column;
                gap: .2em;
                align-items: center;

                svg {
                    color: var(--text-color);
                    transition: .3s ease;
                    width: 1.1em;
                    height: 1.1em;

                    &:hover {
                        color: var(--text-color-neutral);
                        cursor: pointer;
                    }
                }

                span {
                    color: var(--text-color-neutral);
                    font-size: .8em;
                }
            }
        }
    }
}

a {
    text-decoration: none;
    color: var(--text-color);
    transition: color .3s ease;

    &:hover {
        color: var(--text-color-neutral)
    }
}
</style>