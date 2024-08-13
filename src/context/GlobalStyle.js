import { createContext, useEffect, useReducer } from 'react';
import AppReducer from './AppReducer';

let transactions = localStorage.getItem("transactions") ? JSON.parse(localStorage.getItem("transactions")) : [];
console.log(localStorage.getItem("transactions"));
// let transactions = [
// {  id: 1,textInput: "Salary", amountInput: 200},
// {  id: 2,textInput: "Eating", amountInput: -300},
// {  id: 3,textInput: "Interest Bank", amountInput: 400}
// ];

const initialState = {
  transactions
}

export const GlobalContext = createContext();
export const GlobalProvider = function ({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(function () {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  const addTransaction = function (transaction) {
    dispatch({ type: "ADD_TRANSACTION", transaction });
  }
  const deleteTransaction = function (id) {
    dispatch({ type: "DELETE_TRANSACTION", id });
  }
  return (
    <GlobalContext.Provider value={
      {
        transactions: state.transactions,
        addTransaction,
        deleteTransaction
      }
    }>
      {children}
    </GlobalContext.Provider>
  )
}