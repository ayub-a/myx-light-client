import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, Icon } from 'shared/ui'
import { clsnm } from 'shared/lib/classNames'
import { LOCAL_STORAGE_LANG_KEY } from 'shared/const/localStorage'

import { TestErrorBoundary } from '../TestErrorBoundary/TestErrorBoundary'

import cls from './Locale.module.scss'

const languages: Record<string, { code: string; lang: string }> = {
    ru: { code: 'ru', lang: 'Русский' },
    en: { code: 'en', lang: 'English' },
}

const initialLanguage = localStorage.getItem(LOCAL_STORAGE_LANG_KEY) || languages.ru.code

export const Locale = () => {
    const { i18n } = useTranslation()
    const [currentLang, setCurrentLang] = useState(initialLanguage)
    const [showLangList, setShowLangList] = useState(false)

    const langButtonRef = useRef<HTMLButtonElement>(null)

    const changeLanguage = (code: string) => {
        i18n.changeLanguage(code)
        setCurrentLang(languages[code].code)
        localStorage.setItem(LOCAL_STORAGE_LANG_KEY, code)
        setShowLangList(false)
    }

    const clickOutside = (e: MouseEvent) => {
        if (langButtonRef.current && !langButtonRef.current.contains(e.target as Node)) {
            setShowLangList(false)
        }
    }

    useEffect(() => {
        i18n.changeLanguage(initialLanguage)
        document.body.addEventListener('click', clickOutside)

        return () => {
            document.body.removeEventListener('click', clickOutside)
        }
    }, [i18n])

    return (
        <div className={clsnm(cls.Locale)}>
            <TestErrorBoundary />

            <Button style="clear" size="s">
                <Icon name="location" />
                <span className={cls.text}>Узбекистан</span>•<span>СУМ</span>
            </Button>

            <div className={cls.language_section}>
                <Button
                    data-testid="lang-toggle"
                    ref={langButtonRef}
                    style="clear"
                    size="s"
                    onClick={() => setShowLangList((prev) => !prev)}
                >
                    <Icon name="language" />
                    <span className={cls.text}>{languages[currentLang].lang}</span>
                </Button>

                <ul
                    data-testid="lang-list"
                    className={clsnm(cls.language_list, [], {
                        [cls.show_lang_list]: showLangList,
                    })}
                >
                    {Object.values(languages).map(({ code, lang }) => (
                        <li
                            key={code}
                            onClick={() => changeLanguage(code)}
                            className={currentLang === code ? cls.active_lang : ''}
                        >
                            {lang}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
