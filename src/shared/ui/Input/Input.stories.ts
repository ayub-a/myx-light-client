import { Meta } from '@storybook/react'
import { Input } from './Input'

const meta: Meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        icon: {
            control: 'boolean',
        },
    },
    args: {
        placeholder: '',
    },
} satisfies Meta<typeof Input>

export default meta

export const Primary = {
    args: {
        icon: false,
    },
}

export const WithIcon = {
    args: {
        icon: true,
    },
}
