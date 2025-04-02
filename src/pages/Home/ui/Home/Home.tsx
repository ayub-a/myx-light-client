import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useUnit } from 'effector-react'

import { CustomLink, GridLayout, Loader, PageLayout } from 'shared/ui'
import { clsnm } from 'shared/lib/classNames'
// import { categoryLinks } from 'shared/config/router/category'

import emptyCategory from 'shared/assets/emptyCategory.png'

import { fetchCategoriesFx } from '../../api/getCategories'
import { $categories } from '../../model/model'
import { Sidebar } from '../Sidebar/Sidebar'
import cls from './Home.module.scss'

const Home = () => {
    const { t } = useTranslation('categories')

    const [{ categories, isLoading }, fetchCategories] = useUnit([$categories, fetchCategoriesFx])

    useEffect(() => {
        if (categories.length === 0) fetchCategories()
    }, [])

    return (
        <PageLayout sidebar={<Sidebar />}>
            <div className={clsnm(cls.Home)}>
                {isLoading ? (
                    <Loader />
                ) : (
                    <GridLayout>
                        {categories.map((item) => (
                            <CustomLink
                                to={`/category/${item.name}`}
                                style="clear"
                                key={item.name}
                                className={cls.category_item}
                            >
                                <h3 className={cls.category_title}>{t(`categories.${item.name}`)}</h3>
                                <img src={item.img || emptyCategory} alt={item.name} className={cls.category_img} />
                            </CustomLink>
                        ))}
                    </GridLayout>
                )}
            </div>
        </PageLayout>
    )
}

export default Home
