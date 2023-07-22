import { useState } from 'react'

function TransactionsForm({ transactionsData, setTransactionsData }) {
    const [category, setCategory] = useState("")

    const onFormSubmit = (event) => {
        event.preventDefault();

        
    }

    return (
        <form onSubmit={onFormSubmit}>
            <h2>Add Transaction</h2>
            <div>
                <label htmlFor="date">Date</label>
                <input id="date" type="date"/>
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <textarea id="description" />
            </div>

            <div>
                <label htmlFor="category">Category</label>
                <input id="category" type="text" onChange={(event) => {setCategory(event.target.value)}} value={category} />
            </div>

            <div>
                <label htmlFor="amount">Amount</label>
                <input id="amount" type="text" />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
};

export default TransactionsForm;