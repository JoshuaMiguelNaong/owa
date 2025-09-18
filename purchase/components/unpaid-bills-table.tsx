import React from "react";
import { getUnpaidBills } from "../server-actions";

const UnpaidBillsTablePage = async () => {
  const bills = await getUnpaidBills();

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card custom-card">
          <div className="card-header d-sm-flex d-block">
            <div className="card-title">Unpaid Bills</div>
          </div>

          <div className="card-body px-1 py-2">
            <div className="table-responsive">
              <table className="table text-nowrap table-hover table-bordered table-striped">
                <thead className="table-primary">
                  <tr>
                    <th>Bill #</th>
                    <th>Vendor Name</th>
                    <th>Bill Date</th>
                    <th>Due Date</th>
                    <th>Amount</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bills.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="text-center">
                        No unpaid bills to display!
                      </td>
                    </tr>
                  ) : (
                    bills.map((bill) => (
                      <tr key={bill.id}>
                        <td>{bill.billNumber}</td>
                        <td>{bill.vendorName}</td>
                        <td>{bill.billDate}</td>
                        <td>{bill.dueDate}</td>
                        <td>₱{parseFloat(bill.amount).toFixed(2)}</td>
                        <td>
                          <span className="badge bg-danger">Unpaid</span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          <div className="card-footer border-top-0">
            <div className="d-flex flex-wrap align-items-center justify-content-between">
              <div>
                <div className="d-flex align-items-center">
                  <div>Showing {bills.length} Entries</div>
                  <div className="transform-arrow ms-2">
                    <i className="bi bi-arrow-right fw-semibold" />
                  </div>
                </div>
              </div>
              <div>
                <nav
                  aria-label="Page navigation"
                  className="pagination-style-4"
                >
                  <ul className="pagination mb-0">
                    <li className="page-item disabled">
                      <button className="page-link">Prev</button>
                    </li>
                    <li className="page-item active">
                      <button className="page-link">1</button>
                    </li>
                    <li className="page-item">
                      <button className="page-link">2</button>
                    </li>
                    <li className="page-item">
                      <button className="page-link text-primary">Next</button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnpaidBillsTablePage;
