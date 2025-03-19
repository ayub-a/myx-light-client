import { PropsWithChildren } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'
import { i18nForTest } from 'shared/config/i18n/i18nForTest'

export const TestProvider = ({ children }: PropsWithChildren) => {
    return (
        <MemoryRouter initialEntries={['/']}>
            <I18nextProvider i18n={i18nForTest}>{children}</I18nextProvider>
        </MemoryRouter>
    )
}
