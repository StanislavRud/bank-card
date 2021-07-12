import React from 'react';
import style from './Card.module.css'
import Date from "./date/Date";

const Card = ({cardNumber, cardHandler, cardCvv, cardMonth, cardYear}) => {
    return (
        <div className={style.card}>
            <h1>Bank card</h1>
            <div className={style.cardForms}>
                <h2>Card: {cardNumber}</h2>
                <h2>Holder: {cardHandler}</h2>
                <span>CVV: {cardCvv}</span>
                <Date cardMonth={cardMonth} cardYear={cardYear}/>
            </div>
        </div>
    );
};

export default Card;