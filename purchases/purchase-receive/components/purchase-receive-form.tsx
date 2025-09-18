import React from "react";

const PurchaseReceiveForm = () => {
  return (
    <div className="card custom-card p-3">
      {/* Header */}
      <div className="card-header mb-3">
        <h4 className="card-title mb-0">Create Purchase Receive</h4>
      </div>

      <form className="row gy-4">
        {/* Vendor & Order Info */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Vendor & Order Info</h6>
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Vendor Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Vendor Name"
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Purchase Order #</label>
          <input type="text" className="form-control" placeholder="PO-00001" />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Purchase Receive #</label>
          <input type="text" className="form-control" placeholder="PR-00001" />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Received Date</label>
          <input
            type="date"
            className="form-control"
            defaultValue="2025-08-19"
          />
        </div>

        {/* Item Table */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Items & Description</h6>
        </div>
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <thead className="table-light text-dark">
                <tr>
                  <th>Item & Description</th>
                  <th>Ordered</th>
                  <th>Received</th>
                  <th>In Transit</th>
                  <th>Quantity to Receive</th>
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
                      type="number"
                      defaultValue={0}
                      readOnly
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
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      defaultValue={0}
                      readOnly
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      type="number"
                      defaultValue={0}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Additional Information</h6>
        </div>

        <div className="col-12">
          <label className="form-label">Notes (For Internal Use)</label>
          <textarea
            className="form-control"
            rows={2}
            placeholder="Internal notes only"
          ></textarea>
        </div>

        {/* Attach Files */}
        <div className="col-12">
          <label className="form-label">
            Attach File(s) to Purchase Receive
          </label>
          <input className="form-control" type="file" multiple />
          <small className="text-muted">
            You can upload a maximum of 10 files, 10MB each.
          </small>
        </div>
      </form>
    </div>
  );
};

export default PurchaseReceiveForm;
