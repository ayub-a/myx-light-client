import { PropsWithChildren, useState } from 'react'

import { priceFormatter } from 'shared/lib/priceFormatter'
import { clsnm } from 'shared/lib/classNames'
import { Button, Icon } from 'shared/ui'

import cls from './Sidebar.module.scss'

interface SidebarProps {}

export const Sidebar = (props: PropsWithChildren<SidebarProps>) => {
	const [promo, setPromo] = useState('')
	return (
		<div className={clsnm(cls.Sidebar, [], {})}>
			<div className={clsnm(cls.cart_top, [cls.wrap])}>
				<h3>Cart</h3>
				<span>5 products</span>
			</div>

			<div className={clsnm(cls.selected, [cls.wrap])}>
				<h4>Selected</h4>
				<span>4 products</span>
			</div>

			<div className={cls.promo_code}>
				<input type='text' onChange={(e) => setPromo(e.target.value)} value={promo} placeholder='Promo code' />
				<div className={clsnm(cls.promo_code_confirm, [], { [cls.active]: !!promo })}>
					<Icon name='confirmPromo' size={30} />
				</div>
			</div>

			<div className={clsnm(cls.total_price, [cls.wrap])}>
				<h3>Total:</h3>
				<span>{priceFormatter.defaultPrice(842500, 'SUM')}</span>
			</div>

			<Button className={cls.checkout_btn}>Proceed to checkout</Button>
		</div>
	)
}
