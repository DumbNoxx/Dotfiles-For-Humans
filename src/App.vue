<script setup lang="ts">
import { transition } from '@vueuse/core';
import Header from './components/Header/Header.vue';
</script>

<template>
  <UApp>
    <header>
      <nav>
        <Header />
      </nav>
    </header>
    <hr class="divider" />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer>
      <div class="copyright">
        <p>Apache License 2025</p>
        <p>Designed & Developed by Dylan Marcano</p>
      </div>
      <div class="friends">
        <p>Friends &hearts;</p>
        <div class="urls">
          <div class="group">
            <a href="https://elisiei.xyz/" target="_blank">@elisiei</a>
            <a href="https://chiko.dev/" target="_blank">@chiko</a>
            <a href="https://goat.seyfert.dev/" target="_blank">@marcrock22</a>
          </div>
          <div class="group">
            <a href="https://estebandev.cc/" target="_blank">@esteban</a>
            <a href="https://ulysses-portfolio.vercel.app/" target="_blank">@ulysses</a>
            <a href="https://ldarki.dev.ar/" target="_blank">@ldarki</a>
          </div>
        </div>
      </div>
    </footer>
  </UApp>
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

  main {
    max-width: 40em;
    margin: 0 auto;
    min-height: 60vh;

  }

  .divider {
    position: relative;
    left: 50%;
    right: 50%;

    border: none;
    border-top: 1px solid var(--divider-color);
    width: 100vw;
    margin-left: -50vw;
    margin-right: -50vw;
    margin-top: 0;

  }
}

@media (width <=60em) {

  body,
  html {
    padding: 1em;
  }
}

footer {
  min-height: 7em;
  max-width: 40em;
  margin: 0 auto;
  margin-top: .4em;
  margin-bottom: 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: default;
  }

  .copyright {
    p {
      font-size: .75em;
      color: var(--text-color-neutral)
    }
  }

  .friends {
    display: flex;
    flex-direction: column;

    p {
      text-align: center;
      font-size: .75em;

    }

    .urls {
      display: flex;
      gap: 2em;

      .group {
        display: flex;
        flex-direction: column;
        gap: .5em;

        a {
          text-decoration: none;
          color: var(--text-color-neutral);
          transition: .3s ease;
          font-size: .75em;

          &:hover {
            color: var(--text-color);
          }
        }


      }
    }
  }



}
</style>
