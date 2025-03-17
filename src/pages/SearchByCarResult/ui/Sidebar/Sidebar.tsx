// import { PropsWithChildren } from 'react'

import { clsnm } from 'shared/lib/classNames'

import cls from './Sidebar.module.scss'

import audiCar from 'shared/assets/carBrands/audi-car.png'
import brandAudi from 'shared/assets/carBrands/brand-Audi.png'
import { useParams } from 'react-router-dom'

// interface SidebarProps {}

const aboutCar = [
    ['Поколение', ''],
    ['Класс', 'Gran Turismo'],
    ['Год', '2013-2020'],
    ['Код кузова', 'F34'],
    ['Двери', '3'],
]

export const Sidebar = () => {
    const { brand, model, body, gen } = useParams()

    return (
        <div className={clsnm(cls.Sidebar, [], {})}>
            <div className={cls.car_and_logo}>
                <div className={cls.car_logo}>
                    <img src={brandAudi} alt="" />
                </div>
                <div className={cls.car_img}>
                    <img src={audiCar} alt="" />
                </div>
            </div>

            <div className={cls.about_car}>
                <div className={cls.brand_model_body}>
                    <h3>
                        {brand} {model}
                    </h3>
                    <span>{body}</span>
                </div>

                <ul className={cls.about_car_list}>
                    {aboutCar.map((car, i) => (
                        <li key={i} className={cls.about_item}>
                            <div className={cls.title}>{car[0]}</div>
                            <span className={cls.divider}></span>
                            <div className={cls.value}>
                                {car[1] ? car[1] : gen}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
