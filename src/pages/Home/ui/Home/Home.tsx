import { useTranslation } from 'react-i18next'

import { CustomLink, GridLayout, PageLayout } from 'shared/ui'
import { categoryLinks } from 'shared/config/router/category'
import { clsnm } from 'shared/lib/classNames'

import catgoryItemPng from 'shared/assets/productItem.png'
import emptyCategory from 'shared/assets/emptyCategory.png'

import { Sidebar } from '../Sidebar/Sidebar'

import cls from './Home.module.scss'

const Home = () => {
    const { t } = useTranslation('categories')

    return (
        <PageLayout sidebar={<Sidebar />}>
            <div className={clsnm(cls.Home)}>
                <GridLayout>
                    {categoryLinks.map((item) => (
                        <CustomLink to={item.path} style="clear" key={item.name} className={cls.category_item}>
                            <h3 className={cls.category_title}>{t(`categories.${item.name}`)}</h3>
                            <img src={catgoryItemPng} alt={item.name} className={cls.category_img} />
                        </CustomLink>
                    ))}
                    {new Array(5).fill('test test').map((item, i) => (
                        <CustomLink to="#" style="clear" key={i} className={cls.category_item}>
                            <h3 className={cls.category_title}>{item}</h3>
                            <img src={emptyCategory} alt="Test" className={cls.category_icon} />
                        </CustomLink>
                    ))}
                </GridLayout>
            </div>
        </PageLayout>
    )
}

export default Home
