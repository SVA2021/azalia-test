import React, {FC, useState} from 'react';
import s from './BasketBtn.module.css';

interface BasketBtnProps {
    isInBasket: boolean
    addToBasket: () => void
}

export const BasketBtn: FC<BasketBtnProps> = ({isInBasket, addToBasket}) => {

    const [count, setCount] = useState<number>(1);

    function handleCount(count: number, direction: 'inc' | 'dec'): void {
        if (direction === 'inc') {
            setCount((v) => v + 1)
        } else {
            if (count > 1) setCount((v) => v - 1)
        }
    }

    return (
        <div className={isInBasket ? s.basket__active : s.basket__body} >
            {
                isInBasket
                    ? <span>В корзине</span>
                    : <div className={s.basket__buttons}>
                        <button className={s.basket__btn} onClick={() => addToBasket()} >В корзину</button>
                        <div className={s.counter}>
                            <button className={s.counter__btn} onClick={() => handleCount(count, 'dec')} >-</button>
                            <span className={s.counter__digit}>{count}</span>
                            <button className={s.counter__btn} onClick={() => handleCount(count, 'inc')} >+</button>
                        </div>
                    </div>
            }
        </div>
    );
};