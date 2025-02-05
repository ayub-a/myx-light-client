import { createContext } from 'react'

export enum Theme {
	LIGHT = 'light',
	DARK = 'dark',
}

interface ContextProps {
	theme?: Theme
	setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ContextProps>({})
