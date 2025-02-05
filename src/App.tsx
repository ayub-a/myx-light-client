import { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import { MainLazy } from './pages/Main/Main.lazy'
import { ContactLazy } from './pages/Contact/Contact.lazy'
import { AboutLazy } from './pages/About/About.lazy'

import './index.scss'

export const App = () => {
	return (
		<div className='App'>
			<div className='nav'>
				<Link to='/'>main</Link>
				<Link to='/contact'>contact</Link>
				<Link to='/about'>about</Link>
			</div>

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
