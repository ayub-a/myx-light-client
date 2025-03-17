import { createContext } from 'react'
import { Theme } from './types'

interface ContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ContextProps>({})
