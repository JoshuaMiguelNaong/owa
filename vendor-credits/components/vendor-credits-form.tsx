import React from "react";

const VendorCreditsForm = () => {
  return (
    <div className="card custom-card p-3">
      {/* Header */}
      <div className="card-header mb-3">
        <h4 className="card-title mb-0">Create Vendor Credit</h4>
      </div>

      <form className="row gy-4">
        {/* Vendor & Credit Info */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Vendor & Credit Info</h6>
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Vendor Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Select Vendor"
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Credit Note #</label>
          <input type="text" className="form-control" placeholder="VC-00001" />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Order Number</label>
          <input type="text" className="form-control" placeholder="Order Ref" />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Vendor Credit Date</label>
          <input
            type="date"
            className="form-control"
            defaultValue="2025-08-20"
          />
        </div>

        <div className="col-12">
          <label className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter a subject (max 250 characters)"
            maxLength={250}
          />
        </div>

        {/* Item Table */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Item Details</h6>
        </div>
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <thead className="table-light text-dark">
                <tr>
                  <th>Item & Description</th>
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
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Item name"
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Account"
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      defaultValue={0}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      defaultValue={0}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      defaultValue={0}
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      defaultValue={0}
                      readOnly
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Totals Section */}
        <div className="col-12 col-md-6 ms-auto">
          <table className="table table-sm table-borderless mb-0">
            <tbody>
              <tr>
                <th className="text-end">Sub Total:</th>
                <td className="text-end">0.00</td>
              </tr>
              <tr>
                <th className="text-end align-middle">Discount:</th>
                <td>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="0"
                    />
                    <span className="input-group-text">%</span>
                  </div>
                  <small className="text-muted">0.00</small>
                </td>
              </tr>
              <tr>
                <th className="text-end">Adjustment:</th>
                <td>
                  <input
                    type="number"
                    className="form-control text-end"
                    placeholder="0.00"
                  />
                </td>
              </tr>
              <tr className="border-top fw-bold">
                <th className="text-end">Total:</th>
                <td className="text-end">0.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Additional Information</h6>
        </div>

        <div className="col-12">
          <label className="form-label">Notes</label>
          <textarea
            className="form-control"
            rows={2}
            placeholder="Add remarks or notes"
          ></textarea>
        </div>

        {/* Attach Files */}
        <div className="col-12">
          <label className="form-label">Attach File(s) to Vendor Credits</label>
          <input className="form-control" type="file" multiple />
          <small className="text-muted">
            You can upload a maximum of 10 files, 10MB each.
          </small>
        </div>
      </form>
    </div>
  );
};

export default VendorCreditsForm;
