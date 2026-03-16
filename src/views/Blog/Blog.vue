<script setup lang="ts">
import Divider from '@/components/atoms/Divider/Divider.vue';
import CardPostBlog from './Components/CardPostBlog.vue';
import { PostsData, formatDate } from '@/service/blogs';
import { useHead } from '@unhead/vue';
import { computed } from 'vue';
const Data = PostsData;

const sortedPosts = computed(() => {
    if (!Data.value) return [];
    
    return [...Data.value].sort((a, b) => {
        return new Date(b.PublishData).getTime() - new Date(a.PublishData).getTime();
    });
});

useHead({
    title: 'Blog | Insights on Design & Architecture',
    meta: [
        {
            name: 'description',
            content: 'Essays on software architecture, minimalist design, and the practical challenges of modern web development.'
        },
        { property: 'og:title', content: 'Blog | Essays & Notes' },
        {
            property: 'og:description',
            content: 'Thoughts on design, architecture, and the real cost of observability.'
        },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://nxus.pages.dev/blog' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Blog | Design & Architecture' },
        {
            name: 'twitter:description',
            content: 'Exploring the intersection of performance and minimalist web development.'
        },
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
        <div v-if="Data === null" class="postList">
            <div class="skeleton-post" v-for="i in 3" :key="i"></div>
        </div>

        <div v-else-if="Data.length > 0" class="postList">
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
