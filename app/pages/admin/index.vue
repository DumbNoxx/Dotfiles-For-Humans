<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const username = ref<string>("");
const password = ref<string>("");

onMounted(async () => {
    try {
        const res = await fetch('https://nxus-api-blog.nxus-dev.workers.dev/api/admin/api/me', {
            credentials: "include"
        });
        if (res.ok) {
            router.push('/admin/dashboard');
        }
    } catch (error) { }
});

const handleLogin = async (e: Event) => {
    e.preventDefault();
    const formData = {
        "UserNameAdmin": username.value,
        "PasswordAdmin": password.value
    }
    fetch("https://nxus-api-blog.nxus-dev.workers.dev/api/admin/api/login", {
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
        .then(result => router.push("/admin/dashboard"))
        .catch(error => console.error("Error:", error));
}

</script>
<template>
    <div>

        <h1>Authenticate</h1>
        <p>ADMIN ACCESS</p>
        <form v-on:submit="handleLogin">
            <input type="text" v-model="username" id="username" name="user_name" placeholder="Username" />
            <input type="password" v-model="password" id="password" name="password" placeholder="Password" />
            <button :disabled="username.length <= 3 || password.length <= 3">[ Authenticate ]</button>
        </form>
        <nav>
            <RouterLink to="/" view-transition class="back-to-home">
                <span>←</span><span id="text">Back to home</span>
            </RouterLink>
        </nav>
        <Divider />
    </div>
</template>
<style lang="css" scoped>
div {

    max-width: 40em;
    margin: 0 auto;

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
        font-size: 2.5em;
        margin-bottom: 0;
    }

    p {
        color: var(--text-color-neutral);
        margin-top: 0;
        margin-bottom: 3em;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 1em;
        max-width: 23em;

        margin: 0 auto;

        input {
            padding: .4em .7em;
            background-color: rgb(43, 43, 43);
            color: rgb(200, 200, 200);
            border: 1px solid rgb(113, 113, 113);
        }

        button {
            max-width: 10.2em;
            background: none;
            color: var(--text-color-neutral);
            border: none;
            margin: 0 auto;
            transition: color .3s ease;

            &:hover {
                color: var(--text-color);
                cursor: pointer;
            }

            &:disabled {
                cursor: no-drop;
                color: rgb(115, 115, 115);
            }
        }
    }
}
</style>
