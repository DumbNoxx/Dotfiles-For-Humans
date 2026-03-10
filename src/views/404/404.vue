<script setup lang="ts">
import Divider from '@/components/atoms/Divider/Divider.vue';

</script>
<template>
    <div>
        <h1>404</h1>
        <p id="notFound">Not Found</p>
        <p id="message">Hi there! It looks like you've taken a wrong turn. This route isn't available or open to the
            public at the
            moment. Please head back.</p>
        <p id="route">
            {{ $route.fullPath }}
        </p>
        <nav>
            <RouterLink to="/" view-transition class="back-to-home">
                <span>←</span><span id="text">Back to Home</span>
            </RouterLink>
        </nav>
        <Divider />
    </div>
</template>
<style lang="css" scoped>
div {
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
        font-size: 5em;
        margin-bottom: 0;
    }

    #notFound {
        color: var(--text-color-neutral);
        margin-top: 0;
        font-size: 2em;
    }

    #message {
        color: var(--text-color-neutral);
        margin: 3em 0;
    }

    #route {
        margin-top: 3.5em;
        border: 1px solid rgb(53, 53, 53);
        padding: 1.3em;
        background-color: rgb(21, 21, 21);
        color: var(--text-color-neutral);
    }
}
</style>