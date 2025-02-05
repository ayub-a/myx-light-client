import { PropsWithChildren, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY } from '../const/localStorage'
import { Theme, ThemeContext } from './ThemeContext'

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

export const ThemeProvider = ({ children }: PropsWithChildren) => {
	const [theme, setTheme] = useState(defaultTheme)

	const defaultProps = useMemo(
		() => ({
			theme,
			setTheme,
		}),
		[theme]
	)

	return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
}
