<script setup lang="ts">
</script>

<template>

  <router-view />
</template>

<style>
@font-face {
  font-family: 'Maple Mono';
  src: url('/fonts/subset-MapleMono-Regular.woff2') format('woff2'),
    url('/fonts/subset-MapleMono-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}



:root {
  --text-color-neutral: oklch(0.6559 0.0093 325.68);
  --text-color: oklch(0.9384 0.0029 308.43);
  --bg-color: oklch(14.385% 0.00732 314.618);
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
  font-family: "Maple Mono", sans-serif;
  margin: 0;
  height: 100vh;
}

@media (width <=60em) {

  body,
  html {
    padding: 1em;
  }
}
</style>