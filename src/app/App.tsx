import { useTheme } from 'shared/lib/theme'
import { Navbar } from 'widgets/Navbar/ui/Navbar'
import { clsnm } from 'shared/lib/classNames'

import { AppRouter } from './router'

import './styles/index.scss'

export const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={clsnm('App', [`theme_${theme}`])}>
			<Navbar />

			{/* <MainNavigation />
			<CategoryNavigation /> */}

			{/* <button onClick={toggleTheme}>Theme: {theme}</button> */}

			{/* <AppRouter /> */}
		</div>
	)
}
