import { useEffect, useState } from 'react'
import { Button, Hint, Icon } from 'shared/ui'

// Only for testing, not for production
export const TestErrorBoundary = () => {
    const [error, setError] = useState(false)

    const throwError = () => setError(true)

    useEffect(() => {
        if (error) throw new Error()
    }, [error])

    return (
        <Hint text="Test ErrorBoundary" direction="bottom">
            <Button style="clear" onClick={throwError}>
                <Icon name="warningV1" />
            </Button>
        </Hint>
    )
}
