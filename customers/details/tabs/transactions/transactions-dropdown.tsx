
export default function TransactionsDropdown() {
  const transactions = [
    { name: 'Invoices', targetId: '#invoices' },
    { name: 'Customer Payments', targetId: '#customer-payments' },
    { name: 'Sales Orders', targetId: '#sales-orders' },
    { name: 'Packages', targetId: '#packages' },
    { name: 'Expenses', targetId: '#expenses' },
    { name: 'Bills', targetId: '#bills' },
    { name: 'Credit Notes', targetId: '#credit-notes' },
    { name: 'Sales Reciepts', targetId: '#sales-receipts' },
  ];

  return (
    <div className="mb-3">
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-outline-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Go to transactions
        </button>
        <ul className="dropdown-menu">
          {transactions.map((type) => (
            <li key={type.name}>
              <a className="dropdown-item" href={type.targetId}>
                {type.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>


  );
}