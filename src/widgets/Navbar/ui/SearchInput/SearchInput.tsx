import { PropsWithChildren, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Input } from 'shared/ui'
import { clsnm } from 'shared/lib/classNames'

import cls from './SearchInput.module.scss'

interface SearchInputProps {}

export const SearchInput = ({}: PropsWithChildren<SearchInputProps>) => {
	const { t } = useTranslation()
	const [value, setValue] = useState('')

	const changeInput = (value: string) => {
		setValue(value)
	}

	return (
		<div className={clsnm(cls.SearchInput)}>
			<Input
				className={cls.input}
				value={value}
				onChange={changeInput}
				placeholder={t('navbar.search-placeholder')}
				icon
			/>
		</div>
	)
}
