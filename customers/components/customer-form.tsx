'use client';

export default function CustomerForm() {
  return (
    <>
      <div className="row g-4 mt-1">
        <div className="col-12">
          <div className="card custom-card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <div className="card-title">Create New Customer</div>
            </div>

            <div className="card-body">
              <div className="row gy-4">

                <div className="col-12 col-md-6">
                  <label className="form-label">Name</label>
                  <input type="text" className="form-control" value="John Doe" readOnly />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label">Company Name</label>
                  <input type="text" className="form-control" value="ACME Corp" readOnly />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label">
                    <span className="text-danger">*</span> Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    value="john@example.com"
                    readOnly
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label">Phone</label>
                  <input
                    type="tel"
                    className="form-control"
                    value="09123456789"
                    readOnly
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    value="123 Sample St, Metro Manila"
                    readOnly
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label">Tax ID</label>
                  <input type="text" className="form-control" value="TX-998877" readOnly />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label">Status</label>
                  <select className="form-select" value="ACTIVE" disabled>
                    <option value="ACTIVE">ACTIVE</option>
                    <option value="INACTIVE">INACTIVE</option>
                  </select>
                </div>

                <div className="col-12">
                  <label className="form-label">Notes</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    value="This is a sample note."
                    readOnly
                  />
                </div>

                <div className="col-12 d-flex flex-column flex-md-row justify-content-end gap-2 mt-3">
                  <button type="button" className="btn btn-sm btn-primary">
                    <i className="ri ri-save-line me-1"></i> Save
                  </button>
                  <button type="button" className="btn btn-sm btn-danger ">
                    <i className="ri ri-close-line me-1"></i> Cancel
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
