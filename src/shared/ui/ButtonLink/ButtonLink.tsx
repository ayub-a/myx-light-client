import { PropsWithChildren } from 'react'

import { CustomLink } from '../CustomLink/CustomLink'
import { Button, ButtonProps } from '../Button/Button'

import cls from './ButtonLink.module.scss'

interface ButtonLinkProps extends ButtonProps {
	to: string
}

export const ButtonLink = ({ children, to, ...others }: PropsWithChildren<ButtonLinkProps>) => {
	return (
		<CustomLink to={to} className={cls.CustomLink} style='clear'>
			<Button className={cls.Button} {...others}>
				{children}
			</Button>
		</CustomLink>
	)
}
