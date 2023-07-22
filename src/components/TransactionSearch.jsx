import { useState } from "react";

function TransactionSearch({ transactionsData, setTransactionsData }) {
    const [searchTerm, setSearchTerm] = useState("")

    const onFormSubmit = (event) => {
        event.preventDefault();

        console.log(searchTerm)
    }

    const onInputChange = (event) => {
        setSearchTerm(event.target.value)
    }
    
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input className="search_input" type="text" onChange={onInputChange} value={searchTerm} placeholder="search by description" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default TransactionSearch;