import React from "react";

const RecordMileage = () => {
  return (
    <div className="card custom-card p-3">
      {/* Card Header */}
      <div className="card-header mb-3">
        <h4 className="card-title mb-0">Mileage Details</h4>
      </div>

      <form className="row gy-4">
        {/* Date */}
        <div className="col-md-4">
          <label className="form-label">
            Date <span className="text-danger">*</span>
          </label>
          <input
            type="date"
            className="form-control"
            defaultValue="2025-08-08"
          />
        </div>

        {/* Employee */}
        <div className="col-md-4">
          <label className="form-label">Employee</label>
          <select className="form-select">
            <option value="">Select Employee</option>
            <option value="emp1">John Doe</option>
            <option value="emp2">Jane Smith</option>
          </select>
        </div>

        {/* Calculate Mileage Using */}
        <div className="col-md-4">
          <label className="form-label">Calculate Mileage Using</label>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="distanceTravelled"
              name="calcType"
              value="distance"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="distanceTravelled">
              Distance Travelled
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input"
              id="odometerReading"
              name="calcType"
              value="odometer"
            />
            <label className="form-check-label" htmlFor="odometerReading">
              Odometer Reading
            </label>
          </div>
        </div>

        {/* Distance */}
        <div className="col-md-4">
          <label className="form-label">Distance</label>
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              placeholder="e.g. 12.5"
            />
            <span className="input-group-text">Kilometer(s)</span>
          </div>
        </div>

        {/* Amount */}
        <div className="col-md-4">
          <label className="form-label">Amount</label>
          <div className="input-group">
            <span className="input-group-text">PHP</span>
            <input type="number" className="form-control" placeholder="0.00" />
          </div>
        </div>

        {/* Amount Is */}
        <div className="col-md-4">
          <label className="form-label">Amount Is</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="amountIs"
              id="inclusive"
              value="inclusive"
            />
            <label className="form-check-label" htmlFor="inclusive">
              Tax Inclusive
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="amountIs"
              id="exclusive"
              value="exclusive"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="exclusive">
              Tax Exclusive
            </label>
          </div>
        </div>

        {/* Tax */}
        <div className="col-md-4">
          <label className="form-label">Tax</label>
          <select className="form-select">
            <option value="">Select a Tax</option>
            <option value="vat">VAT (12%)</option>
            <option value="none">No Tax</option>
          </select>
        </div>

        {/* Vendor */}
        <div className="col-md-4">
          <label className="form-label">Vendor</label>
          <div className="input-group">
            <select className="form-select">
              <option value="">Select Vendor</option>
              <option value="vendor1">ABC Corp</option>
              <option value="vendor2">XYZ Supplies</option>
            </select>
            <button className="btn btn-outline-secondary" type="button">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>

        {/* Reference# */}
        <div className="col-md-4">
          <label className="form-label">Reference #</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter reference number"
          />
        </div>

        {/* Notes */}
        <div className="col-md-8">
          <label className="form-label">Notes (Max. 500 characters)</label>
          <textarea
            className="form-control"
            rows={5}
            maxLength={500}
            placeholder="Enter any details about this mileage claim..."
          ></textarea>
        </div>

        {/* Customer Name */}
        <div className="col-md-4">
          <label className="form-label">Customer Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Customer name (optional)"
          />
        </div>

        {/* Submit Buttons */}
        <div className="col-12 mt-4">
          <button type="submit" className="btn btn-primary me-2">
            Save (alt+s)
          </button>
          <button type="button" className="btn btn-secondary me-2">
            Save and New (alt+n)
          </button>
          <button type="button" className="btn btn-outline-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecordMileage;
