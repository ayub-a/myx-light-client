import { PropsWithChildren } from 'react'

import { clsnm } from 'shared/lib/classNames'

import cls from './About.module.scss'

interface AboutProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    about: any[]
}

export const About = ({ about }: PropsWithChildren<AboutProps>) => {
    return (
        <div className={clsnm(cls.About, [], {})}>
            <h3 className={cls.about_title}>About</h3>

            <ul className={cls.about_list}>
                {about.map((el, i) => (
                    <li key={i} className={cls.about_item}>
                        <div className={cls.title}>{el[0]}</div>
                        <span className={cls.divider}></span>
                        <div className={cls.value}>{el[1]}</div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
