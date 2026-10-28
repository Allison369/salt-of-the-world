import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'

const KEY = 'db_theme'
const EVENT = 'db-theme-change'

export function readTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  const saved = window.localStorage.getItem(KEY)
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
  window.localStorage.setItem(KEY, theme)
  window.dispatchEvent(new CustomEvent(EVENT, { detail: theme }))
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(readTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    const onChange = (e: Event) => {
      const next = (e as CustomEvent).detail as Theme
      if (next === 'light' || next === 'dark') setThemeState(next)
    }
    window.addEventListener(EVENT, onChange)
    return () => window.removeEventListener(EVENT, onChange)
  }, [theme])

  const setTheme = (next: Theme) => {
    applyTheme(next)
    setThemeState(next)
  }

  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return { theme, setTheme, toggle }
}
