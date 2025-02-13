import { Button, Icon } from 'shared/ui'
import { clsnm } from 'shared/lib/classNames'

import cls from './Locale.module.scss'

export const Locale = () => {
	return (
		<div className={clsnm(cls.Locale)}>
			<Button style='clear' size='s'>
				<Icon name='location' />
				<span className={cls.text}>Uzbekistan</span>•<span>SUM</span>
			</Button>

			<Button style='clear' size='s'>
				<Icon name='language' />
				<span className={cls.text}>Russian</span>
			</Button>
		</div>
	)
}
