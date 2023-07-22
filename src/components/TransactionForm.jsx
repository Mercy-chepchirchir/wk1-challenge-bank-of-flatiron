import { useState } from 'react'

function TransactionsForm({ transactionsData, setTransactionsData }) {
    const [formDetails, setFormDetails] = useState({
        date: "",
        description: "",
        category: "",
        amount: 0
    })


    const onFormSubmit = (event) => {
        event.preventDefault();

    }

    const changeFormDetails = (event) => {
        console.log(event.target.value)
    }

    return (
        <form onSubmit={onFormSubmit}>
            <h2>Add Transaction</h2>
            <div>
                <label htmlFor="date">Date</label>
                <input id="date" name="date" type="date" onChange={changeFormDetails}/>
            </div>

            <div>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" onChange={changeFormDetails} />
            </div>

            <div>
                <label htmlFor="category">Category</label>
                <input id="category" type="text" onChange={changeFormDetails} />
            </div>

            <div>
                <label htmlFor="amount">Amount</label>
                <input id="amount" type="text" onChange={changeFormDetails} />
            </div>

            <button type="submit">Submit</button>
        </form>
    )
};

export default TransactionsForm;