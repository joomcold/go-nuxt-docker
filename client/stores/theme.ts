export const useThemeStore = defineStore('theme', () => {
  const theme = useCookie('theme', { default: () => 'cupcake' })

  function toggleTheme() {
    theme.value = theme.value === 'cupcake' ? 'night' : 'cupcake'
  }

  return { theme, toggleTheme }
})
