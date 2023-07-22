function TransactionsForm() {

    return (
        <form>
            <h2>Add Transaction</h2>
            <div>
                <label>Date</label>
                <input type="date" />
            </div>

            <div>
                <label>Description</label>
                <textarea />
            </div>

            <div>
                <label>Category</label>
                <input type="text" />
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