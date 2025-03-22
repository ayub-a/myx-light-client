import { PropsWithChildren } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    elem?: HTMLElement
}

export const Portal = ({ children, elem = document.body }: PropsWithChildren<PortalProps>) => {
    return createPortal(children, elem)
}
