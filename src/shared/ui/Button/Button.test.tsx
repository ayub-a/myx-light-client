import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
    test('Test render', () => {
        render(<Button>Test</Button>)
        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    test('Test class', () => {
        render(<Button style="clear">Test</Button>)
        expect(screen.getByText('Test')).toHaveClass('clear')
    })
})
