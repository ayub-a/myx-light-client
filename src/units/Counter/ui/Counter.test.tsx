import { fireEvent, render, screen } from '@testing-library/react'
import { TestProvider } from 'shared/lib/test'

import { Counter } from './Counter'

describe('Counter', () => {
    beforeEach(() => {
        render(
            <TestProvider
                intialState={{
                    counter: { value: 10 },
                }}
            >
                <Counter />
            </TestProvider>
        )
    })

    test('Test render', () => {
        expect(screen.getByTestId('count-value')).toHaveTextContent('10')
    })

    test('Increment', () => {
        const incrementBtn = screen.getByTestId('increment-btn')
        const countValue = screen.getByTestId('count-value')

        fireEvent.click(incrementBtn)

        expect(countValue).toHaveTextContent('11')
    })

    test('Decrement', () => {
        const decrementBtn = screen.getByTestId('decrement-btn')
        const countValue = screen.getByTestId('count-value')

        fireEvent.click(decrementBtn)

        expect(countValue).toHaveTextContent('9')
    })
})
