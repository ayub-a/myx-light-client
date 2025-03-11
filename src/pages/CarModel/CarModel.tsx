import { useLocation, useNavigate } from 'react-router-dom'

import { PropsWithChildren } from 'react'

import { clsnm } from 'shared/lib/classNames'

import cls from './CarModel.module.scss'
import { GridLayout } from 'shared/ui'

interface CarModelProps {}

const models = ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q3', 'Q5', 'Q7', 'Q8', 'TT']

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
				{models.map((model) => (
					<div
						key={model}
						className={cls.model_item}
						data-model={model}
						onClick={() => handleModelSelect(model)}
					>
						<span className={cls.model_title}>{model}</span>
					</div>
				))}
			</GridLayout>
		</div>
	)
}

export default CarModel
