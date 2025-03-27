import { useState } from 'react'

import { IProduct } from 'units/product'

import { clsnm } from 'shared/lib/classNames'

import cls from './LeftSide.module.scss'

interface LeftSideProps {
    product: IProduct
}

export const LeftSide = ({ product }: LeftSideProps) => {
    const [currentImg, setCurrentImg] = useState(product.img[0])

    return (
        <div className={clsnm(cls.LeftSide, [], {})}>
            <div className={cls.img_list}>
                {product.img.map((imgLink, i) => (
                    <div
                        key={i}
                        className={clsnm(cls.img_item, [], { [cls.current_img]: imgLink === currentImg })}
                        onClick={() => setCurrentImg(imgLink)}
                    >
                        <img src={imgLink} alt="" />
                    </div>
                ))}
            </div>
            <div className={cls.big_product_img}>
                <img src={currentImg} alt="" />
            </div>
        </div>
    )
}
