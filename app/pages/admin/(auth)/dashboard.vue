<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = async () => {
    fetch("https://nxus-api-blog.nxus-dev.workers.dev/api/admin/api/logout", {
        method: "POST",
        credentials: "include"
    }).then(response => response.json())
        .then(result => {
            router.push("/")
        })
        .catch(err => err)
}
definePageMeta({
    requiresAuth: true,
    middleware: ["auth"]
})
</script>
<template>
    <div>
        <div class="container">
            <NuxtLink to="/" view-transition>Go Home</NuxtLink>
            <NuxtLink to="/admin/editor" view-transition>Go Editor</NuxtLink>
            <button v-on:click="logout">Logout</button>
        </div>
        <Divider />
    </div>
</template>
<style lang="css" scoped>
div {
    .container {
        display: flex;
        flex-direction: column;
        text-align: center;
        gap: 2em;
        justify-content: center;
        min-height: 26em;

        a {
            text-decoration: none;
            color: var(--text-color-neutral);
            transition: color .3s ease;

            &:hover {
                color: var(--text-color)
            }
        }

        button {
            width: 10em;
            margin: 0 auto;
            background-color: transparent;
            color: white;
            font-size: 1.3em;
            border-radius: 0.3em;
            border: 1px solid #333333;
            transition: background-color .3s ease;
            padding: .3em 2em;

            &:hover {
                background-color: #0e0e0e;
                cursor: pointer;
            }
        }
    }
}
</style>
