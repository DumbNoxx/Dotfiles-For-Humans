<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Divider from '@/components/atoms/Divider/Divider.vue';
import { PostsData, formatDate } from '@/service/blogs';
const dataPost = PostsData;
const d = dataPost.value?.map(d => d)

const route = useRoute()
const data = computed(() => {
    return d?.find(p => p.PostId === route.params.id)
});
const formatData = formatDate(data?.value?.PublishData)

</script>
<template>
    <div>
        <nav>
            <RouterLink to="/blog" view-transition class="back-to-home">
                <span>←</span><span id="text">Back to Blog</span>
            </RouterLink>
        </nav>
        <div v-if="data">
            <h1>{{ data?.TitleData }}</h1>
            <p class="publishData">{{ formatData }}</p>
            <div class="message" v-html="data?.Message"></div>
        </div>
        <div v-else>
            <h1>Ups</h1>
            <p>Post not Found</p>
        </div>
        <Divider />
    </div>
</template>
<style lang="css" scoped>
div {
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
    }

    .publishData {
        margin: 0;
        font-size: .8em;
        color: var(--text-color-neutral)
    }

    .message {
        margin-top: 7em;
        margin-bottom: 7em;
    }

}
</style>