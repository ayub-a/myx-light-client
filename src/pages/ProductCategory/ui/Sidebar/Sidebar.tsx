import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { clsnm } from 'shared/lib/classNames'

import { categoryLinks } from 'shared/config/router/category'
import { SidebarNavigation } from 'shared/ui'

import cls from './Sidebar.module.scss'

export const Sidebar = () => {
    const params = useParams()
    const [category, setCategory] = useState(params.category)

    return (
        <div className={clsnm(cls.Sidebar, [], {})}>
            <SidebarNavigation data={categoryLinks} changeCategory={setCategory} currentCategory={category} />
        </div>
    )
}
