import React, {FC} from 'react';
import Image from 'next/image';
import './Product.css';
import {ProductProps} from './Product.types';
import {Ratings} from '../Ratings/Ratings';
import {BasketBtn} from '../BasketBtn/BasketBtn';

export const Product: FC<ProductProps> = ({product, addToBasket, addToFavorites, isFavorite, isInBasket}) => {

    const rate = 70;
    const {image, category, title, rating, description, } = product;
    const price = (product.price * rate).toLocaleString('ru-Ru',
        {
            style: 'currency',
            currency: 'Rub',
            maximumFractionDigits: 0,
        }
    );

    return (
        <div className="card" >
            <div className="img">
                <Image
                    src={image}
                    alt={title ?? 'product image'}
                    fill
                    style={{objectFit: 'contain'}}
                    priority
                />
            </div>
            <div className="details" >
                <p className="category">{category}</p>
                <Ratings rating={rating} />
            </div>
            <p className="title">{title}</p>
            <p className="price">{price} <span className="qty">/шт.</span> </p>
            <div className="card__actions">
                <BasketBtn isInBasket={isInBasket} addToBasket={addToBasket} />
                <Image
                    className="card__favorite"
                    src={isFavorite ? '/redHeart.svg' : '/heart.svg'}
                    alt={'add to favorites'}
                    width={40}
                    height={40}
                    priority
                    onClick={() => addToFavorites()}
                />
            </div>
            {(rating?.count && rating?.count >= 300) &&
                <div className="hit">
                    <span className="hit__text">Хит</span>
                    <Image
                        className="hit__img"
                        src={'/hit.svg'}
                        alt={'hit'}
                        width={64}
                        height={24}
                        priority
                    />
                </div>}
        </div>
    );
};

