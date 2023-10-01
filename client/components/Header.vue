<template>
  <header class="navbar">
    <div class="flex-1">
      <NuxtLink class="text-xl normal-case" to="/">Logo</NuxtLink>
    </div>
    <div class="flex-none p-2">
      <ul class="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>Themes</summary>
            <ul class="bg-base-100 p-2">
              <li
                v-for="(theme, index) in themes"
                :key="index"
                @click="themeStore.toggleTheme(theme)"
              >
                {{ theme }}
              </li>
            </ul>
          </details>
        </li>
        <li>
          <NuxtLink to="/login">Login</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/register">Register</NuxtLink>
        </li>
        <li v-if="isLoggedIn">
          <details>
            <summary>Parent</summary>
            <ul class="bg-base-100 p-2">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

const isLoggedIn = ref(false)
const themeStore = useThemeStore()
const themes = ['cupcake', 'night', 'forest']
</script>

<style scoped lang="scss">
.navbar {
  @apply bg-base-200 bg-opacity-90 sticky top-0 z-40 drop-shadow-md backdrop-blur-sm;
}
</style>
