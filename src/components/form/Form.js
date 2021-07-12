import React from 'react';
import style from './Form.module.css'

const Form = ({setCardNUmber, cardNumber, setCardHandler, cardHandler, cardCvv, setCardCvv, month, year, btn, setCardMonth, setCardYear}) => {
    return (
        <form className={`container pt-3 ${style.container} `}>
            <div className="mb-3">
                <label htmlFor="inputCardNumber" className="form-label">Card number</label>
                <input type="number" className="form-control" id="inputCardNumber"
                       placeholder={'Please input your card number'}
                       onChange={e =>
                           e.target.value.length <= 16 ? setCardNUmber(e.target.value) : alert('Please only 16 numbers')}
                       value={cardNumber}
                       required
                />
            </div>
            <div className="mb-3">
                <label htmlFor="inputCardHandler" className="form-label">Card Handler</label>
                <input type="text" className="form-control" id="inputCardHandler"
                       placeholder={'Please input your card handler'}
                       onChange={e =>
                           setCardHandler(e.target.value.replace(/[^A-Za-z,.]/ig, ''))
                           }
                       value={cardHandler}
                       required
                />
            </div>
            <div className="select">

                <select className={`form-select ${style.formSelect}`} aria-label="Default select example"
                onChange={e => setCardMonth(e.target.value)}>
                    <option>Month</option>
                    {month.map(item => <option key={item.index} value={item}>{item}</option>
                    )}
                </select>

                <select className="form-select" aria-label="Default select example" onChange={e => setCardYear(e.target.value)}>
                    <option selected>Year</option>
                    {year.map(item => <option key={item.index} value={item}>{item}</option>
                    )}
                </select>
            </div>

            <div className={`mb-3 ${style.cvv}`}>
                <label htmlFor="inputCardCvv" className="form-label">CVV</label>
                <input type="number" className="form-control" id="inputCardCvv"
                       placeholder={'CVV'}
                       onChange={e =>
                           e.target.value.length <= 3 ? setCardCvv(e.target.value) : alert('CVV only 3 numbers')}
                       value={cardCvv}
                       required
                />
            </div>
            <button type="submit" className="btn btn-primary" disabled={btn === false}

            >Submit</button>
        </form>
    );
};

export default Form;