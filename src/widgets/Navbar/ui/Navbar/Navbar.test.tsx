import { fireEvent, render, screen } from '@testing-library/react'
import { TestProvider } from 'shared/lib/test'
import { Navbar } from './Navbar'
import { Locale } from '../Locale/Locale'

describe('Navbar', () => {
    test('Test render', () => {
        render(
            <TestProvider>
                <Navbar />
            </TestProvider>
        )

        expect(screen.getByTestId('navbar')).toBeInTheDocument()
    })
})

describe('Locale', () => {
    test('Test render', () => {
        render(
            <TestProvider>
                <Locale />
            </TestProvider>
        )

        expect(screen.getByTestId('lang-toggle')).toBeInTheDocument()
    })

    test('Show language list', () => {
        render(
            <TestProvider>
                <Locale />
            </TestProvider>
        )

        const langToggle = screen.getByTestId('lang-toggle')
        const langList = screen.getByTestId('lang-list')

        fireEvent.click(langToggle)

        expect(langList).toHaveClass('show_lang_list')
    })
})
