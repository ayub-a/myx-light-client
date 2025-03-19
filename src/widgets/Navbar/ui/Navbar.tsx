import { useTranslation } from 'react-i18next'
import { Button, CustomLink, Hint, Icon } from 'shared/ui'

import LogoPng from 'shared/assets/logo.png'

import { Locale } from './Locale/Locale'
import { LocaleTime } from './LocaleTime/LocaleTime'
import { MainNavigation } from './MainNavigation/MainNavigation'
import { SearchInput } from './SearchInput/SearchInput'
import { InfoNavigation } from './InfoNavigation/InfoNavigation'

import { clsnm } from 'shared/lib/classNames'

import cls from './Navbar.module.scss'

export const Navbar = () => {
    const { t } = useTranslation()

    return (
        <div className={clsnm(cls.Navbar)} data-testid="navbar">
            <div className={cls.top_header}>
                <div className={cls.container}>
                    <Locale />

                    <Button style="clear" size="s">
                        <Icon name="shop" />
                        {t('navbar.work-schedule')}, 9:00-18:00
                    </Button>

                    <div className={cls.extra_items}>
                        <div className={cls.info_nav}>
                            <InfoNavigation />
                        </div>

                        <Hint text="Soon" direction="bottom">
                            <Button style="clear" size="s">
                                <Icon name="wholesale" />
                                {t('navbar.wholesale')}
                            </Button>
                        </Hint>

                        <Hint
                            text="Current Time (Uzbekistan)"
                            direction="bottom"
                        >
                            <LocaleTime />
                        </Hint>
                    </div>
                </div>
            </div>

            <div className={cls.bottom_header}>
                <div className={cls.container}>
                    <CustomLink to="/" className={cls.logo} style="clear">
                        <img src={LogoPng} alt="logo" />
                        <h1 className={cls.logo_title}>
                            {t('navbar.logo-title')}
                        </h1>
                    </CustomLink>

                    <div className={cls.search_and_nav}>
                        <Button>
                            <Icon name="burger" />
                            {t('navbar.catalog')}
                        </Button>
                        <SearchInput />
                        <MainNavigation />
                    </div>
                </div>
            </div>
        </div>
    )
}
