<script setup lang="ts">
import { ref } from 'vue';

const value = ref("");
const title = ref<string>("");
const shortMessage = ref<string>("");
const toolbarItems: EditorToolbarItem[][] = [
    [
        { kind: 'mark', mark: 'bold', icon: 'i-lucide-bold' },
        { kind: 'mark', mark: 'italic', icon: 'i-lucide-italic' },
        { kind: 'image', icon: 'i-lucide-image' },
        { kind: 'mark', mark: 'underline', icon: 'i-lucide-underline' },
        { kind: 'mark', mark: 'strike', icon: 'i-lucide-strikethrough' }
    ],
    [
        { kind: 'heading', level: 1, icon: 'i-lucide-heading-1' },
        { kind: 'heading', level: 2, icon: 'i-lucide-heading-2' }
    ],
    [
        { kind: 'bulletList', icon: 'i-lucide-list' },
        { kind: 'orderedList', icon: 'i-lucide-list-ordered' }
    ],
    [
        { kind: 'clearFormatting', icon: 'i-lucide-baseline-slash' },
        { kind: 'undo', icon: 'i-lucide-undo' },
        { kind: 'redo', icon: 'i-lucide-redo' }
    ]
];


const sentData = async (e: Event) => {
    e.preventDefault();
    const formData = {
        TitlePost: title.value,
        PublishPost: new Date().toISOString(),
        ShortMessage: shortMessage.value,
        Message: value.value
    }
    fetch("https://nxus-api-blog.nxus-dev.workers.dev/api/admin/api/sentData", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
        credentials: "include"
    }).then(response => {
        if (!response.ok) throw new Error("Error en el servidor");
        return response.json();
    })
        .then(_ => {
            title.value = ""
            shortMessage.value = ""
            value.value = ""
        })
        .catch(error => console.error("Error:", error));

}
definePageMeta({
    requiresAuth: true,
    middleware: ["auth"]
})

</script>

<template>
    <div>
        <nav>
            <NuxtLink to="/admin/dashboard" view-transition class="back-to-home">
                <span>←</span><span id="text">Back to Dashboard</span>
            </NuxtLink>
        </nav>
        <h1>Editor</h1>
        <div class="header-editor">
            <input v-model="title" name="title" id="title" type="text" placeholder="Write title..." />
            <input v-model="shortMessage" name="shortMessage" id="shortMessage" type="text"
                placeholder="Write Short message..." />
        </div>
        <UEditor v-slot="{ editor }" v-model="value" class="editor"
            :placeholder="{ placeholder: 'Start writing...', mode: 'firstLine' }" :ui="{
                root: 'mi-container-clean',
                base: 'mi-editor-personalizado'
            }" content-type="html">
            <UEditorToolbar :editor="editor" :items="toolbarItems" class="mi-toolbar" />
        </UEditor>
        <div class="button">
            <button class="sentPost" v-on:click="sentData">Sent Post</button>
        </div>
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
        font-size: 3em;
    }

    .button {
        max-width: 25em;
        margin: 0 auto;
        margin-top: 2em;

        .sentPost {
            width: 100%;
            background-color: transparent;
            color: white;
            padding: 1em 2em;
            border-radius: .5em;
            border: 1px solid #333333;
            transition: background-color .3s ease;

            &:hover {
                background-color: #0e0e0e;
                cursor: pointer;
            }
        }
    }

    .header-editor {
        display: flex;
        flex-direction: column;
        gap: 1em;
        margin-bottom: 2em;

        input {
            background-color: transparent;
            color: white;
            border: 1px solid #333333;
            padding: .5em 1em;
            font-family: "Maple Mono", sans-serif;

        }

        #title {
            font-size: 1.5em;
        }
    }

}

:deep(.mi-container-clean) {
    box-shadow: none !important;
    border: 2px solid #333333 !important;
    border-radius: 8px;
    overflow: hidden;
}

:deep(.mi-toolbar) {
    border-bottom: 2px solid #333333 !important;
    padding: 0.5rem;
    display: flex;

    button {
        background-color: transparent !important;
        color: white;
        border: none;
        padding: 0.8em;
        border-radius: .5em;
        transition: background-color .3s ease;

        span {
            transition: color 0.3s ease !important;
        }

        &:hover {
            background-color: var(--text-color-neutral) !important;
            color: white !important;

            span {
                color: white !important;
            }
        }


    }
}

.mi-editor-personalizado {
    padding: 2em;
}

:deep(.tiptap) {
    min-height: 400px;
    max-height: 500px;
    outline: none;
    padding: .2em 2em;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background: #333333;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }
}

:deep(.tiptap h1) {
    font-size: 2rem;
    color: var(--text-color-neutral);
    margin-bottom: 1rem;
}

:deep(.tiptap h2) {
    font-size: 1.5rem;
    color: var(--text-color-neutral);
    margin-bottom: 1rem;
}

:deep(.tiptap p) {
    line-height: 1.6;
    color: var(--text-color);
}
:deep(.tiptap img) {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 2em auto;
    border-radius: 8px;
}

/* Estilo para el placeholder (cuando el editor está vacío) */
:deep(.tiptap p.is-editor-empty:first-child::before) {
    content: attr(data-placeholder);
    float: left;
    color: #adb5bd;
    pointer-events: none;
    height: 0;
}
</style>
