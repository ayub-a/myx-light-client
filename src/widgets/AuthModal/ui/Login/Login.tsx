import { FormEventHandler, useState } from 'react'
import { useUnit } from 'effector-react'

import { TAuthType } from 'widgets/AuthModal'

import { userLoginFx } from 'features/auth'

import { clsnm } from 'shared/lib/classNames'
import { Button, Input } from 'shared/ui'

import cls from './Login.module.scss'

interface LoginProps {
    className?: string
    changeAuthType?: (authType: TAuthType) => void
}

export const Login = ({ className, changeAuthType }: LoginProps) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = useUnit(userLoginFx)

    const emailInputHandler = (value: string) => {
        setEmail(value)
    }

    const passwordInputHandler = (value: string) => {
        setPassword(value)
    }

    const checkUserHandler: FormEventHandler = (e) => {
        e.preventDefault()
        login({ email, password })
    }

    return (
        <div className={clsnm(cls.Login, [className], {})}>
            <h2 className={cls.title}>Login to Myx</h2>

            <form onSubmit={checkUserHandler} className={cls.login_form}>
                <Input value={email} onChange={emailInputHandler} placeholder="e-mail or login" />
                <Input value={password} onChange={passwordInputHandler} placeholder="password" />

                <Button
                    disabled={!(email.length >= 3) || !(password.length >= 3)}
                    type="submit"
                    className={cls.submit_btn}
                >
                    Login
                </Button>
            </form>

            <Button style="clear" onClick={() => changeAuthType('registration')} className={cls.dont_have_account}>
                I don`t have an account
            </Button>
        </div>
    )
}
