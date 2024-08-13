import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalStyle';

function App() {
  return (
    <GlobalProvider>
      <div className="content">
        <Header />
        <Balance />
        <IncomeExpense />
        <History />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
