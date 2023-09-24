<template>
  <header
    class="navbar bg-base-200 sticky top-0 z-40 drop-shadow-md backdrop-blur-sm"
  >
    <div class="flex-1">
      <NuxtLink class="text-xl normal-case" to="/">Logo</NuxtLink>
    </div>
    <div class="flex-none p-2">
      <ul class="menu menu-horizontal px-1">
        <label class="label cursor-pointer gap-1" @click="toggleTheme">
          <Icon name="ri:moon-fill" color="light_gray" size="0.9rem" />
          <input type="checkbox" class="toggle toggle-warning toggle-xs" />
          <Icon name="ri:sun-fill" color="orange" size="1rem" />
        </label>
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
const isLoggedIn = ref(false)
const theme = ref('night')
const changedTheme = computed(() => theme.value)

useHead({
  htmlAttrs: { 'data-theme': changedTheme }
})

const toggleTheme = () => {
  theme.value = theme.value === 'cupcake' ? 'night' : 'cupcake'
}
</script>

<style scoped lang="scss">
.header {
  @apply sticky bg-base-200 top-0 z-40 bg-opacity-90 drop-shadow-md backdrop-blur-sm;
}
</style>
