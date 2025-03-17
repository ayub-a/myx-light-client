import { clsnm } from 'shared/lib/classNames'

import { LeftSide } from '../LeftSide/LeftSide'
import { RightSide } from '../RightSide/RightSide'

import cls from './Product.module.scss'

// interface ProductProps {}

const Product = () => {
    return (
        <div className={clsnm(cls.Product, [], {})}>
            <LeftSide />
            <RightSide />
        </div>
    )
}

export default Product
