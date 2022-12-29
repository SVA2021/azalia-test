import React from 'react';
import Image from 'next/image';
import './TitleCard.css';

export const TitleCard = () => {
    return (
        <div className="titleCard">
            <h3 className="titleCard__title">Всё для комфортной работы</h3>
            <Image
                className="titleCard__arrow"
                src={'/arrow.svg'}
                alt={'arrow'}
                width={40}
                height={16}
                priority
                onClick={() => console.log('arrow clicked')}
            />
            <div className="titleCard__banner banner25">
                <div className="banner25__img">
                    <Image
                        src={'/image_1.png'}
                        alt={'computers'}
                        fill
                        style={{objectFit: 'cover'}}
                        priority
                    />
                </div>
                <div className="banner25__text">
                    <p className="banner25__sale">
                        <span className="banner__sale" >- 25%</span>
                    </p>
                    <p className="banner25__category">
                        на товары
                        <br />
                        для кабинета
                    </p>
                    <div className="banner25__btn">
                        Выбрать
                    </div>
                </div>
            </div>
            <div className="titleCard__banner banner10">
                <div className="banner10__text">
                    <p className="banner10__category">
                        Скидка
                        <span className="banner10__sale">
                            <span className="banner__sale" >10%</span>
                        </span>
                        <br />
                        на периферию
                        <br />
                        для компьютера
                    </p>
                    <div className="banner10__btn">
                        Выбрать
                    </div>
                </div>
                <div className="banner10__img">
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