import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from 'shared/lib/theme'
import { ErrorBoundary } from 'shared/lib/errorBoundary'
import { StoreProvider } from 'shared/lib/storeProvider'

import { App } from './app/App'

import 'shared/config/i18n/i18n'

const root = createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <StoreProvider>
                    <App />
                </StoreProvider>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
)
