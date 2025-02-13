import { useTheme } from 'shared/lib/theme'
import { clsnm } from 'shared/lib/classNames'

import { AppLayout } from './layout/AppLayout/AppLayout'
import { AppRouter } from './router'

import './styles/index.scss'

export const App = () => {
	const { theme } = useTheme()

	return (
		<AppLayout className={clsnm('App', [`theme_${theme}`])}>
			<AppRouter />
		</AppLayout>
	)
}

{
	/* <div > */
}

{
	/* <MainNavigation /> */
}
{
	/* <CategoryNavigation /> */
}

{
	/* <button onClick={toggleTheme}>Theme: {theme}</button> */
}

{
	/* <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
		<h3>BTN STYLES | Default btn size: M</h3>
		<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
			<Button style='clear'>Clear</Button>
			<Button style='rounded'>Rounded</Button>
			<Button style='outline-rounded'>Outline Rounded</Button>
			<Button style='square'>Square</Button>
			<Button style='outline-square'>Outline Square</Button>
		</div>

		<h3>BTN SIZES</h3>
		<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
			<Button style='clear' size='s'>
				Clear | S
			</Button>
			<Button style='rounded' size='s'>
				Rounded | S
			</Button>
			<Button style='outline-rounded' size='s'>
				Outline Rounded | S
			</Button>
			<Button style='square' size='s'>
				Square | S
			</Button>
			<Button style='outline-square' size='s'>
				Outline Square | S
			</Button>
		</div>

		<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
			<Button style='clear' size='m'>
				Clear | M
			</Button>
			<Button style='rounded' size='m'>
				Rounded | M
			</Button>
			<Button style='outline-rounded' size='m'>
				Outline Rounded | M
			</Button>
			<Button style='square' size='m'>
				Square | M
			</Button>
			<Button style='outline-square' size='m'>
				Outline Square | M
			</Button>
		</div>

		<div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
			<Button style='clear' size='l'>
				Clear | L
			</Button>
			<Button style='rounded' size='l'>
				Rounded | L
			</Button>
			<Button style='outline-rounded' size='l'>
				Outline Rounded | L
			</Button>
			<Button style='square' size='l'>
				Square | L
			</Button>
			<Button style='outline-square' size='l'>
				Outline Square | L
			</Button>
		</div>
	</div> */
}
{
	/* </div> */
}
