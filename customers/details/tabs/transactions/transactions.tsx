
import TransactionsDropdown from './transactions-dropdown';

const Transactions = async ({ id }: { id: string }) => {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;


    return (
        <>
            <div>
                <TransactionsDropdown />
            </div>
            <div>
                <div
                    className="accordion  accordions-items-seperate"
                    id="customer-transactions"
                >
                    <div className="accordion-item" id="invoices">
                        <h2 className="accordion-header" id="invoices-header">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#invoices-accordion"
                                aria-expanded="true"
                                aria-controls="invoices-accordion"
                            >
                                Invoices
                            </button>
                        </h2>
                        <div
                            id="invoices-accordion"
                            className="accordion-collapse collapse show"
                            aria-labelledby="invoices-header"
                            data-bs-parent="#customer-transactions"
                        >
                            <div className="accordion-body px-1">
                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead className="table-black border-gray border-2">
                                            <tr>
                                                <th>Date</th>
                                                <th>Invoice Number</th>
                                                <th>Order Number</th>
                                                <th>Amount</th>
                                                <th>Balance</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colSpan={6} className="text-center py-3">
                                                    No customer transactions found.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="accordion-item" id="customer-payments">
                        <h2 className="accordion-header" id="customer-payments-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#customer-payments-accordion"
                                aria-expanded="false"
                                aria-controls="successBorderTwo"
                            >
                                Customer Payments
                            </button>
                        </h2>
                        <div
                            id="customer-payments-accordion"
                            className="accordion-collapse collapse"
                            aria-labelledby="customer-payments-header"
                            data-bs-parent="#customer-transactions"
                        >
                            <div className="accordion-body">
                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead className="table-black">
                                            <tr>
                                                <th>Date</th>
                                                <th>Payment Number</th>
                                                <th>Reference Number</th>
                                                <th>Payment Mode</th>
                                                <th>Amount</th>
                                                <th>Unused Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colSpan={9} className="text-center py-3">
                                                    No payments have been received or recorded yet.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item" id="sales-orders">
                        <h2 className="accordion-header" id="sales-orders-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#sales-orders-accordion"
                                aria-expanded="false"
                                aria-controls="sales-orders"
                            >
                                Sales Orders
                            </button>
                        </h2>
                        <div
                            id="sales-orders-accordion"
                            className="accordion-collapse collapse"
                            aria-labelledby="sales-orders-header"
                            data-bs-parent="#customer-transactions"
                        >
                            <div className="accordion-body">
                                <table className="table table-hover mb-0">
                                    <thead className="table-black">
                                        <tr>
                                            <th>Sales Order #</th>
                                            <th>Reference Number</th>
                                            <th>Date</th>
                                            <th>Shipment Date</th>
                                            <th>Amount</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan={9} className="text-center py-3">
                                                There are no Sales Orders.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item">
                        <h2 className="accordion-header" id="packages-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#packages-accordion"
                                aria-expanded="false"
                                aria-controls="packages"
                            >
                                Packages
                            </button>
                        </h2>
                        <div
                            id="packages-accordion"
                            className="accordion-collapse collapse"
                            aria-labelledby="packages-header"
                            data-bs-parent="#customer-transactions"
                        >
                            <div className="accordion-body">
                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead className="table-black">
                                            <tr>
                                                <th>Package #</th>
                                                <th>Sales Order #</th>
                                                <th>Date</th>
                                                <th>Tracking #</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colSpan={9} className="text-center py-3">
                                                    There are no packages.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item" id="expenses">
                        <h2 className="accordion-header" id="expenses-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#expenses-accordion"
                                aria-expanded="false"
                                aria-controls="expenses"
                            >
                                Expenses
                            </button>
                        </h2>
                        <div
                            id="expenses-accordion"
                            className="accordion-collapse collapse"
                            aria-labelledby="expenses-header"
                            data-bs-parent="#customer-transactions"
                        >
                            <div className="accordion-body">
                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead className="table-black">
                                            <tr>
                                                <th>Date</th>
                                                <th>Expense Category</th>
                                                <th>Invoice Number</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colSpan={9} className="text-center py-3">
                                                    There are no expenses.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item" id="bills">
                        <h2 className="accordion-header" id="bills-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#bills-accordion"
                                aria-expanded="false"
                                aria-controls="bills"
                            >
                                Bills
                            </button>
                        </h2>
                        <div
                            id="bills-accordion"
                            className="accordion-collapse collapse"
                            aria-labelledby="bills-header"
                            data-bs-parent="#customer-transactions"
                        >
                            <div className="accordion-body">
                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead className="table-black">
                                            <tr>
                                                <th>Date</th>
                                                <th>Bill #</th>
                                                <th>Order Number</th>
                                                <th>Vendor Number</th>
                                                <th>Amount</th>
                                                <th>Customer Number</th>
                                                <th>Balance</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colSpan={9} className="text-center py-3">
                                                    There are no Bills.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item" id="credit-notes">
                        <h2 className="accordion-header" id="credit-notes-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#credit-notes-accordion"
                                aria-expanded="false"
                                aria-controls="credit-notes"
                            >
                                Credit Notes
                            </button>
                        </h2>
                        <div
                            id="credit-notes-accordion"
                            className="accordion-collapse collapse"
                            aria-labelledby="credit-notes-header"
                            data-bs-parent="#customer-transactions"
                        >
                            <div className="accordion-body">
                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead className="table-black">
                                            <tr>
                                                <th>Credit Date</th>
                                                <th>Credit Note Number</th>
                                                <th>Reference Number</th>
                                                <th>Balance</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colSpan={9} className="text-center py-3">
                                                    There are no credit notes.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item" id="sales-receipts">
                        <h2 className="accordion-header" id="sales-receipts-header">
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#sales-receipts-accordion"
                                aria-expanded="false"
                                aria-controls="sales-receipts"
                            >
                                Sales Receipts
                            </button>
                        </h2>
                        <div
                            id="sales-receipts-accordion"
                            className="accordion-collapse collapse"
                            aria-labelledby="sales-receipts-header"
                            data-bs-parent="#customer-transactions"
                        >
                            <div className="accordion-body">
                                <div className="table-responsive">
                                    <table className="table table-hover mb-0">
                                        <thead className="table-black">
                                            <tr>
                                                <th>Date</th>
                                                <th>Sales Receipt Number</th>
                                                <th>Reference Number</th>
                                                <th>Amount</th>
                                                <th>Payment Mode</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td colSpan={9} className="text-center py-3">
                                                    There are no sales receipts.
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
};

export default Transactions;
