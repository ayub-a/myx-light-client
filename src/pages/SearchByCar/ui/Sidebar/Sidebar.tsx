import { useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { clsnm } from 'shared/lib/classNames'

import cls from './Sidebar.module.scss'

interface SidebarProps {}

export const Sidebar = (props: SidebarProps) => {
	const params = useParams()
	const location = useLocation()

	const [stage, setStage] = useState([])

	useEffect(() => {
		setStage(location.pathname.split('/'))
	}, [params])

	return (
		<div className={clsnm(cls.Sidebar)}>
			<div className={cls.title_block}>
				<h3 className={cls.title}>Подбор ламп по авто</h3>
				<span className={cls.short_info}>3 шага к обновлению освещения вашего автомобиля</span>
			</div>

			<div className={cls.stage_status}>
				<div className={clsnm(cls.stage, [], { [cls.active_stage]: !!stage[1] })}>
					<div className={cls.stage_round}>1</div>
					<h3 className={cls.stage_title}>{params.brand ? params.brand : 'Бренд'}</h3>
				</div>

				<span
					className={clsnm(cls.stage_line, [], { [cls.active_stage_line]: stage[2] === params.brand })}
				></span>

				<div className={clsnm(cls.stage, [], { [cls.active_stage]: stage[2] === params.brand })}>
					<div className={cls.stage_round}>2</div>
					<h3 className={cls.stage_title}>{params.model ? params.model : 'Модель'}</h3>
				</div>

				<span className={clsnm(cls.stage_line, [], { [cls.active_stage_line]: !!stage[3] })}></span>

				<div className={clsnm(cls.stage, [], { [cls.active_stage]: !!stage[3] })}>
					<div className={cls.stage_round}>3</div>
					<h3 className={cls.stage_title}>Кузов</h3>
				</div>
			</div>

			{/* <h2>Search By Car Sidebar</h2>
			<span>{params?.brand ? `Brand: ${params.brand}` : 'Brand'}</span>
			<span>{params?.model ? `Model: ${params.model}` : 'Model'}</span>
			<span>{params?.body ? `Body: ${params.body}` : 'Body'}</span>
			<span>{params?.gen ? `Gen: ${params.gen}` : 'Gen'}</span> */}
		</div>
	)
}
