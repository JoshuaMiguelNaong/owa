import React from "react";

const NewPaymentMadeForm = () => {
  return (
    <div className="card custom-card p-3">
      {/* Header */}
      <div className="card-header mb-3">
        <h4 className="card-title mb-0">Record Payment Made</h4>
      </div>

      <form className="row gy-4">
        {/* Payment Details */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Payment Details</h6>
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
          <label className="form-label">Payment #</label>
          <input type="text" className="form-control" placeholder="PM-00001" />
        </div>

        <div className="col-xl-3 col-lg-4 col-md-4">
          <label className="form-label">Reference #</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter reference number"
          />
        </div>

        {/* Dates & Payment Mode */}
        <div className="col-xl-4 col-md-4">
          <label className="form-label">Payment Date</label>
          <input type="date" className="form-control" />
        </div>

        <div className="col-xl-4 col-md-4">
          <label className="form-label">Payment Mode</label>
          <input
            type="text"
            className="form-control"
            placeholder="Cash, Bank Transfer, etc."
          />
        </div>

        <div className="col-xl-4 col-md-4">
          <label className="form-label">Bank Charges (if any)</label>
          <input type="number" className="form-control" defaultValue={0} />
        </div>

        {/* Deduct TDS */}
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="deductTDS"
            />
            <label className="form-check-label" htmlFor="deductTDS">
              Deduct TDS Tax
            </label>
          </div>
        </div>

        {/* Bills Table */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Bills to Pay</h6>
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Date</th>
                  <th>Bill #</th>
                  <th>PO #</th>
                  <th>Bill Amount</th>
                  <th>Amount Due</th>
                  <th>Payment Made</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input type="date" className="form-control" />
                  </td>
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
                      defaultValue={0}
                      readOnly
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      defaultValue={0}
                      readOnly
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      defaultValue={0}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes & Attachments */}
        <div className="col-12">
          <label className="form-label">Notes (Internal Use)</label>
          <textarea
            className="form-control"
            rows={4}
            placeholder="Enter notes..."
          />
        </div>

        <div className="col-12">
          <label className="form-label">Attachments</label>
          <input type="file" className="form-control" multiple />
        </div>

        {/* Summary */}
        <div className="col-xl-3 col-md-4">
          <label className="form-label">Amount Paid</label>
          <input
            type="number"
            className="form-control"
            defaultValue={0}
            readOnly
          />
        </div>

        <div className="col-xl-3 col-md-4">
          <label className="form-label">Amount Used for Payments</label>
          <input
            type="number"
            className="form-control"
            defaultValue={0}
            readOnly
          />
        </div>

        <div className="col-xl-3 col-md-4">
          <label className="form-label">Amount Refunded</label>
          <input
            type="number"
            className="form-control"
            defaultValue={0}
            readOnly
          />
        </div>

        <div className="col-xl-3 col-md-4">
          <label className="form-label">Amount in Excess</label>
          <input
            type="number"
            className="form-control"
            defaultValue={0}
            readOnly
          />
        </div>

        {/* Actions */}
        <div className="col-12 mt-4">
          <button type="submit" className="btn btn-primary me-2">
            Save Payment
          </button>
          <button type="reset" className="btn btn-outline-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPaymentMadeForm;
