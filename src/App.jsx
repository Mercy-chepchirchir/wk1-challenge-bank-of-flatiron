import {useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Transactions from "./components/Transactions"
import TransactionsForm from './components/TransactionForm'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div>
            <div className="transactions_table_form">
                <Transactions/> 
                <div className="form_wrapper">
                    <TransactionsForm/>
                </div>
            </div>
        </div>
    )
}

export default App
