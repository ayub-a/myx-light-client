import { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import { PageLayout } from 'shared/ui'
import { Sidebar } from '../Sidebar/Sidebar'

// interface SearchByCarProps {}

export const SearchByCar = () => {
    const navigate = useNavigate()

    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/searchbycar') {
            navigate('/searchbycar/brand', { replace: true })
        }
    }, [location.pathname, navigate])

    return (
        <PageLayout sidebar={<Sidebar />}>
            <Outlet />
        </PageLayout>
    )
}
