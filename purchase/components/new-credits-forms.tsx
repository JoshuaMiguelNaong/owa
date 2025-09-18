import React from "react";

const NewVendorCreditForm = () => {
  return (
    <div className="card custom-card p-3">
      {/* Card Header */}
      <div className="card-header mb-3">
        <h4 className="card-title mb-0">Add New Vendor Credit</h4>
      </div>

      <form className="row gy-4">
        {/* Vendor Credit Info */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">
            Vendor Credit Information
          </h6>
        </div>

        <div className="col-md-6">
          <label className="form-label">Vendor Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter vendor name"
          />
        </div>

        <div className="col-md-3">
          <label className="form-label">Credit Note #</label>
          <input type="text" className="form-control" placeholder="VC-00001" />
        </div>

        <div className="col-md-3">
          <label className="form-label">Order Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter order number"
          />
        </div>

        <div className="col-md-4">
          <label className="form-label">Vendor Credit Date</label>
          <input
            type="date"
            className="form-control"
            defaultValue="2025-08-06"
          />
        </div>

        <div className="col-md-8">
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
                  backgroundColor: "var(--bs-gray-200)",
                  color: "var(--bs-gray-900)",
                }}
              >
                <tr>
                  <th>Item Details</th>
                  <th>Account</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>Tax</th>
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
                    <select className="form-select">
                      <option value="">Select Tax</option>
                      <option value="vat">VAT (12%)</option>
                    </select>
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

        {/* Totals */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Totals</h6>
        </div>

        <div className="col-md-4">
          <label className="form-label">Sub Total</label>
          <input type="number" className="form-control" value={0} readOnly />
        </div>

        <div className="col-md-4">
          <label className="form-label">Discount (%)</label>
          <input type="number" className="form-control" defaultValue={0} />
        </div>

        <div className="col-md-4">
          <label className="form-label">Adjustment</label>
          <input type="number" className="form-control" defaultValue={0} />
        </div>

        <div className="col-md-4">
          <label className="form-label fw-bold">Total</label>
          <input type="number" className="form-control" value={0} readOnly />
        </div>

        {/* Additional Info */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Additional Information</h6>
        </div>

        <div className="col-md-8">
          <label className="form-label">Notes</label>
          <textarea
            className="form-control"
            rows={3}
            placeholder="Enter notes..."
          ></textarea>
        </div>

        <div className="col-md-12">
          <label className="form-label">Attach File(s) to Vendor Credits</label>
          <input type="file" className="form-control" multiple />
          <small className="text-muted">
            You can upload a maximum of 10 files, 10MB each
          </small>
        </div>

        {/* Actions */}
        <div className="col-12 mt-4">
          <button type="submit" className="btn btn-primary me-2">
            Save Vendor Credit
          </button>
          <button type="reset" className="btn btn-outline-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewVendorCreditForm;
