import { clsnm } from 'shared/lib/classNames'

import LocaleTimeIcon from 'shared/assets/icons/localeTime.svg'

import cls from './LocaleTime.module.scss'

export const LocaleTime = () => {
	return (
		<div className={clsnm(cls.LocaleTime)}>
			<LocaleTimeIcon />
			<span>16:06</span>
		</div>
	)
}
