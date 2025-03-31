import { Meta, StoryContext, StoryFn, StoryObj } from '@storybook/react'
import { useState } from 'react'

import { Modal, OpenStyle } from './Modal'
import { Button } from '../Button/Button'

const meta = {
    title: 'shared/Modal',
    component: Modal,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: {
        contentBg: true,
        children:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, laudantium saepe? Facere voluptatem, nihil voluptas, dignissimos veritatis ab dolorum corporis deleniti sint animi, architecto qui fuga voluptatum vel quaerat quo.',
    },
    decorators: [WithButton],
} satisfies Meta<typeof Modal>

export default meta

type Story = StoryObj<typeof Modal>

function WithButton(Story: StoryFn, context: StoryContext) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setIsOpen(true)}>Show modal</Button>
            <Story
                {...context}
                args={{ ...context.args, isOpen, onClose: () => setIsOpen(false) }}
                style={{ background: 'red' }}
            />
        </>
    )
}

const getCode = (openStyle: OpenStyle) => `
<Modal 
    isOpen={}
    onClose={() => {}}
    openStyle="${openStyle}"
>
    {children}
</Modal>
`

export const Default: Story = {
    args: {
        openStyle: 'opacity',
    },
    parameters: {
        docs: {
            source: {
                code: getCode('opacity'),
            },
        },
    },
}

export const Scale: Story = {
    args: {
        openStyle: 'scale',
    },
    parameters: {
        docs: {
            source: {
                code: getCode('scale'),
            },
        },
    },
}

export const TopBottom: Story = {
    args: {
        openStyle: 'top-bottom',
    },
    parameters: {
        docs: {
            source: {
                code: getCode('top-bottom'),
            },
        },
    },
}

export const BottomTop: Story = {
    args: {
        openStyle: 'bottom-top',
    },
    parameters: {
        docs: {
            source: {
                code: getCode('bottom-top'),
            },
        },
    },
}
