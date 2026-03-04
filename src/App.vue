<script setup lang="ts">
</script>

<template>

  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bpmf+Huninn&display=swap');


:root {
  --text-color-neutral: oklch(0.6559 0.0093 325.68);
  --text-color: oklch(0.9384 0.0029 308.43);
  --bg-color: oklch(0.1438 0.0073 314.7);
  --divider-color: oklch(34.846% 0.00004 271.152);


}

*,
*::after,
*::before {
  box-sizing: border-box;
}



body,
html {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: "Bpmf Huninn", sans-serif;
  margin: 0;
  height: 100vh;
}
</style>