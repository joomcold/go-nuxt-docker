<template>
  <main>
    <Header />
    <div class="container mx-auto">
      <slot />
    </div>
    <Footer />
  </main>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const title = ref('App')
const themeStore = useThemeStore()
const theme = computed(() => themeStore.theme)

useHead({
  title: title.value,
  htmlAttrs: { 'data-theme': theme }
})
</script>
