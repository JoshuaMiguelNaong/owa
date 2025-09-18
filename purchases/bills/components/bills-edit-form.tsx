"use client";

import React from "react";
import { Bill } from "../schema-and-types"; 

interface EditBillFormProps {
  bill: Bill & { id: string };
}

const EditBillForm: React.FC<EditBillFormProps> = ({ bill }) => {
  return (
    <div className="card custom-card p-3">
      {/* Header */}
      <div className="card-header mb-3">
        <h4 className="card-title mb-0">Edit Bill — {bill.billNumber}</h4>
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
            defaultValue={bill.vendorName}
          />
        </div>

        <div className="col-xl-3 col-lg-4 col-md-4">
          <label className="form-label">Bill #</label>
          <input
            type="text"
            className="form-control"
            defaultValue={bill.billNumber}
          />
        </div>

        <div className="col-xl-3 col-lg-4 col-md-4">
          <label className="form-label">Order Number</label>
          <input
            type="text"
            className="form-control"
            defaultValue={bill.orderNumber || ""}
          />
        </div>

        {/* Dates & Payment */}
        <div className="col-xl-4 col-md-4">
          <label className="form-label">Bill Date</label>
          <input
            type="date"
            className="form-control"
            defaultValue={bill.billDate}
          />
        </div>

        <div className="col-xl-4 col-md-4">
          <label className="form-label">Due Date</label>
          <input
            type="date"
            className="form-control"
            defaultValue={bill.dueDate}
          />
        </div>

        <div className="col-xl-4 col-md-4">
          <label className="form-label">Payment Terms</label>
          <input
            type="text"
            className="form-control"
            defaultValue={bill.paymentTerms}
          />
        </div>

        {/* Subject */}
        <div className="col-12">
          <label className="form-label">Subject</label>
          <input
            type="text"
            className="form-control"
            maxLength={250}
            defaultValue={bill.subject}
          />
        </div>

        {/* Item Table */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Item Table</h6>
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
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
                {bill.items?.map((item, index) => (
                  <tr key={index}>
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
                        defaultValue={item.discount}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={item.tax}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={item.customer}
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

        {/* Reporting & Totals */}
        <div className="col-12">
          <label className="form-label">Reporting Tags</label>
          <input
            type="text"
            className="form-control"
            defaultValue={bill.reportingTags.join(", ")}
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Sub Total</label>
          <input
            type="number"
            className="form-control"
            defaultValue={bill.subTotal}
            readOnly
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Adjustment</label>
          <input
            type="number"
            className="form-control"
            defaultValue={bill.adjustment}
          />
        </div>

        <div className="col-12">
          <label className="form-label">Total</label>
          <input
            type="number"
            className="form-control"
            defaultValue={bill.total}
            readOnly
          />
        </div>

        {/* Actions */}
        <div className="col-12 mt-4">
          <button type="submit" className="btn btn-primary me-2">
            Update Bill
          </button>
          <button type="reset" className="btn btn-outline-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBillForm;
