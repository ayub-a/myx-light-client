import { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'

const meta: Meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {},
} satisfies Meta<typeof Navbar>

export default meta

type Story = StoryObj<typeof Navbar>

export const Primary: Story = {}
