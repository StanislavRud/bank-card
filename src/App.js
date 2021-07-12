import React, {useEffect, useState} from 'react'
import './App.css';
import Card from "./components/card/Card";
import Form from "./components/form/Form";

function App() {
    const [cardNumber, setCardNUmber] = useState('');
    const [cardHandler, setCardHandler] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const month = [...Array(12)].map((_, i) => i + 1);
    const year = [...Array(5)].map((_, i) => i + 2019);

    const [btn, setBtn] = useState(false);

    useEffect(() => {
        (cardNumber !== '' && cardNumber.length === 16
            && cardHandler !== ''
            && cardCvv !== ''
            && cardCvv.length === 3)
            ? setBtn(true) : setBtn(false)

    })


    return (
        <div className="App container pt-3">
            <h1>Bank card</h1>
            <Card cardNumber={cardNumber} cardHandler={cardHandler} cardCvv={cardCvv}/>
            <Form setCardNUmber={setCardNUmber}
                  cardNumber={cardNumber}
                  setCardHandler={setCardHandler}
                  cardHandler={cardHandler}
                  cardCvv={cardCvv}
                  setCardCvv={setCardCvv}
                  month={month}
                  year={year}
                  btn={btn}
            />


        </div>
    );
}

export default App;
