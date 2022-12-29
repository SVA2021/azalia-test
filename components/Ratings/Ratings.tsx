import React, {FC} from 'react';
import {IRating} from '../Product/Product.types';
import Image from 'next/image';
import {normalizeRatingCount, ratingToStar} from './Ratings.services';
import './Ratings.css';

interface RatingsProps {
    rating: IRating | undefined | null
}

export const Ratings: FC<RatingsProps> = ({rating}) => {
    const ratingStar = ratingToStar(rating?.rate ?? 0);

    return (
        <div className="rating">
            {ratingStar.map((star, index) =>
                <Image key={index} src={star ? '/redStar.svg' : '/star.svg'} alt={'star'} width={14} height={14} />
            )}
            <span className="rating__text">
                {`${rating?.count} ${normalizeRatingCount(rating?.count ?? 0)}`}
            </span>
        </div>
    );
};