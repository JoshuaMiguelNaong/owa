

import React from "react";

export default function OtherDetailsSection() {
  return (
    <div className="card custom-card">
      <div className="card-header">
        <h6 className="card-title mb-0">Other Details</h6>
      </div>

      <div className="card-body row gy-3 gx-3">
        {/* Tax Rate */}
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <label className="form-label">Tax Rate</label>
          <select className="form-select">
            <option value="">Select a Tax</option>
            <option value="12">12%</option>
            <option value="0">0%</option>
            {/* You can fetch actual tax rates dynamically if needed */}
          </select>
          <small className="text-muted">
            To associate more than one tax, you need to create a tax group in
            Settings.
          </small>
        </div>

        {/* Company ID */}
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <label className="form-label">Company ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter company ID"
          />
        </div>

        {/* Currency */}
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <label className="form-label">Currency</label>
          <select className="form-select">
            <option value="PHP">PHP - Philippine Peso</option>
            <option value="USD">USD - US Dollar</option>
            <option value="EUR">EUR - Euro</option>
            {/* Add more currencies if needed */}
          </select>
        </div>

        {/* Payment Terms */}
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <label className="form-label">Payment Terms</label>
          <select className="form-select">
            <option value="due">Due on Receipt</option>
            <option value="net15">Net 15</option>
            <option value="net30">Net 30</option>
            <option value="custom">Custom</option>
          </select>
        </div>

        {/* Enable Portal */}
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 d-flex align-items-end">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="enablePortal"
            />
            <label className="form-check-label" htmlFor="enablePortal">
              Allow portal access for this vendor
            </label>
          </div>
        </div>

        {/* Portal Language */}
        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
          <label className="form-label">Portal Language</label>
          <select className="form-select">
            <option value="en">English</option>
            <option value="tl">Tagalog</option>
            <option value="es">Spanish</option>
            {/* Add more languages if needed */}
          </select>
        </div>

        {/* Upload Documents */}
        <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
          <label className="form-label">Documents</label>
          <input className="form-control" type="file" multiple />
          <small className="text-muted">Max 10 files, 10MB each</small>
        </div>
      </div>
    </div>
  );
}
