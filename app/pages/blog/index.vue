<script setup lang="ts">
import type { Posts } from "#shared/types/postData";
const { data: posts, status } = await useFetch("https://nxus-api-blog.nxus-dev.workers.dev/api/getPost/all");
import { computed } from 'vue';
const Data = posts;

const sortedPosts = computed(() => {
    if (!Data.value) return [];

    return [...Data.value].sort((a, b) => {
        return new Date(b.PublishData).getTime() - new Date(a.PublishData).getTime();
    });
});
useSeoMeta({
    title: "Blog | Insights on Design & Architecture",
    description: "Essays on software architecture, minimalist design, and the practical challenges of modern web development.",
    ogTitle: "Blog | Essays & Notes",
    ogDescription: "Thoughts on design, architecture, and the real cost of observability.",
    twitterCard: "sumary",
    twitterTitle: "Blog | Essays & Notes",
    twitterDescription: "Thoughts on design, architecture, and the real cost of observability."
})

useHead({
    meta: [
        { name: 'theme-color', content: '#000000' }
    ],
})
</script>
<template>
    <div>
        <nav>
            <RouterLink to="/" view-transition class="back-to-home">
                <span>←</span><span id="text">Back to Home</span>
            </RouterLink>
        </nav>
        <h1>Essays & Notes</h1>
        <h2>Thoughts on design, architecture, and web development.</h2>
        <div v-if="status === 'pending'" class="postList">
            <div class="skeleton-post" v-for="i in 3" :key="i"></div>
        </div>

        <div v-else-if="status !== 'error'" class="postList">
            <CardPostBlog v-for="post in sortedPosts" :key="post.PostId" :publish-data="formatDate(post.PublishData)"
                :title-data="post.TitleData" :short-message="post.ShorMessage" :url-post="'/blog/' + post.PostId" />
        </div>

        <div v-else class="empty-state">
            <p>No posts published yet.</p>
        </div>
        <Divider />
    </div>
</template>
<style lang="css" scoped>
div {
    margin-bottom: 3em;

    .back-to-home {
        margin-top: 4em;
        text-decoration: none;
        color: var(--text-color-neutral);
        display: flex;
        gap: .3em;
        align-items: center;
        transition: color .3s ease;

        #text {
            font-size: .7em;
        }

        &:hover {
            color: var(--text-color);
        }
    }

    h1 {
        font-size: 3em;
        font-weight: 100;
        margin-bottom: 0;
    }

    h2 {
        font-size: .9em;
        color: var(--text-color-neutral);
        margin-top: 0;
        margin-bottom: 6em;
    }

    .postList {
        display: flex;
        flex-direction: column;
        gap: 2em;
    }

    .skeleton-post {
        width: 100%;
        height: 100px;
        /* Ajusta según el alto de tu CardPostBlog */
        background: var(--text-color-neutral);
        opacity: 0.1;
        border-radius: 8px;
        animation: pulse 2s infinite;
    }

    .empty-state {
        color: var(--text-color-neutral);
        font-style: italic;
        margin-bottom: 4em;
    }


    @keyframes pulse {
        0% {
            opacity: 0.1;
        }

        50% {
            opacity: 0.2;
        }

        100% {
            opacity: 0.1;
        }
    }
}
</style>
