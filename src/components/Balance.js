import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalStyle'

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const total = transactions.reduce(function (total, transactionItem) {
        return total + transactionItem.amountInput;
    }, 0).toFixed(2);
    return (
        <div className="balance">
            <h2>YOUR BALANCE</h2>
            <span>${total}</span>
        </div>
    )
}

export default Balance
