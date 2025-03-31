import { FormEventHandler, useState } from 'react'
import { useUnit } from 'effector-react'

import { TAuthType } from 'widgets/AuthModal'

import { userRegistrationFx } from 'features/auth'

import { clsnm } from 'shared/lib/classNames'
import { Button, Input } from 'shared/ui'

import cls from './Registration.module.scss'

interface RegistrationProps {
    className?: string
    changeAuthType?: (authType: TAuthType) => void
}

export const Registration = ({ className, changeAuthType }: RegistrationProps) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const userRegistraion = useUnit(userRegistrationFx)

    const changeUserNameInput = (value: string) => {
        setUsername(value)
    }

    const changeLoginInput = (value: string) => {
        setEmail(value)
    }

    const changePasswordInput = (value: string) => {
        setPassword(value)
    }

    const userRegistraionHanler: FormEventHandler = (e) => {
        e.preventDefault()
        userRegistraion({ username, email, password })
    }

    return (
        <div className={clsnm(cls.Registration, [className], {})}>
            <h2 className={cls.title}>Auth</h2>

            <form onSubmit={userRegistraionHanler} className={cls.login_form}>
                <Input value={username} onChange={changeUserNameInput} placeholder="username" />
                <Input value={email} onChange={changeLoginInput} placeholder="e-mail or login" />
                <Input value={password} onChange={changePasswordInput} placeholder="password" />

                <span className={cls.hint}>* min length 3 symbols each input</span>

                <Button
                    disabled={!(email.length >= 3) || !(password.length >= 3) || !(username.length >= 3)}
                    type="submit"
                    className={cls.submit_btn}
                >
                    Create new user
                </Button>
            </form>

            <Button style="clear" onClick={() => changeAuthType('login')} className={cls.already_have_account}>
                Already have an account
            </Button>
        </div>
    )
}
