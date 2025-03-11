import { useLocation, useNavigate } from 'react-router-dom'

import { PropsWithChildren } from 'react'

import { clsnm } from 'shared/lib/classNames'

import cls from './CarModel.module.scss'
import { GridLayout } from 'shared/ui'

interface CarModelProps {}

const CarModel = (props: PropsWithChildren<CarModelProps>) => {
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const handleModelSelect = (model: string) => {
		navigate(`${pathname}/${model}`)
	}

	return (
		<div className={clsnm(cls.CarModel, [], {})}>
			<div className={cls.umbrella}></div>

			<div className={cls.page_header}>
				<h3>Выберите модель</h3>
			</div>

			<GridLayout>
				{new Array(15).fill('A').map((model, i) => (
					<div
						key={i}
						className={cls.model_item}
						data-model={`${model}${i + 1}`}
						onClick={() => handleModelSelect(`${model}${i + 1}`)}
					>
						<span className={cls.model_title}>
							{model}
							{i + 1}
						</span>
					</div>
				))}
			</GridLayout>
		</div>
	)
}

export default CarModel
