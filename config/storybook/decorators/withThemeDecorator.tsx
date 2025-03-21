import React from 'react'
import { StoryContext, StoryFn } from '@storybook/react'

export const withThemeDecorator = (Story: StoryFn, context: StoryContext) => {
    const { theme } = context.globals

    document.body.setAttribute('data-theme', theme)

    document.body.classList.add('App')

    return <Story {...context} />
}
