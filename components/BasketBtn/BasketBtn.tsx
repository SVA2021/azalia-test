import React, {FC, useState} from 'react';
import './BasketBtn.css';

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

    const basketType = isInBasket ? 'basket__body basket__active' : 'basket__body';

    return (
        <div className={basketType} >
            {
                isInBasket
                    ? <span>В корзине</span>
                    : <div className="basket__buttons">
                        <button className="basket__btn" onClick={() => addToBasket()} >В корзину</button>
                        <div className="counter">
                            <button className="counter__btn" onClick={() => handleCount(count, 'dec')} >-</button>
                            <span className="counter__digit">{count}</span>
                            <button className="counter__btn" onClick={() => handleCount(count, 'inc')} >+</button>
                        </div>
                    </div>
            }
        </div>
    );
};