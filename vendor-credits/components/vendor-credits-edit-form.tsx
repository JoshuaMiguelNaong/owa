"use client";

import React from "react";
import { VendorCredit } from "../schema-and-types";

interface EditVendorCreditFormProps {
  vendorCredit: VendorCredit;
}

const EditVendorCreditForm: React.FC<EditVendorCreditFormProps> = ({
  vendorCredit,
}) => {
  return (
    <div className="card custom-card p-3">
      {/* Header */}
      <div className="card-header mb-3">
        <h4 className="card-title mb-0">
          Edit Vendor Credit — {vendorCredit.creditNoteNumber}
        </h4>
      </div>

      <form className="row gy-4">
        {/* Vendor Credit Details */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Credit Details</h6>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-6">
          <label className="form-label">Vendor Name</label>
          <input
            type="text"
            className="form-control"
            defaultValue={vendorCredit.vendorName}
          />
        </div>

        <div className="col-xl-3 col-lg-4 col-md-4">
          <label className="form-label">Credit Note #</label>
          <input
            type="text"
            className="form-control"
            defaultValue={vendorCredit.creditNoteNumber}
          />
        </div>

        <div className="col-xl-3 col-lg-4 col-md-4">
          <label className="form-label">Order #</label>
          <input
            type="text"
            className="form-control"
            defaultValue={vendorCredit.orderNumber || ""}
          />
        </div>

        <div className="col-xl-4 col-md-4">
          <label className="form-label">Vendor Credit Date</label>
          <input
            type="date"
            className="form-control"
            defaultValue={vendorCredit.vendorCreditDate}
          />
        </div>

        <div className="col-12">
          <label className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            maxLength={250}
            defaultValue={vendorCredit.subject || ""}
          />
        </div>

        {/* Item Table */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Items</h6>
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Item</th>
                  <th>Account</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>Tax</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {vendorCredit.items.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={item.itemName}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={item.account}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        defaultValue={item.quantity}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        defaultValue={item.rate}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        defaultValue={item.tax}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        defaultValue={item.amount}
                        readOnly
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Totals */}
        <div className="col-xl-6 col-md-6">
          <label className="form-label">Sub Total</label>
          <input
            type="number"
            className="form-control"
            defaultValue={vendorCredit.subTotal}
            readOnly
          />
        </div>

        <div className="col-xl-3 col-md-4">
          <label className="form-label">Discount (%)</label>
          <input
            type="number"
            className="form-control"
            defaultValue={vendorCredit.discount.percent}
          />
        </div>

        <div className="col-xl-3 col-md-4">
          <label className="form-label">Discount Amount</label>
          <input
            type="number"
            className="form-control"
            defaultValue={vendorCredit.discount.amount}
            readOnly
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Adjustment</label>
          <input
            type="number"
            className="form-control"
            defaultValue={vendorCredit.adjustment}
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Total</label>
          <input
            type="number"
            className="form-control"
            defaultValue={vendorCredit.total}
            readOnly
          />
        </div>

        {/* Notes */}
        <div className="col-12">
          <label className="form-label">Notes</label>
          <textarea
            className="form-control"
            rows={3}
            defaultValue={vendorCredit.notes || ""}
          />
        </div>

        {/* Attachments */}
        <div className="col-12">
          <label className="form-label">Attachments</label>
          <ul>
            {vendorCredit.attachments?.map((file, idx) => (
              <li key={idx}>
                <a href={file} target="_blank" rel="noopener noreferrer">
                  {file}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="col-12 mt-4">
          <button type="submit" className="btn btn-primary me-2">
            Update Vendor Credit
          </button>
          <button type="reset" className="btn btn-outline-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditVendorCreditForm;
