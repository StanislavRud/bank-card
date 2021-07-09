import React, {useState} from 'react'
import './App.css';

function App() {
    const [cardNumber, setCardNUmber] = useState(null);

    const inputCard = setCardNUmber

  return (
    <div className="App container pt-3">
        <h1>Bank card</h1>
        <div className={'card'}>
            <h2>Card: {cardNumber}</h2>
            <h2>Holder: </h2>
            <span>CVV: </span>
        </div>
        <hr/>
        <form>
            <input type="text" placeholder={'input number your card'}/>
            <input type="text" placeholder={'input name card holder'}/>
            <input type="text" placeholder={'CVV'}/>
        </form>

    </div>
  );
}

export default App;
