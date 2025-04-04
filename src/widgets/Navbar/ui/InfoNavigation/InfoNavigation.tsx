import { CustomLink } from 'shared/ui/CustomLink/CustomLink'
import { clsnm } from 'shared/lib/classNames'

import cls from './InfoNavigation.module.scss'
import { useTranslation } from 'react-i18next'

interface IInfoNavigationProps {
    className?: string
}

export const InfoNavigation = ({ className }: IInfoNavigationProps) => {
    const { t } = useTranslation()

    return (
        <ul className={clsnm(cls.InfoNavigation, [className])}>
            <li>
                <CustomLink to="/">{t('navbar.delivery')}</CustomLink>
            </li>
            <li>
                <CustomLink to="/contacts">{t('navbar.contacts')}</CustomLink>
            </li>
            <li>
                <CustomLink to="/about">{t('navbar.about')}</CustomLink>
            </li>
        </ul>
    )
}
