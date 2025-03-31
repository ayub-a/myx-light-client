import { useEffect, useState } from 'react'
import { useUnit } from 'effector-react'

import { Login } from 'widgets/AuthModal/ui/Login'
import { Registration } from 'widgets/AuthModal/ui/Registration'

import { $userStore, clearError } from 'units/user'

import { clsnm } from 'shared/lib/classNames'
import { Icon, Loader, Modal } from 'shared/ui'

import cls from './AuthModal.module.scss'

export type TAuthType = 'login' | 'registration'

interface IAuthModalProps {
    className?: string
}

export const AuthModal = ({ className }: IAuthModalProps) => {
    const { isAuth, isLoading, error } = useUnit($userStore)
    const clearErrorEvent = useUnit(clearError)

    const [authType, setAuthType] = useState<TAuthType>('login')
    const [modal, setModal] = useState(false)
    const [showPopup, setShopPopup] = useState(false)

    const changeAuthType = (authType: TAuthType) => {
        setAuthType(authType)
    }

    useEffect(() => {
        if (isAuth && !isLoading) setModal(false)
    }, [isAuth, isLoading])

    useEffect(() => {
        if (error && !showPopup) {
            setShopPopup(true)

            setTimeout(() => {
                setShopPopup(false)
            }, 3600)

            setTimeout(() => {
                clearErrorEvent()
            }, 4200)
        }
    }, [error])

    return (
        <>
            <div onClick={() => setModal(true)} className={clsnm('', [className], { [cls.auth_mode]: modal })}>
                <Icon name="login" size={25} />
            </div>

            <Modal openStyle="top-bottom" isOpen={modal} onClose={() => setModal(false)}>
                <div
                    data-msg={error}
                    className={clsnm(cls.notification_popup, [cls[authType]], { [cls.show]: showPopup })}
                />

                <div className={clsnm(cls.AuthModal)}>
                    {isLoading ? <Loader className={cls.loader} /> : null}

                    {authType === 'login' ? (
                        <Login changeAuthType={changeAuthType} />
                    ) : (
                        <Registration changeAuthType={changeAuthType} />
                    )}
                </div>
            </Modal>
        </>
    )
}
