import { PropsWithChildren } from 'react'

import { clsnm } from 'shared/lib/classNames'

import cls from './Loader.module.scss'

interface LoaderProps {}

export const Loader = (props: PropsWithChildren<LoaderProps>) => {
	return (
		<div className={clsnm(cls.loader_container)}>
			<span className={cls.Loader}></span>
		</div>
	)
}
