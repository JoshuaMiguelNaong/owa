import React from "react";

import { getPurchaseOrder } from "../server-actions";

const PurchaseReceivesTable = async () => {
  const receives = await getPurchaseOrder();

  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="card custom-card">
          <div className="card-header d-sm-flex d-block">
            <div className="card-title">All Purchase Receives</div>
            <div className="ms-auto mt-sm-0 mt-2">{/* <NewButton /> */}</div>
          </div>

          <div className="card-body px-1 py-2">
            <div className="table-responsive">
              <table className="table text-nowrap table-hover table-bordered table-striped">
                <thead className="table-primary">
                  <tr>
                    <th>Vendor Name</th>
                    <th>Status</th>
                    <th>Billed</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {receives.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center">
                        No Purchase Receives to display!
                      </td>
                    </tr>
                  ) : (
                    receives.map((receive) => (
                      <tr key={receive.id}>
                        <td>{receive.vendorName ?? "<empty>"}</td>
                        <td>
                          <span
                            className={`badge ${
                              receive.status === "RECEIVED"
                                ? "bg-success"
                                : "bg-warning"
                            }`}
                          >
                            {receive.status}
                          </span>
                        </td>
                        <td>
                          <span className="badge bg-info">
                            {receive.billed ? "Yes" : "No"}
                          </span>
                        </td>
                        <td>{receive.quantity}</td>
                        <td className="d-flex gap-1">
                          {/* <DeleteButton id={receive.id} />
                          <EditButton receive={receive} /> */}
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
                  <div>Showing {receives.length} Entries</div>
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
                      <span className="page-link">Prev</span>
                    </li>
                    <li className="page-item active">
                      <span className="page-link">1</span>
                    </li>
                    <li className="page-item">
                      <span className="page-link">2</span>
                    </li>
                    <li className="page-item">
                      <span className="page-link text-primary">Next</span>
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

export default PurchaseReceivesTable;
