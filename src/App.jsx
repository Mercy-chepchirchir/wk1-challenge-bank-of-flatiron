import {useState, useEffect} from 'react'
import './App.css'
import Transactions from "./components/Transactions"
import TransactionsForm from './components/TransactionForm'

function App() {
    const [transactionsData, setTransactionsData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/transactions')
            .then((response) => response.json())
            .then((data) => {
                setTransactionsData(data)
            })
    }, [])

    return (
        <div>
            <div className="transactions_table_form">
                <Transactions transactionsData={transactionsData} /> 
                <div className="form_wrapper">
                    <TransactionsForm/>
                </div>
            </div>
        </div>
    )
}

export default App
