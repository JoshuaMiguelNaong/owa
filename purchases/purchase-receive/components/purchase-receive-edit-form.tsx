"use client";

import React from "react";
import { PurchaseReceiveFormData } from "../schema-and-types";

interface EditPurchaseReceiveFormProps {
  purchaseReceive: PurchaseReceiveFormData;
}

const EditPurchaseReceiveForm: React.FC<EditPurchaseReceiveFormProps> = ({
  purchaseReceive,
}) => {
  return (
    <div className="card custom-card p-3">
      {/* Header */}
      <div className="card-header mb-3">
        <h4 className="card-title mb-0">
          Edit Purchase Receive — {purchaseReceive.id}
        </h4>
      </div>

      <form className="row gy-4">
        {/* Vendor Info */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Vendor Info</h6>
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Vendor Name</label>
          <input
            type="text"
            className="form-control"
            defaultValue={purchaseReceive.vendorName}
            readOnly
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Purchase Order #</label>
          <input
            type="text"
            className="form-control"
            defaultValue={purchaseReceive.purchaseOrderId}
            readOnly
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Purchase Receive #</label>
          <input
            type="text"
            className="form-control"
            defaultValue={purchaseReceive.id}
            readOnly
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Delivery Address</label>
          <input
            type="text"
            className="form-control"
            defaultValue={purchaseReceive.deliveryAddress}
            readOnly
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Received Date</label>
          <input
            type="date"
            className="form-control"
            defaultValue={purchaseReceive.receiveDate}
          />
        </div>

        {/* Item Table */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Items Received</h6>
        </div>
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <thead className="table-light text-dark">
                <tr>
                  <th>Items & Description</th>
                  <th>Ordered Qty</th>
                  <th>Received Qty</th>
                  <th>Balance Qty</th>
                  <th>Rate</th>
                  <th>Tax</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {purchaseReceive.items?.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={item.itemDetails}
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="number"
                        defaultValue={item.orderedQty}
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="number"
                        defaultValue={item.receivedQty}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="number"
                        defaultValue={item.balanceQty}
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="number"
                        step="0.01"
                        defaultValue={item.rate}
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={item.tax}
                        readOnly
                      />
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="number"
                        step="0.01"
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

        {/* Notes */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Additional Information</h6>
        </div>
        <div className="col-12">
          <label className="form-label">Notes (For Internal Use)</label>
          <textarea
            className="form-control"
            rows={3}
            defaultValue={purchaseReceive.notes || ""}
          ></textarea>
        </div>

        {/* Attachments */}
        <div className="col-12">
          <label className="form-label">
            Attach File(s) to Purchase Receive
          </label>
          <input
            className="form-control"
            type="file"
            multiple
            defaultValue={purchaseReceive.attachments?.toString() || ""}
          />
          <small className="text-muted">
            You can upload a maximum of 10 files, 10MB each.
          </small>
        </div>
      </form>
    </div>
  );
};

export default EditPurchaseReceiveForm;
