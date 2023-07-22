function TransactionSearch({ transactionsData, setTransactions }) {
    const onFormSubmit = (event) => {
        event.preventDefault();

        console.log(transactionsData)
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