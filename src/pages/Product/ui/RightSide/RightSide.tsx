import { PropsWithChildren, useState } from 'react'

import { clsnm } from 'shared/lib/classNames'
import { Icon } from 'shared/ui'

import { Price } from '../Price/Price'
import { Badges } from '../Badges/Badges'
import { Size } from '../Size/Size'
import { AddToCart } from '../AddToCart/AddToCart'
import { About } from '../About/About'

import cls from './RightSide.module.scss'

interface RightSideProps {}

export interface ProductSize {
	price: number
	discount: number
	size: number
	inStock: boolean
	left: number
	boughthisweek: number
	cars: typeof cars
}

export interface Cart {
	[key: number]: { qty: number; size: number }
}

const cars = [
	{
		car: 'Ford Focus',
		link: '/searchbycar/FordFocus',
	},
	{
		car: 'Fiesta',
		link: '/searchbycar/Fiesta',
	},
	{
		car: 'Mondeo',
		link: '/searchbycar/Mondeo',
	},
]

const sizes = [
	{ price: 37800, discount: 15, size: 31, inStock: true, left: -1, boughthisweek: 14, cars },
	{ price: 35000, discount: -1, size: 36, inStock: false, left: -1, boughthisweek: 5, cars },
	{ price: 33400, discount: 20, size: 39, inStock: true, left: 4, boughthisweek: 25, cars },
	{ price: 37800, discount: -1, size: 41, inStock: true, left: -1, boughthisweek: 20, cars },
]

const about = [
	['id', 'MYX0202301441'],
	['brand', 'MYX'],
	['size', 'C5W'],
	['type', 'LED'],
	['cooling', 'Radiator'],
	['voltage', '12 V'],
	['capacity', '3 W'],
	['diodes_qty', 33],
	['diodes_model', 3014],
	['qty', '2 pcs'],
	['purpose', 'Interior lighting, number plate lighting'],
]

export const RightSide = (props: PropsWithChildren<RightSideProps>) => {
	const [currentSize, setCurrentSize] = useState(sizes[0])
	const [cart, setCart] = useState<Cart>({})

	const currentSizeHandler = (size: ProductSize) => {
		setCurrentSize(size)
	}

	const changeCart = (newCart: Cart) => {
		setCart(newCart)
	}

	return (
		<div className={clsnm(cls.RightSide, [], {})}>
			<div className={cls.umbrella}></div>

			<div className={cls.mini_nav}>
				<span>{location.pathname.split('/').filter(Boolean).join(' > ')}</span>
			</div>

			<div className={cls.flex_wrap}>
				<div className={cls.flex_wrap_col}>
					<h3 className={cls.product_title}>Габариты MYX C5W, 3014, 12V, 3W, Canbus, 2шт.</h3>
					<span className={cls.product_id}>Артикул: MYX0202301441</span>
				</div>
				<div className={cls.favourite_btn}>
					<Icon name='like' size={33} />
				</div>
			</div>

			<Price currentSize={currentSize} />

			<Badges currentSize={currentSize} />

			<Size sizes={sizes} currentSize={currentSize} setCurrentSize={currentSizeHandler} cart={cart} />

			<AddToCart currentSize={currentSize} cart={cart} changeCart={changeCart} />

			<About about={about} />
		</div>
	)
}
