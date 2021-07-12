import React from 'react';
import style from './Card.module.css'

const Card = ({cardNumber, cardHandler, cardCvv}) => {
    return (
        <div className={style.card}>
            <h2>Card: {cardNumber}</h2>
            <h2>Holder: {cardHandler}</h2>
            <span>CVV: {cardCvv}</span>
        </div>
    );
};

export default Card;