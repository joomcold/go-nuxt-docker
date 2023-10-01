export const useThemeStore = defineStore('theme', () => {
  const theme = useCookie('theme', { default: () => 'cupcake' })

  function toggleTheme(selectedTheme: string) {
    theme.value = selectedTheme
  }

  return { theme, toggleTheme }
})
