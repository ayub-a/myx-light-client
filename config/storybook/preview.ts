import type { Preview } from '@storybook/react'

import { globalTypes } from './globalTypes.ts'

import { withThemeDecorator } from './decorators/withThemeDecorator'
import { withI18nDecorator } from './decorators/withI18nDecorator'

import '../../src/app/styles/index.scss'
import './styles/storybook.scss'

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    argTypes: {
        ref: {
            table: {
                disable: true,
            },
        },
        onClick: {
            table: {
                disable: true,
            },
        },
        key: {
            table: {
                disable: true,
            },
        },
    },
    decorators: [withThemeDecorator, withI18nDecorator],
    globalTypes,
}

export default preview
