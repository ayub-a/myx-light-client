import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useUnit } from 'effector-react'

import { $productState, fetchProductFx } from 'units/product'

import { clsnm } from 'shared/lib/classNames'
import { Loader } from 'shared/ui'

import { LeftSide } from '../LeftSide/LeftSide'
import { RightSide } from '../RightSide/RightSide'

import cls from './Product.module.scss'

const Product = () => {
    const { productId = 'MYX02023014' } = useParams()

    const [productState, fetchProduct] = useUnit([$productState, fetchProductFx])

    useEffect(() => {
        fetchProduct(productId)
    }, [])

    if (productState.isLoading) return <Loader />

    if (productState.error) return <div>{productState.error}</div>

    return (
        <div>
            {productState.productItem?.id ? (
                <div className={clsnm(cls.Product, [], {})}>
                    <LeftSide product={productState.productItem} />
                    <RightSide product={productState.productItem} />
                </div>
            ) : (
                <div>{productState.error}</div>
            )}
        </div>
    )
}

export default Product
