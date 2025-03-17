import { useContext } from 'react'

import { ThemeContext } from './ThemeContext'
import { Theme } from './types'
import { LOCAL_STORAGE_THEME_KEY } from '../../const/localStorage'

interface ThemeHookReturn {
    theme: Theme
    toggleTheme: () => void
}

export function useTheme(): ThemeHookReturn {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return { theme, toggleTheme }
}
