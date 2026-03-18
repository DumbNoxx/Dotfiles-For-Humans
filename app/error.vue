<script setup lang="ts">
import type { NuxtError } from '#app'
const props = defineProps<{error: NuxtError }>();
const cleanMessage = computed(() => {
  if (props.error.message?.includes('No match') || props.error.message?.includes('NOT FOUND')) {
    return 'The requested page could not be found or is restricted.'
  }
  return props.error.message || 'An unexpected error occurred.'
})
</script>
<template>
    <NuxtLayout>
        <main>
            <div>
        <h1>{{ error.status }}</h1>
        <p id="message">Hi there! It looks like you've taken a wrong turn. This route isn't available or open to the
            public at the
            moment. Please head back.</p>
        <p id="route">
            {{ cleanMessage }}
        </p>
        <nav>
            <NuxtLink to="/" view-transition class="back-to-home">
                <span>←</span><span id="text">Back to Home</span>
            </NuxtLink>
        </nav>
        <Divider />
    </div>
    </main>

    </NuxtLayout>
</template>
<style lang="css" scoped>
div {
    .back-to-home {
        margin-top: 4em;
        text-decoration: none;
        max-width: 6.1em;
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

    nav {
        a {
        }
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
