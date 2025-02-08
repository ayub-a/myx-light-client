import { Button } from 'shared/ui'

import { Locale } from './Locale/Locale'
import { LocaleTime } from './LocaleTime/LocaleTime'
import { MainNavigation } from './MainNavigation/MainNavigation'
import { SearchInput } from './SearchInput/SearchInput'
import { InfoNavigation } from './InfoNavigation/InfoNavigation'

import WholesaleIcon from 'shared/assets/icons/wholesale.svg'
import LogoPng from 'shared/assets/logo.png'

import { clsnm } from 'shared/lib/classNames'

import cls from './Navbar.module.scss'

export const Navbar = () => {
	return (
		<div className={clsnm(cls.Navbar)}>
			<div className={cls.top_header}>
				<div className={cls.container}>
					<Locale />

					<Button icon='shop' style='clear'>
						Пн-Пт, 9:00-18:00
					</Button>

					<div className={cls.extra_items}>
						<div className={cls.info_nav}>
							<InfoNavigation />
						</div>

						<div className={cls.wholesale}>
							<WholesaleIcon />
							<span>wholesale</span>
						</div>

						<LocaleTime />
					</div>
				</div>
			</div>

			<div className={cls.bottom_header}>
				<div className={cls.container}>
					<div className={cls.logo}>
						<img src={LogoPng} alt='logo' />
						<h1 className={cls.logo_title}>Automotive Lighting</h1>
					</div>

					<div className={cls.search_and_nav}>
						<Button icon='burger' className={cls.catalog_btn}>
							Catalog
						</Button>

						<SearchInput />

						<MainNavigation />
					</div>
				</div>
			</div>
		</div>
	)
}
