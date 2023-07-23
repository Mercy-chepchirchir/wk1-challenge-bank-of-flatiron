import {useState, useEffect} from 'react'
import './App.css'
import TransactionsTable from "./components/TransactionsTable"
import TransactionsForm from './components/TransactionForm'
import TransactionSearch from './components/TransactionSearch'

function App() {
    const [transactionsData, setTransactionsData] = useState([])

    //useeffect will run depending on dependency list ,if you want it to run once use an empty list/leave the dependency list an empty.
    useEffect(() => {
        fetch('https://api.npoint.io/24be302473f259de6aaf/transactions')
            .then((response) => response.json())
            .then((data) => {
                setTransactionsData(data)
            })
    },[])

    return (
        <div>
            <div>
                <TransactionSearch transactionsData={transactionsData} setTransactionsData={setTransactionsData} />
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
