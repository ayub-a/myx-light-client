import { mainNavigationLinks } from '../../config/router/mainNavigation'
import { CustomLink } from '../CustomLink/CustomLink'

export const MainNavigation = () => {
    return (
        <div className="nav">
            {mainNavigationLinks.map(({ name, path }) => (
                <CustomLink key={name} to={path}>
                    {name}
                </CustomLink>
            ))}
        </div>
    )
}
