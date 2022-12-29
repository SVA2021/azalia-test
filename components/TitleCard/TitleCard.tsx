import React from 'react';
import Image from 'next/image';
// import './TitleCard.css';
import s from './TitleCard.module.css';

export const TitleCard = () => {
    return (
        <div className={s.titleCard}>
            <h3 className={s.titleCard__title}>Всё для комфортной работы</h3>
            <Image
                className={s.titleCard__arrow}
                src={'/arrow.svg'}
                alt={'arrow'}
                width={40}
                height={16}
                priority
                onClick={() => console.log('arrow clicked')}
            />
            <div className={s.banner25}>
                <div className={s.banner25__img}>
                    <Image
                        src={'/image_1.png'}
                        alt={'computers'}
                        fill
                        style={{objectFit: 'cover'}}
                        priority
                    />
                </div>
                <div className={s.banner25__text}>
                    <p className={s.banner25__sale}>
                        <span className={s.banner__sale} >- 25%</span>
                    </p>
                    <p className={s.banner25__category}>
                        на товары
                        <br />
                        для кабинета
                    </p>
                    <div className={s.banner25__btn}>
                        Выбрать
                    </div>
                </div>
            </div>
            <div className={s.banner10}>
                <div className={s.banner10__text}>
                    <p className={s.banner10__category}>
                        Скидка
                        <span className={s.banner10__sale}>
                            <span className={s.banner__sale} >10%</span>
                        </span>
                        <br />
                        на периферию
                        <br />
                        для компьютера
                    </p>
                    <div className={s.banner10__btn}>
                        Выбрать
                    </div>
                </div>
                <div className={s.banner10__img}>
                    <Image
                        src={'/image_2.png'}
                        alt={'computers'}
                        fill
                        style={{objectFit: 'cover'}}
                        priority
                    />
                </div>
            </div>
        </div>
    );
};