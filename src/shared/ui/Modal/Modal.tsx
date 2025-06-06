import { PropsWithChildren, useCallback, useEffect } from 'react'

import { clsnm } from 'shared/lib/classNames'
import { useTheme } from 'shared/lib/theme'

import { Portal } from '../Portal/Portal'

import cls from './Modal.module.scss'

export type OpenStyle = 'opacity' | 'scale' | 'top-bottom' | 'bottom-top'

interface ModalProps {
    isOpen: boolean
    onClose?: () => void
    openStyle?: OpenStyle
    contentBg?: boolean
}

export const Modal = ({
    children,
    isOpen,
    onClose,
    openStyle = 'opacity',
    contentBg,
}: PropsWithChildren<ModalProps>) => {
    const { theme } = useTheme()

    const closeByEscape = useCallback(
        (e: KeyboardEvent) => {
            if (e.code === 'Escape') onClose()
        },
        [onClose]
    )

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', closeByEscape)
            document.body.style.overflow = 'hidden'
        }

        return () => {
            document.removeEventListener('keydown', closeByEscape)
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    return (
        <Portal>
            <div className={clsnm(cls.Modal, [`theme_${theme}`], { [cls.open]: isOpen })}>
                <div onClick={onClose} className={cls.modal_overlay}>
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={clsnm(cls.modal_content, ['App', cls[openStyle]], { [cls.content_bg]: contentBg })}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    )
}
