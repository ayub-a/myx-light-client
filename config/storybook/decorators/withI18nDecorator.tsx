import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { StoryContext, StoryFn } from '@storybook/react'
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import i18n from '../../../src/shared/config/i18n/i18n'

export const withI18nDecorator = (Story: StoryFn, context: StoryContext) => {
    const { locale } = context.globals

    i18next.changeLanguage(locale)

    return (
        <BrowserRouter>
            <I18nextProvider i18n={i18n}>
                <Story {...context} />
            </I18nextProvider>
        </BrowserRouter>
    )
}
