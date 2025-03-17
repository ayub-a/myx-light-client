import { clsnm } from 'shared/lib/classNames'

import cls from './LeftSide.module.scss'

// interface LeftSideProps {}

export const LeftSide = () => {
    return (
        <div className={clsnm(cls.LeftSide, [], {})}>
            <div className={cls.img_list}>
                {new Array(3).fill(1).map((el, i) => (
                    <div key={i} className={cls.img_item}>
                        <img
                            src="https://downloader.disk.yandex.ru/preview/1edae38ee675232c1491bb77b34f001e4340bfc06b6afb7f31cd457865889f6d/67cc5055/MtiZxwHZtqku7bw87oHkb3CUGNzWTAA7hkRQrWRC0hOcKDw_K-kGaum1dTyArg5x_QMKG4L42P_85GbnK075lA%3D%3D?uid=0&filename=DSC06309%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%202.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2880x1508"
                            alt=""
                        />
                    </div>
                ))}
            </div>
            <div className={cls.big_product_img}>
                <img
                    src="https://downloader.disk.yandex.ru/preview/a39c7ea6935bce1a06e1cb3ddec0ae1ca5145deb2f4e2d459d3a3629b367ef75/67cc4ef9/Y74FQZfI_EkSdBqEsT4C5rxLPJHVvFQFZO_HnKpa66Y15skvzLjB5SOTqf5pNEbRN4VcXn8F5P7nuts28s3_pA%3D%3D?uid=0&filename=DSC06310%20%D0%BA%D0%BE%D0%BF%D0%B8%D1%8F%202.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2880x1508"
                    alt=""
                />
            </div>
        </div>
    )
}
