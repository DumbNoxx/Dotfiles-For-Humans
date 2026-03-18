<script setup lang="ts">
import { onMounted, ref } from 'vue';
const userData = ref<UserApiGithub | null>(null);
const goxeData = ref<RepoApiGithub | null>(null);
const pomoData = ref<RepoApiGithub | null>(null);
async function fetchGithubData() {
    try {
        const userPromise = fetch('https://api.github.com/users/dumbnoxx');
        const goxePromise = fetch('https://api.github.com/repos/DumbNoxx/goxe');
        const pomoPromise = fetch('https://api.github.com/repos/DumbNoxx/pulse.nvim');

        const [userRes, goxeRes, pomoRes] = await Promise.all([
            userPromise,
            goxePromise,
            pomoPromise
        ]);

        const [user, goxe, pomo] = await Promise.all([
            userRes.json() as Promise<UserApiGithub>,
            goxeRes.json() as Promise<RepoApiGithub>,
            pomoRes.json() as Promise<RepoApiGithub>
        ]);

        userData.value = user;
        goxeData.value = goxe;
        pomoData.value = pomo;

    } catch (error) {
        console.error(error);
    }
}
onMounted(fetchGithubData)
useMetaSeo({
  title: "Dylan Marcano | Software Developer",
  ogUrl: "https://nxus.pages.dev",
  ogTitle:"Dylan Marcano | Software Developer", 
  description: "Explore my work: a Software Developer merging cutting-edge technologies with bussiness-driven results.",
  ogDescription:"Explore my work: a Software Developer merging cutting-edge technologies with bussiness-driven results.",
  twitterCard: "sumary",
  twitterTitle: "Dylan Marcano | Software Developer",
  twitterDescription: "Explore my work: a Software Developer merging cutting-edge technologies with bussiness-driven results."

})
</script>

<template>
    <div>
        <Hero :data="userData" />
        <Divider />
        <Projects :goxe="goxeData" :pom="pomoData" />
        <Divider />
        <About />
        <Divider />
    </div>
</template>


<style lang="css" scoped></style>
