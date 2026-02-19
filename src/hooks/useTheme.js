import { useState, useEffect, useCallback } from 'react'

export function useTheme() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? '' : 'light')
  }, [dark])

  const toggle = useCallback(() => setDark(d => !d), [])

  return { dark, toggle }
}
