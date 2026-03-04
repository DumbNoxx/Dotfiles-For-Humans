<script setup lang="ts">
import SvgIcon from '@/components/atoms/Svg/Svg.vue';

</script>

<template>
    <header>
        <div class="status-data">
            <div class="status"></div>
            <p>Available for projects</p>
        </div>
        <div class="buttons-tools">
            <SvgIcon href="https://github.com/dumbnoxx/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-github-icon lucide-github">
                    <path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
            </SvgIcon>
            <SvgIcon href="https://mastodon.social/@nxus" rel="me" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-mastodon" viewBox="0 0 16 16">
                    <path
                        d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a4 4 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522q0-1.288.66-2.046c.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764q.662.757.661 2.046z" />
                </svg>
            </SvgIcon>
            <SvgIcon href="https://bsky.app/profile/nxus.pages.dev" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bluesky"
                    viewBox="0 0 16 16">
                    <path
                        d="M3.468 1.948C5.303 3.325 7.276 6.118 8 7.616c.725-1.498 2.698-4.29 4.532-5.668C13.855.955 16 .186 16 2.632c0 .489-.28 4.105-.444 4.692-.572 2.04-2.653 2.561-4.504 2.246 3.236.551 4.06 2.375 2.281 4.2-3.376 3.464-4.852-.87-5.23-1.98-.07-.204-.103-.3-.103-.218 0-.081-.033.014-.102.218-.379 1.11-1.855 5.444-5.231 1.98-1.778-1.825-.955-3.65 2.28-4.2-1.85.315-3.932-.205-4.503-2.246C.28 6.737 0 3.12 0 2.632 0 .186 2.145.955 3.468 1.948" />
                </svg>
            </SvgIcon>
        </div>
    </header>
</template>

<style scoped>
header {
    max-width: 40em;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0;
    transition: background-color 0.2s, color 0.2s;
    margin-bottom: .3em;
}



.status-data {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .3em;

    p {
        color: var(--text-color-neutral);
        font-size: 0.8em;
        font-weight: 400;

        &:hover {
            cursor: default;
        }
    }

    .status {
        width: .34em;
        height: .34em;
        border-radius: 5em;

        animation: statusLight 2s linear infinite;
    }
}

.buttons-tools {
    margin-top: .3em;
    display: flex;
    gap: 1em;


}

@keyframes statusLight {

    0%,
    100% {
        background-color: var(--text-color-neutral);
    }

    50% {
        background-color: var(--text-color);
    }
}
</style>