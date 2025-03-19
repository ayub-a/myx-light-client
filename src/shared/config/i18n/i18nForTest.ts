import { createInstance } from 'i18next'
import { initReactI18next } from 'react-i18next'

export const i18nForTest = createInstance()

i18nForTest.use(initReactI18next).init({
    lng: 'ru',
    fallbackLng: 'ru',
    debug: false,
    resources: { ru: { translations: {} } },
})
