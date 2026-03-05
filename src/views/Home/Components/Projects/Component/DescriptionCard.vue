<script setup lang="ts">
import type { RepoApiGithub } from "@/models/repoApiGithub";


const props = withDefaults(defineProps<{
    url: string,
    isWeb?: boolean,
    data: RepoApiGithub | null

}>(), {
    isWeb: false
})


</script>
<template>
    <div class="card-description">
        <template v-if="!props.data">
            <div class="skeleton-link"></div>
            <div class="container">
                <div class="skeleton-text"></div>
                <div class="details">
                    <div v-for="i in 3" :key="i" class="skeleton-icon"></div>
                </div>
            </div>
        </template>

        <template v-else>
            <a :href="props.isWeb ? props.data.homepage : props.data.html_url" target="_blank">
                {{ props.data.name }}
            </a>
            <div class="container">
                <p class="description">{{ props.data.description }}</p>
                <div class="details">
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-star-icon lucide-star">
                            <path
                                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                        <span>{{ props.data.stargazers_count }}</span>
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
                        <span>{{ props.data.forks_count }}</span>
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
                        <span>{{ props.data.license?.name || 'No License' }}</span>
                    </p>
                </div>
            </div>
        </template>
    </div>
</template>
<style lang="css" scoped>
.card-description {

    .skeleton-link,
    .skeleton-text,
    .skeleton-icon {
        background-color: var(--text-color-neutral);
        opacity: 0.1;
        border-radius: 4px;
        display: inline-block;
    }

    .skeleton-link {
        width: 120px;
        height: 1.2em;
        margin-bottom: 0.5em;
    }

    .skeleton-text {
        width: 100%;
        height: 3em;
        margin-top: 0.8em;
    }

    .skeleton-icon {
        width: 24px;
        height: 40px;
    }

    .container {
        min-height: 152px;

        .description {
            margin-top: .8em;
            margin-bottom: 0;
            color: var(--text-color-neutral)
        }

        .details {
            display: flex;
            justify-content: space-between;
            align-items: center;
            min-height: 100px;

            p {
                display: flex;
                flex-direction: column;
                gap: .2em;
                align-items: center;
                min-height: 25px;

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