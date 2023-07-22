import {useState, useEffect} from 'react'
import './App.css'
import TransactionsTable from "./components/TransactionsTable"
import TransactionsForm from './components/TransactionForm'
import TransactionSearch from './components/TransactionSearch'

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
            <div>
                <TransactionSearch />
            </div>

            <div className="transactions_table_form">
                <TransactionsTable transactionsData={transactionsData} /> 
                <div className="form_wrapper">
                    <TransactionsForm transactionsData={transactionsData} setTransactionsData={setTransactionsData} />
                </div>
            </div>
        </div>
    )
}

export default App
