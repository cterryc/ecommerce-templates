'use client'

import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    // Solo se ejecuta en el cliente
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('marteldev-theme')
      const systemPrefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      return savedTheme === 'dark' || (!savedTheme && systemPrefersDark)
    }
    return false
  })

  useEffect(() => {
    const root = document.documentElement

    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('marteldev-theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('marteldev-theme', 'light')
    }
  }, [isDark])

  const toggleDarkMode = () => {
    setIsDark((prev) => !prev)
  }

  return [isDark, toggleDarkMode]
}
