"use client";

import React from "react";
import { PaymentMade } from "../schema-and-types";

interface EditPaymentMadeFormProps {
  payment: PaymentMade;
}

const EditPaymentMadeForm: React.FC<EditPaymentMadeFormProps> = ({
  payment,
}) => {
  return (
    <div className="card custom-card p-3">
      {/* Header */}
      <div className="card-header mb-3">
        <h4 className="card-title mb-0">
          Edit Payment — {payment.referenceNumber || payment.id}
        </h4>
      </div>

      <form className="row gy-4">
        {/* Payment Details */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Payment Details</h6>
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Vendor Name</label>
          <input
            type="text"
            className="form-control"
            defaultValue={payment.vendorName}
          />
        </div>

        <div className="col-xl-3 col-md-3">
          <label className="form-label">Payment Date</label>
          <input
            type="date"
            className="form-control"
            defaultValue={payment.paymentDate}
          />
        </div>

        <div className="col-xl-3 col-md-3">
          <label className="form-label">Payment Method</label>
          <input
            type="text"
            className="form-control"
            defaultValue={payment.paymentMethod}
          />
        </div>

        <div className="col-xl-3 col-md-3">
          <label className="form-label">Reference #</label>
          <input
            type="text"
            className="form-control"
            defaultValue={payment.referenceNumber || ""}
          />
        </div>

        <div className="col-xl-3 col-md-3">
          <label className="form-label">Bank Charges</label>
          <input
            type="number"
            className="form-control"
            defaultValue={payment.bankCharges || 0}
          />
        </div>

        <div className="col-xl-3 col-md-3">
          <label className="form-label">TDS Deducted</label>
          <input
            type="number"
            className="form-control"
            defaultValue={payment.tdsDeducted || 0}
          />
        </div>

        {/* Bills Table */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Bills Paid</h6>
          <div className="table-responsive">
            <table className="table table-bordered align-middle">
              <thead className="table-light">
                <tr>
                  <th>Bill ID</th>
                  <th>Amount Paid</th>
                  <th>Payment Date</th>
                </tr>
              </thead>
              <tbody>
                {payment.bills.map((bill, idx) => (
                  <tr key={idx}>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={bill.billId}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        className="form-control"
                        defaultValue={bill.amountPaid}
                      />
                    </td>
                    <td>
                      <input
                        type="date"
                        className="form-control"
                        defaultValue={bill.paymentDate || payment.paymentDate}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notes & Attachments */}
        <div className="col-12">
          <label className="form-label">Notes</label>
          <textarea
            className="form-control"
            rows={4}
            defaultValue={payment.notes || ""}
          />
        </div>

        <div className="col-12">
          <label className="form-label">Attachments</label>
          <input type="file" className="form-control" multiple />
        </div>

        {/* Summary */}
        <div className="col-xl-3 col-md-3">
          <label className="form-label">Total Paid</label>
          <input
            type="number"
            className="form-control"
            defaultValue={payment.totalPaid}
            readOnly
          />
        </div>

        <div className="col-xl-3 col-md-3">
          <label className="form-label">Amount Refunded</label>
          <input
            type="number"
            className="form-control"
            defaultValue={payment.amountRefunded || 0}
            readOnly
          />
        </div>

        <div className="col-xl-3 col-md-3">
          <label className="form-label">Excess Amount</label>
          <input
            type="number"
            className="form-control"
            defaultValue={payment.excessAmount || 0}
            readOnly
          />
        </div>

        {/* Actions */}
        <div className="col-12 mt-4">
          <button type="submit" className="btn btn-primary me-2">
            Update Payment
          </button>
          <button type="reset" className="btn btn-outline-secondary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPaymentMadeForm;
