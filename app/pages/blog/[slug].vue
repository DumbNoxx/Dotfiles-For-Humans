<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const { data: posts, status } = await useAsyncData("all-post", () => getPost())
const dataPost = posts;
const loading = ref<boolean>(false);

const route = useRoute()
const data = computed(() => {
    return dataPost.value?.find(p => p.PostId === route.params.id);
})
const fetchData = async (id: string) => {
    loading.value = true;
    try {
        const res = await fetch("https://nxus-api-blog.nxus-dev.workers.dev/api/getPost/one", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ PostId: id })
        });
        const json = await res.json();

        PostsData.value?.push(json);
    } finally {
        loading.value = false;
    }
};
const normalizeId = (raw: unknown): string | null => {
    if (!raw) return null;
    if (Array.isArray(raw)) return String(raw[0]);
    return String(raw);
};

watch(
    () => route.params.id,
    (raw) => {
        const id = normalizeId(raw);
        if (!id) return;
        if (!PostsData.value?.some(p => p.PostId === id) && !loading.value) {
            fetchData(id);
        }
    },
    { immediate: true }
);

const formatData = computed(() => {
    return data.value ? formatDate(data.value.PublishData) : '';
});

useHead({
    title: data.value?.TitleData
});

</script>
<template>
    <div class="post">
        <nav>
            <NuxtLink to="/blog" view-transition class="back-to-home">
                <span>←</span><span id="text">Back to Blog</span>
            </NuxtLink>
        </nav>
        <div v-if="loading">
            <div class="skeleton-title"></div>
            <div class="skeleton-text"></div>
            <div class="skeleton-text"></div>
        </div>
        <div v-else>
            <div v-if="data">
                <h1>{{ data?.TitleData }}</h1>
                <p class="publishData">{{ formatData }}</p>
                <div class="message" v-html="data?.Message"></div>
            </div>
            <div v-else>
                <h1>Ups</h1>
                <p>Post not Found</p>
            </div>
        </div>
        <Divider />
    </div>
</template>
<style lang="css">
.post {
    min-height: 100vh;

    &:hover {
        cursor: default;
    }

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
        margin: 0;
        margin-top: 2em;
        font-size: 2.5em;
        color: var(--text-color-neutral);
    }

    h2, h3 {
        color: var(--text-color-neutral);
    }

    .publishData {
        margin: 0;
        font-size: .8em;
        color: var(--text-color-neutral)
    }

    .message {
        margin-top: 7em;
        margin-bottom: 7em;

        img {
            max-width: 100%;
            height: auto;
            display: block;
            margin: 2em auto;
            border-radius: 8px;
            border: 1px solid var(--text-color-neutral);
            opacity: 0.9;
            transition: opacity 0.3s ease;

            &:hover {
                opacity: 1;
            }
        }

        pre {
            code {
                display: block;
                white-space: pre;
                overflow-x: auto;
                max-width: 100%;
                padding: 0.5em;
                border-radius: 4px;
            }
        }

        p {
            a {
                overflow-wrap: anywhere;
                text-decoration: none;
                color: var(--text-color-neutral);
                transition: color .3s ease;

                &:hover {
                    color: var(--text-color);
                }
            }
        }
    }

}
</style>
