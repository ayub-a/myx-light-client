import { PropsWithChildren } from 'react'

import { clsnm } from 'shared/lib/classNames'
import { CustomLink, Icon } from 'shared/ui'

import cls from './Badges.module.scss'
import { ProductSize } from '../RightSide/RightSide'

interface Badges {
	id: number
	icon: string
	title?: (n: number) => string
}

interface BadgesProps {
	currentSize: ProductSize
}

export const Badges = ({ currentSize }: PropsWithChildren<BadgesProps>) => {
	return (
		<ul className={clsnm(cls.Badges, [], {})}>
			{currentSize.left > 0 ? (
				<li data-badge-type={'warning'} className={cls.badge_item}>
					<Icon name='warning' size={22} />
					<span>Осталось {currentSize.left} шт</span>
				</li>
			) : (
				<li data-badge-type={'completed'} className={cls.badge_item}>
					<Icon name='completed' size={22} />
					<span>В наличии</span>
				</li>
			)}

			{currentSize.discount > 0 ? (
				<li data-badge-type={'discount'} className={cls.badge_item}>
					<Icon name='discount' size={22} />
					<span>Скидка -{currentSize.discount}%</span>
				</li>
			) : null}

			<li data-badge-type={'boughthisweek'} className={cls.badge_item}>
				<Icon name='boughthisweek' size={22} />
				<span>{currentSize.boughthisweek} человек купили на этой неделе</span>
			</li>

			<li data-badge-type={'car'} className={cls.badge_item}>
				<Icon name='car' size={22} />

				{currentSize.cars.map(({ car, link }, i) => (
					<CustomLink to={link} style='underline' key={`${i}-${link}`}>
						{car}
						<span className={cls.comma}>,</span>
					</CustomLink>
				))}
			</li>
		</ul>
	)
}
