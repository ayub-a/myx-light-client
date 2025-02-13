import { PropsWithChildren } from 'react'

import { clsnm } from 'shared/lib/classNames'
import { CustomLink } from 'shared/ui'

import cls from './SidebarNavigation.module.scss'

interface SidebarNavigationProps {
	data: any[]
	changeCategory: (category: string) => void
	currentCategory: string
}

export const SidebarNavigation = (props: PropsWithChildren<SidebarNavigationProps>) => {
	const { data, changeCategory, currentCategory } = props

	const categoryHandler = (category: string) => {
		changeCategory(category)
	}

	return (
		<ul className={clsnm(cls.SidebarNavigation, [], {})}>
			{data.map(({ path, name }) => (
				<li key={name} onClick={() => categoryHandler(name)} className={clsnm(cls.nav_item, [], { [cls.active]: currentCategory === name })}>
					<CustomLink to={path} style='clear' className={cls.link}>
						{name}
					</CustomLink>
				</li>
			))}
		</ul>
	)
}
