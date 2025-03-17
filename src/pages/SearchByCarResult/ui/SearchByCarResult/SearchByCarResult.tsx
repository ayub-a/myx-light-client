// import { PropsWithChildren } from 'react'

import { CustomLink, GridLayout, PageLayout } from 'shared/ui'
import { Sidebar } from '../Sidebar/Sidebar'

import { clsnm } from 'shared/lib/classNames'

import cls from './SearchByCarResult.module.scss'

import lowBeam from 'shared/assets/lightPurpose/purpose-lowBeam.png'
import highBeam from 'shared/assets/lightPurpose/purpose-highBeam.png'
import frontDimensions from 'shared/assets/lightPurpose/purpose-frontDimensions.png'
import fogLights from 'shared/assets/lightPurpose/purpose-fogLights.png'
import frontTurnSignals from 'shared/assets/lightPurpose/purpose-frontTurnSignals.png'
import daytimeRunningLights from 'shared/assets/lightPurpose/purpose-daytimeRunningLights.png'
import turningLight from 'shared/assets/lightPurpose/purpose-turningLight.png'
import rearTurnSignals from 'shared/assets/lightPurpose/purpose-rearTurnSignals.png'
import rearMove from 'shared/assets/lightPurpose/purpose-rearMove.png'
import rearPTF from 'shared/assets/lightPurpose/purpose-rearPTF.png'
import rearDimensions from 'shared/assets/lightPurpose/purpose-rearDimensions.png'
import backlightTrunk from 'shared/assets/lightPurpose/purpose-backlightTrunk.png'
import ceilingLampSalon from 'shared/assets/lightPurpose/purpose-ceilingLampSalon.png'
import gloveLighting from 'shared/assets/lightPurpose/purpose-gloveLighting.png'
import backlightForReading from 'shared/assets/lightPurpose/purpose-backlightForReading.png'
import lightingDoors from 'shared/assets/lightPurpose/purpose-lightingDoors.png'

const lampPurposes = [
    {
        id: 1,
        purpose: 'Ближний свет',
        icon: lowBeam,
        lights: [
            { name: 'Галогеновые лампы', link: 'category/galogen' },
            { name: 'Светодиоды', link: 'category/led' },
            { name: 'Штатные ксеноновые лампы', link: 'category/ksenon' },
        ],
    },
    {
        id: 2,
        purpose: 'Дальний свет',
        icon: highBeam,
        lights: [
            { name: 'Галогеновые лампы', link: '/category/galogen' },
            { name: 'Светодиоды', link: '/category/led' },
            { name: 'Штатные ксеноновые лампы', link: '/category/ksenon' },
        ],
    },
    {
        id: 3,
        purpose: 'Передние габариты',
        icon: frontDimensions,
        lights: [
            { name: 'Галогеновые лампы', link: '/category/galogen' },
            { name: 'Светодиоды', link: '/category/led' },
            { name: 'Штатные ксеноновые лампы', link: '/category/ksenon' },
        ],
    },
    {
        id: 4,
        purpose: 'Противо-туманные фары',
        icon: fogLights,
        lights: [
            { name: 'Галогеновые лампы', link: '/category/galogen' },
            { name: 'Светодиоды', link: '/category/led' },
        ],
    },
    {
        id: 5,
        purpose: 'Передние поворотники',
        icon: frontTurnSignals,
        lights: [{ name: 'Галогеновые лампы', link: '/category/galogen' }],
    },
    {
        id: 6,
        purpose: 'Дневные ходовые огни',
        icon: daytimeRunningLights,
        lights: [{ name: 'Галогеновые лампы', link: '/category/galogen' }],
    },
    {
        id: 7,
        purpose: 'Поворотный свет',
        icon: turningLight,
        lights: [
            { name: 'Галогеновые лампы', link: '/category/galogen' },
            { name: 'Светодиоды', link: '/category/led' },
        ],
    },
    {
        id: 8,
        purpose: 'Задние поворотники',
        icon: rearTurnSignals,
        lights: [
            { name: 'Галогеновые лампы', link: '/category/galogen' },
            { name: 'Светодиоды', link: '/category/led' },
        ],
    },
    {
        id: 9,
        purpose: 'Задний ход',
        icon: rearMove,
        lights: [{ name: 'Галогеновые лампы', link: '/category/galogen' }],
    },
    {
        id: 10,
        purpose: 'Задний ПТФ',
        icon: rearPTF,
        lights: [
            { name: 'Галогеновые лампы', link: '/category/galogen' },
            { name: 'Светодиоды', link: '/category/led' },
        ],
    },
    {
        id: 11,
        purpose: 'Задние габариты',
        icon: rearDimensions,
        lights: [
            { name: 'Галогеновые лампы', link: '/category/galogen' },
            { name: 'Светодиоды', link: '/category/led' },
        ],
    },
    {
        id: 12,
        purpose: 'Подсветка багажника',
        icon: backlightTrunk,
        lights: [
            { name: 'Галогеновые лампы', link: '/category/galogen' },
            { name: 'Светодиоды', link: '/category/led' },
        ],
    },
    {
        id: 13,
        purpose: 'Плафон салона',
        icon: ceilingLampSalon,
        lights: [
            { name: 'Галогеновые лампы', link: '/category/galogen' },
            { name: 'Светодиоды', link: '/category/led' },
        ],
    },
    {
        id: 14,
        purpose: 'Подсветка бардачка',
        icon: gloveLighting,
        lights: [
            { name: 'Галогеновые лампы', link: '/category/galogen' },
            { name: 'Светодиоды', link: '/category/led' },
        ],
    },
    {
        id: 15,
        purpose: 'Подсветка для чтения',
        icon: backlightForReading,
        lights: [
            { name: 'Галогеновые лампы', link: '/category/galogen' },
            { name: 'Светодиоды', link: '/category/led' },
        ],
    },
    {
        id: 16,
        purpose: 'Освещение дверей',
        icon: lightingDoors,
        lights: [
            { name: 'Галогеновые лампы', link: '/category/galogen' },
            { name: 'Светодиоды', link: '/category/led' },
        ],
    },
]

// interface SearchByCarResultProps {}

const SearchByCarResult = () => {
    return (
        <PageLayout sidebar={<Sidebar />}>
            <div className={clsnm(cls.SearchByCarResult, [], {})}>
                <GridLayout>
                    {lampPurposes.map((el) => (
                        <div key={el.id} className={cls.car_purpose_item}>
                            <div className={cls.purpose_top}>
                                <h3>{el.purpose}</h3>
                                <img src={el.icon} alt={el.purpose} />
                            </div>

                            <ul className={cls.lamp_categories}>
                                {el.lights.map((category) => (
                                    <li key={category.link}>
                                        <CustomLink
                                            to={category.link}
                                            style="underline"
                                        >
                                            {category.name}
                                        </CustomLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </GridLayout>
            </div>
        </PageLayout>
    )
}

export default SearchByCarResult
