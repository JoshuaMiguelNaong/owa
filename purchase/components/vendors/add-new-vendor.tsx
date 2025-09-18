import React from "react";

const VendorForm = () => {
  return (
    <div className="card custom-card p-3">
      {/* Billing Address */}
      <div className="card-header mb-3">
        <h4 className="card-title mb-0">Add New Vendor</h4>
      </div>

      <form className="row gy-4">
        {/* Primary Contact */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Primary Contact</h6>
        </div>
        <div className="col-xl-2 col-lg-3 col-md-4">
          <label className="form-label">Salutation</label>
          <select className="form-select">
            <option value="">Select</option>
            <option>Mr.</option>
            <option>Ms.</option>
            <option>Mrs.</option>
            <option>Dr.</option>
          </select>
        </div>
        <div className="col-xl-5 col-lg-5 col-md-4">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
          />
        </div>
        <div className="col-xl-5 col-lg-4 col-md-4">
          <label className="form-label">Last Name</label>
          <input type="text" className="form-control" placeholder="Last Name" />
        </div>

        {/* Company Info */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Company Info</h6>
        </div>
        <div className="col-xl-6 col-md-6">
          <label className="form-label">Company Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Company Name"
          />
        </div>
        <div className="col-xl-6 col-md-6">
          <label className="form-label">Display Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Select or type to add"
            list="displayNameOptions"
          />
          <datalist id="displayNameOptions">
            <option value="Company A" />
            <option value="Company B" />
          </datalist>
        </div>

        {/* Contact Info */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Contact Information</h6>
        </div>
        <div className="col-xl-6 col-md-6">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="col-xl-6 col-md-6">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Phone Number"
          />
        </div>
        <div className="col-xl-6 col-md-6">
          <label className="form-label">Work Phone</label>
          <input type="tel" className="form-control" placeholder="Work Phone" />
        </div>
        <div className="col-xl-6 col-md-6">
          <label className="form-label">Mobile</label>
          <input
            type="tel"
            className="form-control"
            placeholder="Mobile Number"
          />
        </div>
      </form>
    </div>
  );
};

export default VendorForm;
