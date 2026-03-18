<script setup>
import { computed } from "vue";
const props = defineProps({
  title: { type: String, required: false, default: "title" },
  description: { type: String, required: false },
  isPro: { type: Boolean, required: false }
});
const themeColor = computed(() => props.isPro ? "124, 58, 237" : "0, 173, 216");
</script>

<template>
  <div
    class="w-full h-full justify-center items-center relative p-10 lg:p-[60px] bg-neutral-900 text-neutral-50"
  >
    <div
      class="absolute top-0 left-0 right-0 bottom-0" :style="{
  backgroundImage: `radial-gradient(ellipse 100% 100% at 100% 100%, rgba(${themeColor}, 0.15) 0%, transparent 60%)`
}"
    />
    <div
      class="absolute top-0 left-0 right-0 bottom-0" :style="{
  backgroundImage: `radial-gradient(ellipse 100% 100% at 0.1% 0.1%, rgba(${themeColor}, 0.1) 0%, transparent 50%)`
}"
    />

    <div class="w-full flex-col justify-center relative items-center text-center gap-5 lg:gap-8">
      <div class="flex items-center gap-1">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round" 
          class="w-10 h-10 lg:w-16 lg:h-16"
          :class="isPro ? 'text-violet-500' : 'text-blue-500'"
        >
          <path d="m18 16 4-4-4-4"/>
          <path d="m6 8-4 4 4 4"/>
          <path d="m14.5 4-5 16"/>
        </svg>
      </div>

      <h1
        class="w-full justify-center text-center text-[48px] lg:text-[80px] font-bold m-0 leading-tight max-w-[700px] lg:max-w-[1000px]"
        style="display: block; line-clamp: 3; text-overflow: ellipsis; text-wrap: balance;"
      >
        {{ title }}
      </h1>

      <p v-if="description" class="text-[24px] lg:text-[32px] opacity-70 max-w-[650px] lg:max-w-[900px] leading-relaxed" style="display: block; line-clamp: 2; text-overflow: ellipsis;">
        {{ description }}
      </p>
    </div>
  </div>
</template>
