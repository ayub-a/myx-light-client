import { useNavigate } from 'react-router-dom'
import { GridLayout, Icon } from 'shared/ui'

import { clsnm } from 'shared/lib/classNames'

import cls from './CarBrand.module.scss'

import brandChevrolet from 'shared/assets/carBrands/brand-chevrolet.png'
import brandHyundai from 'shared/assets/carBrands/brand-hyundai.png'
import brandToyota from 'shared/assets/carBrands/brand-toyota.png'
import brandKia from 'shared/assets/carBrands/brand-kia.png'
import brandByd from 'shared/assets/carBrands/brand-byd.png'
import brandVolkswagen from 'shared/assets/carBrands/brand-volkswagen.png'
import brandMercedes from 'shared/assets/carBrands/brand-mercedes.png'
import brandBmw from 'shared/assets/carBrands/brand-bmw.png'
import brandNissan from 'shared/assets/carBrands/brand-nissan.png'
import brandMazda from 'shared/assets/carBrands/brand-mazda.png'
import brandRenault from 'shared/assets/carBrands/brand-renault.png'
import brandAudi from 'shared/assets/carBrands/brand-Audi.png'
import brandSkoda from 'shared/assets/carBrands/brand-skoda.png'
import brandLexus from 'shared/assets/carBrands/brand-lexus.png'
import brandPeugeot from 'shared/assets/carBrands/brand-peugeot.png'
import brandSeat from 'shared/assets/carBrands/brand-seat.png'
import brandSuzuki from 'shared/assets/carBrands/brand-suzuki.png'
import brandVolvo from 'shared/assets/carBrands/brand-volvo.png'
import brandSubaru from 'shared/assets/carBrands/brand-subaru.png'
import brandMitsubishi from 'shared/assets/carBrands/brand-mitsubishi.png'
import brandLandRover from 'shared/assets/carBrands/brand-LandRover.png'
import brandHonda from 'shared/assets/carBrands/brand-Honda.png'
import brandDaewoo from 'shared/assets/carBrands/brand-Daewoo.png'

// interface CarBrandProps {}

const brands = [
    { name: 'Chevrolet', icon: brandChevrolet },
    { name: 'Hyundai', icon: brandHyundai },
    { name: 'Toyota', icon: brandToyota },
    { name: 'Kia', icon: brandKia },
    { name: 'BYD', icon: brandByd },
    { name: 'Volkswagen', icon: brandVolkswagen },
    { name: 'Mercedes', icon: brandMercedes },
    { name: 'BMW', icon: brandBmw },
    { name: 'Nissan', icon: brandNissan },
    { name: 'Mazda', icon: brandMazda },
    { name: 'Renault', icon: brandRenault },
    { name: 'Audi', icon: brandAudi },
    { name: 'Skoda', icon: brandSkoda },
    { name: 'Lexus', icon: brandLexus },
    { name: 'Peugeot', icon: brandPeugeot },
    { name: 'Seat', icon: brandSeat },
    { name: 'Suzuki', icon: brandSuzuki },
    { name: 'Volvo', icon: brandVolvo },
    { name: 'Subaru', icon: brandSubaru },
    { name: 'Mitsubishi', icon: brandMitsubishi },
    { name: 'LandRover', icon: brandLandRover },
    { name: 'Honda', icon: brandHonda },
    { name: 'Daewoo', icon: brandDaewoo },
]

const CarBrand = () => {
    const navigate = useNavigate()

    const handleBrandSelect = (brand: string) => {
        navigate(`/searchbycar/${brand}`)
    }

    return (
        <div className={clsnm(cls.CarBrand, [], {})}>
            <div className={cls.umbrella}></div>

            <div className={cls.page_header}>
                <h3>Выберите бренд</h3>

                <div className={cls.brand_search}>
                    <input type="text" placeholder="Поиск бренда" />
                    <Icon name="search" />
                </div>
            </div>

            <GridLayout>
                {brands.map(({ name, icon }) => (
                    <div
                        key={name}
                        className={cls.brand_item}
                        onClick={() => handleBrandSelect(name)}
                    >
                        <img src={icon} alt="car brand" />
                    </div>
                ))}
            </GridLayout>
        </div>
    )
}

export default CarBrand
