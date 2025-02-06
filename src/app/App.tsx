import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import { useTheme } from 'shared/lib/theme'
import { clsnm } from 'shared/lib/classNames'

import { MainLazy } from 'pages/Main/Main.lazy'
import { ContactLazy } from 'pages/Contact/Contact.lazy'
import { AboutLazy } from 'pages/About/About.lazy'

import './styles/index.scss'

export const App = () => {
	const { theme, toggleTheme } = useTheme()

	return (
		<div className={clsnm('App', [`theme_${theme}`])}>
			<div className='nav'>
				<Link to='/'>main</Link>
				<Link to='/contact'>contact</Link>
				<Link to='/about'>about</Link>
			</div>

			<button onClick={toggleTheme}>Theme: {theme}</button>

			<Suspense fallback={'Loding..'}>
				<Routes>
					<Route
						path='/'
						element={
							<Suspense key={'main'} fallback={'Loding..'}>
								<MainLazy />
							</Suspense>
						}
					/>

					<Route
						path='/contact'
						element={
							<Suspense key={'contact'} fallback={'Loding..'}>
								<ContactLazy />
							</Suspense>
						}
					/>

					<Route
						path='/about'
						element={
							<Suspense key={'about'} fallback={'Loding..'}>
								<AboutLazy />
							</Suspense>
						}
					/>
				</Routes>
			</Suspense>
		</div>
	)
}
