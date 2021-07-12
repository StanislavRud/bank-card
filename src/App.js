import React, {useEffect, useMemo, useState} from 'react'
import './App.css';
import Card from "./components/card/Card";
import Form from "./components/form/Form";

function App() {
    const [cardNumber, setCardNUmber] = useState('');
    const [cardHandler, setCardHandler] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const month = [...Array(12)].map((_, i) => i + 1);
    const year = [...Array(5)].map((_, i) => i + 19);

    const [btn, setBtn] = useState(false);

    const [cardMonth, setCardMonth] = useState('Month')
    const [cardYear, setCardYear] = useState('Year')

    useEffect(() => {
        (cardNumber !== '' && cardNumber.length === 16
            && cardHandler !== ''
            && cardCvv !== ''
            && cardCvv.length === 3)
            && cardMonth !== 'Month'
            && cardYear !== 'Year'
            ? setBtn(true) : setBtn(false)

    })


    return (
        <div className="App container pt-3">
            <Card cardNumber={cardNumber}
                  cardHandler={cardHandler}
                  cardCvv={cardCvv}
                  cardMonth={cardMonth}
                  cardYear={cardYear}

            />
            <Form setCardNUmber={setCardNUmber}
                  cardNumber={cardNumber}
                  setCardHandler={setCardHandler}
                  cardHandler={cardHandler}
                  cardCvv={cardCvv}
                  setCardCvv={setCardCvv}
                  month={month}
                  year={year}
                  btn={btn}
                  setCardMonth={setCardMonth}
                  setCardYear={setCardYear}
            />


        </div>
    );
}

export default App;
