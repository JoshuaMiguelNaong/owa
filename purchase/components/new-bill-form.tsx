import React from "react";

const NewBillForm = () => {
  return (
    <div className="card custom-card p-3">
      {/* Header */}
      <div className="card-header mb-3">
        <h4 className="card-title mb-0">Create New Bill</h4>
      </div>

      <form className="row gy-4">
        {/* Bill Details */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Bill Details</h6>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6">
          <label className="form-label">Vendor Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter vendor name"
          />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-4">
          <label className="form-label">Bill #</label>
          <input
            type="text"
            className="form-control"
            placeholder="BILL-00001"
          />
        </div>
        <div className="col-xl-3 col-lg-4 col-md-4">
          <label className="form-label">Order Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter order number"
          />
        </div>

        {/* Dates & Payment */}
        <div className="col-xl-4 col-md-4">
          <label className="form-label">Bill Date</label>
          <input type="date" className="form-control" />
        </div>
        <div className="col-xl-4 col-md-4">
          <label className="form-label">Due Date</label>
          <input
            type="date"
            className="form-control"
            defaultValue="2025-08-06"
          />
        </div>
        <div className="col-xl-4 col-md-4">
          <label className="form-label">Payment Terms</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter payment terms"
          />
        </div>

        {/* Subject */}
        <div className="col-12">
          <label className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            maxLength={250}
            placeholder="Enter a subject within 250 characters"
          />
        </div>

        {/* Item Table */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Item Table</h6>
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead
                className="table-light"
                style={{
                  color: "var(--bs-body-color)",
                  backgroundColor: "var(--bs-tertiary-bg)",
                }}
              >
                <tr>
                  <th>Item Details</th>
                  <th>Account</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>Discount</th>
                  <th>Tax</th>
                  <th>Customer</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      defaultValue={1}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      defaultValue={0}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      defaultValue={0}
                    />
                  </td>
                  <td>
                    <select className="form-select">
                      <option value="">Select Tax</option>
                      <option value="vat">VAT (12%)</option>
                    </select>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Customer name"
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      value={0}
                      readOnly
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Reporting & Totals */}
        <div className="col-12">
          <label className="form-label">Reporting Tags</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter tags..."
          />
        </div>
        <div className="col-xl-6 col-md-6">
          <label className="form-label">Sub Total</label>
          <input type="number" className="form-control" value={0} readOnly />
        </div>
        <div className="col-xl-6 col-md-6">
          <label className="form-label">Adjustment</label>
          <input type="number" className="form-control" defaultValue={0} />
        </div>

        {/* Actions */}
        <div className="col-12 mt-4">
          <button type="submit" className="btn btn-primary me-2">
            Save Bill
          </button>
          <button type="reset" className="btn btn-outline-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewBillForm;
