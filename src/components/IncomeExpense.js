import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalStyle';

const IncomeExpense = () => {
    let {transactions} = useContext(GlobalContext);
    let income = 0;
    let expense = 0;
    transactions.forEach(function(transaction, index) {
        if(transaction.amountInput > 0) {
            income+= transaction.amountInput;
        }

        else {
            expense+= transaction.amountInput;
        }
    })
    return (
        <div className="inc_exp_container">
            <div className="money_plus">
                <h3>INCOME</h3>
                <span>${income.toFixed(2)}</span>
            </div>
            <div className="money_minus">
                <h3>EXPENSE</h3>
                <span>${expense.toFixed(2)}</span>
            </div>
        </div>
    )
}

export default IncomeExpense
