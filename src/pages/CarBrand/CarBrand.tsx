import { useNavigate } from 'react-router-dom'
import { GridLayout, Icon } from 'shared/ui'

import { PropsWithChildren } from 'react'

import { clsnm } from 'shared/lib/classNames'

import cls from './CarBrand.module.scss'

import audiLogo from 'shared/assets/carBrands/audi-logo.png'

interface CarBrandProps {}

const CarBrand = (props: PropsWithChildren<CarBrandProps>) => {
	const navigate = useNavigate()

	const handleBrandSelect = (brand: string) => {
		navigate(`/searchbycar/${brand}`)
	}

	return (
		<div className={clsnm(cls.CarBrand, [], {})}>
			<div className={cls.umbrella}></div>

			<div className={cls.page_header}>
				<h3>Выберите бренд</h3>

				<div className={cls.brand_search}>
					<input type='text' placeholder='Поиск бренда' />
					<Icon name='search' />
				</div>
			</div>

			<GridLayout>
				{new Array(15).fill('Audi').map((brand, i) => (
					<div key={i} className={cls.brand_item} onClick={() => handleBrandSelect(brand)}>
						<img src={audiLogo} alt={brand} />
					</div>
				))}
			</GridLayout>
		</div>
	)
}

export default CarBrand
