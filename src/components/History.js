import React from 'react';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalStyle';

const History = () => {
    let { transactions , deleteTransaction} = useContext(GlobalContext);
    function handleDelete(transactionId) {
        deleteTransaction(transactionId);
    }
    return (
        <div className="history_container">
            <h2>History</h2>
            <ul className="list_item">
                {
                    transactions.map(function (transaction, index) {
                        if (transaction.amountInput > 0) {
                            return <li className='plus' key={index}>
                                <span className='delete' onClick={() => handleDelete(transaction.id)}>x</span>
                                <span>{transaction.textInput}</span>
                                <span>+{transaction.amountInput}$</span></li>;
                        }

                        else {
                            return <li className='minus' key={index}>
                                <span className='delete' onClick={() => deleteTransaction(transaction.id)}>x</span>
                                <span>{transaction.textInput}</span>
                                <span>{transaction.amountInput}$</span></li>;
                        }
                    })
                }
            </ul>
        </div>
    )
}

export default History
