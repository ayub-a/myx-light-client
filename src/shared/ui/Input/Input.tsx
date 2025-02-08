import { ChangeEvent, InputHTMLAttributes, PropsWithChildren } from 'react'

import SearchIcon from 'shared/assets/icons/search.svg'

import { clsnm } from 'shared/lib/classNames'

import cls from './Input.module.scss'

type HtmlInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

interface InputProps extends HtmlInputProps {
	onChange: (value: string) => void
	icon?: boolean
}

export const Input = (props: PropsWithChildren<InputProps>) => {
	const { type = 'text', value, onChange, icon, ...otherProps } = props

	const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value)
	}

	return (
		<div className={clsnm(cls.Input, [], { [cls.icon]: icon })}>
			<input onChange={changeHandler} type={type} value={value} {...otherProps} />
			{icon ? <SearchIcon /> : null}
		</div>
	)
}
