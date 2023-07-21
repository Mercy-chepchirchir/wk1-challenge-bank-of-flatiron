import { useState, useEffect } from 'react'

function Transactions() {
    const [transactionsData, setTransactionsData] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/transactions')
            .then((response) => response.json())
            .then((data) => {
                setTransactionsData(data)
            })
    }, [transactionsData])

    console.log(transactionsData)

    return (
        <div>
            <table className="styled-table">
                <thead>
                    <tr>
                        <th>date</th>
                        <th>Description</th>
                        <th>category</th>
                        <th>amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2019-12-01</td>
                        <td>Paycheck from Bob's Burgers</td>
                        <td>Income</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <td>2019-12-01</td>
                        <td>South by Southwest Quinoa Bowl at Fresh & Co</td>
                        <td>Food</td>
                        <td>10.55</td>
                    </tr>
                </tbody>
                
            </table>
            
        </div>
    )
}

export default Transactions;