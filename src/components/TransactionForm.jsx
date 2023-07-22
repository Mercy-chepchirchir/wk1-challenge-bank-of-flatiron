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
                <label>Date</label>
                <input 
                    type="date" 
                />
            </div>

            <div>
                <label>Description</label>
                <textarea />
            </div>

            <div>
                <label>Category</label>
                <input type="text" onChange={(event) => {setCategory(event.target.value)}} value={category} />
            </div>

            <div>
                <label>Amount</label>
                <input type="text" />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
};

export default TransactionsForm;