import { useLocation, useNavigate } from 'react-router-dom'

import { clsnm } from 'shared/lib/classNames'
import { GridLayout, Icon } from 'shared/ui'

import cls from './CarBody.module.scss'

import audiCar from 'shared/assets/carBrands/audi-car.png'
import coveredCar from 'shared/assets/carBrands/covered-car.png'

// interface CarBodyProps {}

const aboutCar = [
    ['Класс', 'Gran Turismo'],
    ['Год', '2013-2020'],
    ['Код кузова', 'F34'],
]

const CarBody = () => {
    const navigate = useNavigate()
    const { pathname } = useLocation()

    const handleBodySelect = (body: string, gen: number) => {
        navigate(`${pathname}/${body}/${gen}`)
    }

    return (
        <div className={clsnm(cls.CarBody, [], {})}>
            <div className={cls.umbrella}></div>

            <div className={cls.page_header}>
                <h3>Выберите кузов</h3>
            </div>

            <GridLayout col={3}>
                {new Array(15).fill('Audi').map((body, i) => (
                    <div
                        key={i}
                        className={cls.body_item}
                        data-gen={i + 1}
                        onClick={() => handleBodySelect('sedan', i + 1)}
                    >
                        <div className={cls.substrate}>
                            <div className={cls.body_header}>
                                <div className={cls.body_type}>Хетчбек</div>
                                <Icon name="info" size={25} className={cls.info_icon} />
                            </div>

                            <ul className={cls.about_car_list}>
                                {aboutCar.map((car, i) => (
                                    <li key={i} className={cls.about_item}>
                                        <div className={cls.title}>{car[0]}</div>
                                        <span className={cls.divider}></span>
                                        <div className={cls.value}>{car[1]}</div>
                                    </li>
                                ))}
                            </ul>

                            <div className={cls.car_img}>
                                {i % 2 === 1 ? (
                                    <img src={coveredCar} className={cls.covered_car} alt="covered-car" />
                                ) : (
                                    <img src={audiCar} alt="audi" />
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </GridLayout>
        </div>
    )
}

export default CarBody
