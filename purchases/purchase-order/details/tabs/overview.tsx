// app/purchase-orders/[id]/Overview.tsx
import { PurchaseOrderFormData } from "../../schema-and-types";
import { getPurchaseOrderById } from "../../server-actions";
import Link from "next/link";

export default async function PurchaseOrderOverview({ id }: { id: string }) {
  const purchaseOrder: PurchaseOrderFormData | undefined =
    await getPurchaseOrderById(id);

  if (!purchaseOrder) {
    return (
      <div className="text-center p-4 text-muted">
        <p>No purchase order found</p>
      </div>
    );
  }

  return (
    <div>
      {/* Top action button */}
      <div className="d-flex justify-content-end mb-3">
        <Link
          href={`/admin/v2/purchases/purchase-order/new`}
          className="btn btn-sm btn-primary"
        >
          + New Purchase Order
        </Link>

        <Link
          href={`/admin/v2/purchases/purchase-order/${purchaseOrder.id}/edit`}
          className="btn btn-sm btn-outline-primary ms-2"
        >
          Edit
        </Link>
      </div>

      <div className="row">
        {/* Left column */}
        <div className="col-lg-6">
          {/* Purchase Order profile */}
          <div className="card custom-card mb-4">
            <div className="card-header">
              <div className="card-title">
                Purchase Order #{purchaseOrder.purchaseOrderNumber}
              </div>
            </div>
            <div className="card-body">
              <h6 className="mb-1 fw-semibold">
                Total Amount: {purchaseOrder.total.toFixed(2)}
              </h6>
              <p className="text-muted mb-2">
                Order Date: {new Date(purchaseOrder.date).toLocaleDateString()}
              </p>
              {purchaseOrder.deliveryDate && (
                <div className="mb-2">
                  <span className="text-muted">Delivery Date:</span>{" "}
                  {new Date(purchaseOrder.deliveryDate).toLocaleDateString()}
                </div>
              )}
              <div className="mb-2">
                <span className="text-muted">Vendor:</span>{" "}
                {purchaseOrder.vendorName}
              </div>
              {purchaseOrder.referenceNumber && (
                <div className="mb-2">
                  <span className="text-muted">Reference #:</span>{" "}
                  {purchaseOrder.referenceNumber}
                </div>
              )}
            </div>
          </div>

          {/* Notes */}
          <div className="card custom-card mb-4">
            <div className="card-header">
              <div className="card-title">Customer Notes</div>
            </div>
            <div className="card-body">
              <p className="text-muted mb-0">
                {purchaseOrder.customerNotes || "—"}
              </p>
            </div>
          </div>

          {/* Terms */}
          <div className="card custom-card">
            <div className="card-header">
              <div className="card-title">Terms & Conditions</div>
            </div>
            <div className="card-body">
              <p className="text-muted mb-0">
                {purchaseOrder.termsAndConditions || "—"}
              </p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="col-lg-6">
          {/* Totals */}
          <div className="card custom-card mb-4">
            <div className="card-header">
              <div className="card-title">Summary</div>
            </div>
            <div className="card-body">
              <div className="mb-2">
                <strong>Subtotal:</strong> {purchaseOrder.subTotal.toFixed(2)}
              </div>
              <div className="mb-2">
                <strong>Discount:</strong> {purchaseOrder.discountPercent}% (
                {purchaseOrder.discountAmount.toFixed(2)})
              </div>
              <div className="mb-2">
                <strong>Adjustment:</strong>{" "}
                {purchaseOrder.adjustment.toFixed(2)}
              </div>
              <div className="mb-2">
                <strong>Total:</strong> {purchaseOrder.total.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="card custom-card">
            <div className="card-header">
              <div className="card-title">Items</div>
            </div>
            <div className="card-body">
              {purchaseOrder.items.length > 0 ? (
                <ul className="list-unstyled mb-0">
                  {purchaseOrder.items.map((item, idx) => (
                    <li key={idx} className="mb-2 border-bottom pb-2">
                      <strong>{item.itemDetails}</strong> — {item.quantity} ×{" "}
                      {item.rate.toFixed(2)} = {item.amount.toFixed(2)}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted mb-0">No items.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
