import { PropsWithChildren } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { I18nextProvider } from 'react-i18next'

import { i18nForTest } from 'shared/config/i18n/i18nForTest'
import { DeepPartial, StateSchema, StoreProvider } from '../storeProvider'

interface TestProviderProps {
    intialState?: DeepPartial<StateSchema>
}

export const TestProvider = ({ children, intialState }: PropsWithChildren<TestProviderProps>) => {
    return (
        <StoreProvider initialState={intialState}>
            <MemoryRouter initialEntries={['/']}>
                <I18nextProvider i18n={i18nForTest}>{children}</I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}
