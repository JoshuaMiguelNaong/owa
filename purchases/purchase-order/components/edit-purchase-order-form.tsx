"use client";

import React from "react";
import { PurchaseOrderFormData } from "../schema-and-types";

interface EditPurchaseOrderFormProps {
  purchaseOrder: PurchaseOrderFormData & { id: string };
}

const EditPurchaseOrderForm: React.FC<EditPurchaseOrderFormProps> = ({
  purchaseOrder,
}) => {
  return (
    <div className="card custom-card p-3">
      {/* Header */}
      <div className="card-header mb-3">
        <h4 className="card-title mb-0">
          Edit Purchase Order — {purchaseOrder.purchaseOrderNumber}
        </h4>
      </div>

      <form className="row gy-4">
        {/* Vendor & Delivery Info */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Vendor & Delivery Info</h6>
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Vendor Name</label>
          <input
            type="text"
            className="form-control"
            defaultValue={purchaseOrder.vendorName}
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Delivery Address</label>
          <input
            type="text"
            className="form-control"
            defaultValue={purchaseOrder.deliveryAddress}
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Organization</label>
          <input
            type="text"
            className="form-control"
            defaultValue={purchaseOrder.organization}
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Customer</label>
          <input
            type="text"
            className="form-control"
            value={purchaseOrder.customer || "Joshua Miguel Naong"}
            readOnly
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Country</label>
          <input
            type="text"
            className="form-control"
            value={purchaseOrder.country || "Philippines"}
            readOnly
          />
        </div>

        {/* Purchase Order Info */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Purchase Order Info</h6>
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Purchase Order #</label>
          <input
            type="text"
            className="form-control"
            value={purchaseOrder.purchaseOrderNumber}
            readOnly
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Reference #</label>
          <input
            type="text"
            className="form-control"
            defaultValue={purchaseOrder.referenceNumber || ""}
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            defaultValue={purchaseOrder.date}
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Delivery Date</label>
          <input
            type="date"
            className="form-control"
            defaultValue={purchaseOrder.deliveryDate || ""}
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Payment Terms</label>
          <input
            type="text"
            className="form-control"
            defaultValue={purchaseOrder.paymentTerms || ""}
          />
        </div>

        <div className="col-xl-6 col-md-6">
          <label className="form-label">Shipment Preference</label>
          <input
            type="text"
            className="form-control"
            defaultValue={purchaseOrder.shipmentPreference || ""}
          />
        </div>

        {/* Item Table */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Item Table</h6>
        </div>
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-bordered table-striped align-middle">
              <thead className="table-light text-dark">
                <tr>
                  <th>Item Details</th>
                  <th>Account</th>
                  <th>Quantity</th>
                  <th>Rate</th>
                  <th>Tax</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                {purchaseOrder.items?.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={item.itemDetails}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={item.account}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="number"
                        defaultValue={item.quantity}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="number"
                        defaultValue={item.rate}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="text"
                        defaultValue={item.tax}
                      />
                    </td>
                    <td>
                      <input
                        className="form-control"
                        type="number"
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

        {/* Notes & Terms */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Additional Information</h6>
        </div>

        <div className="col-12">
          <label className="form-label">Customer Notes</label>
          <textarea
            className="form-control"
            rows={2}
            defaultValue={purchaseOrder.customerNotes || ""}
          ></textarea>
        </div>

        <div className="col-12">
          <label className="form-label">Terms & Conditions</label>
          <textarea
            className="form-control"
            rows={3}
            defaultValue={purchaseOrder.termsAndConditions || ""}
          ></textarea>
        </div>

        {/* Summary */}
        <div className="col-12">
          <h6 className="fw-bold border-bottom pb-2">Summary</h6>
        </div>

        <div className="col-xl-4 col-md-6">
          <label className="form-label">Sub Total</label>
          <input
            className="form-control"
            type="number"
            defaultValue={purchaseOrder.subTotal || 0.0}
            readOnly
          />
        </div>

        <div className="col-xl-2 col-md-6">
          <label className="form-label">Discount (%)</label>
          <input
            className="form-control"
            type="number"
            defaultValue={purchaseOrder.discountPercent || 0}
          />
        </div>

        <div className="col-xl-2 col-md-6">
          <label className="form-label">&nbsp;</label>
          <input
            className="form-control"
            type="number"
            defaultValue={purchaseOrder.discountAmount || 0.0}
            readOnly
          />
        </div>

        <div className="col-xl-4 col-md-6">
          <label className="form-label">Adjustment</label>
          <input
            className="form-control"
            type="number"
            defaultValue={purchaseOrder.adjustment || 0.0}
          />
        </div>

        <div className="col-12">
          <label className="form-label">Total</label>
          <input
            className="form-control"
            type="number"
            defaultValue={purchaseOrder.total || 0.0}
            readOnly
          />
        </div>

        {/* Attach Files */}
        <div className="col-12">
          <label className="form-label">Attach File(s) to Purchase Order</label>
          <input className="form-control" type="file" multiple />
          <small className="text-muted">
            You can upload a maximum of 10 files, 10MB each.
          </small>
        </div>
      </form>
    </div>
  );
};

export default EditPurchaseOrderForm;
