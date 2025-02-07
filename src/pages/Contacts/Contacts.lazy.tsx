import { lazy } from 'react'

// export const ContactLazy = lazy(() => import('./Contact'))

// NOT FOR PRODUCTION
export const ContactsLazy = lazy(
	() =>
		new Promise((resolve) => {
			setTimeout(() => resolve(import('./Contacts')), 1500)
		}) as any
)
