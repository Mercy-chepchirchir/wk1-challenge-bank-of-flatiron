function TransactionSearch({ transactionData, setTransactions }) {
    const onFormSubmit = (event) => {
        event.preventDefault
    }
    
    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <input className="search_input" type="text" placeholder="search by description" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default TransactionSearch;