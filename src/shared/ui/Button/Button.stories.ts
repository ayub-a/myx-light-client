import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },

    tags: ['autodocs'],
    args: {
        children: 'Button',
        size: 'm',
    },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Rounded: Story = {
    args: {
        style: 'rounded',
    },
}

export const Square: Story = {
    args: {
        style: 'square',
    },
}

export const OutlineRounded: Story = {
    args: {
        style: 'outline-rounded',
    },
}

export const OutlineSquare: Story = {
    args: {
        style: 'outline-square',
    },
}

export const Clear: Story = {
    args: {
        style: 'clear',
    },
}
