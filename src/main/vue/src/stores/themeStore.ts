import { defineStore } from 'pinia'
import { ref } from 'vue'

export enum MyAppTheme {
  dark = 'dracula',
  light = 'cmyk'
}

const loadTheme = () => {
  const theme = localStorage.getItem('theme')
  if (theme && Object.values(MyAppTheme).includes(theme as MyAppTheme)) {
    return theme as MyAppTheme
  }
  return MyAppTheme.light
}

export const themeStore = defineStore('theme', () => {
  const currentTheme = ref(loadTheme())

  const toggleTheme = () => {
    if (currentTheme.value === MyAppTheme.dark) {
      currentTheme.value = MyAppTheme.light
    } else {
      currentTheme.value = MyAppTheme.dark
    }
    localStorage.setItem('theme', currentTheme.value)
  }

  return {
    currentTheme,
    toggleTheme
  }
})
