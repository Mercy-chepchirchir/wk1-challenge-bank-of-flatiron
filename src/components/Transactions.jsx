import { useState, useEffect } from 'react'

function Transactions({ transactionsData }) {

    const displayTransactionsData = transactionsData.map((transaction) => {
        return (
                    <tr key={transaction.id}>
                        <td>{transaction.date}</td>
                        <td>{transaction.description}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.amount}</td>
                    </tr>
        )
    })

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
                    {displayTransactionsData}
                </tbody>
                
            </table>
            
        </div>
    )
}

export default Transactions;