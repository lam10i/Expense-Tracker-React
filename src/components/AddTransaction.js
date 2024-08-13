import React from 'react';
import { useContext, useRef } from 'react';
import { GlobalContext } from '../context/GlobalStyle';

const AddTransaction = () => {
    let {addTransaction, transactions} = useContext(GlobalContext);
    const textInputElement = useRef(); 
    const amountInputElement = useRef(); 
    let latestId = -1;
    if(transactions[0]) {
        latestId = transactions[0].id
    }
    const submitForm = function (e) {
        e.preventDefault();
        const transaction = {
            id: latestId + 1,
            textInput: textInputElement.current.value,
            amountInput: Number(amountInputElement.current.value)
        };
        addTransaction(transaction);
        // transactions = [...transactions, transaction];
        // localStorage.setItem("transactions", JSON.stringify(transactions));
        textInputElement.current.value = "";
        amountInputElement.current.value = "";
    }
    return (
        <div className="add_container">
            <h2>Add new transaction</h2>
            <form id="form" action="">
                <div className="form_item">
                    <label htmlFor="text_input">Text</label>
                    <input ref={textInputElement} type="text" id="text_input" name="text_input" placeholder="Enter text..." />
                </div>
                <div className="form_item">
                    <label htmlFor="name_input">
                        Amount <br />
                        (negative - expense, positive - income)
                    </label>
                    <input ref={amountInputElement} type="number" id="amount_input" name="amount_input" placeholder="Enter amount..." />
                </div>
                <button className="add_btn" onClick={submitForm}>Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
