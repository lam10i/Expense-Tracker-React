
const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return { ...state, transactions: [action.transaction, ...state.transactions] };
    case "DELETE_TRANSACTION":
      let newTransactions = state.transactions.filter(function (transaction, index) {
        // remove transaction that do not match id
        return transaction.id !== action.id
      })
      return { ...state, transactions: newTransactions };
    default:
      return state;
  }
}

export default AppReducer
