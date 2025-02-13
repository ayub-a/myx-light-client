import { useParams } from 'react-router-dom'

import { clsnm } from 'shared/lib/classNames'

import cls from './Sidebar.module.scss'

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
	const params = useParams()

	return (
		<div className={clsnm(cls.Sidebar)}>
			<h2>Search By Car Sidebar</h2>
			<span>{params?.brand ? `Brand: ${params.brand}` : 'Brand'}</span>
			<span>{params?.model ? `Model: ${params.model}` : 'Model'}</span>
			<span>{params?.body ? `Body: ${params.body}` : 'Body'}</span>
			<span>{params?.gen ? `Gen: ${params.gen}` : 'Gen'}</span>
		</div>
	)
}
