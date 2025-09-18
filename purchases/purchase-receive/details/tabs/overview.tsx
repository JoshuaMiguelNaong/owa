import { PurchaseReceiveFormData } from "../../schema-and-types";
import { getPurchaseReceiveById } from "../../server-actions";
import Link from "next/link";

export default async function PurchaseReceiveOverview({ id }: { id: string }) {
  const purchaseReceive: PurchaseReceiveFormData | undefined =
    await getPurchaseReceiveById(id);

  if (!purchaseReceive) {
    return (
      <div className="text-center p-4 text-muted">
        <p>No purchase receive found</p>
      </div>
    );
  }

  return (
    <div>
      {/* Top action buttons */}
      <div className="d-flex justify-content-end mb-3">
        <Link
          href={`/admin/v2/purchases/purchase-receive/new`}
          className="btn btn-sm btn-primary"
        >
          + New Purchase Receive
        </Link>

        <Link
          href={`/admin/v2/purchases/purchase-receive/${purchaseReceive.id}/edit`}
          className="btn btn-sm btn-outline-primary ms-2"
        >
          Edit
        </Link>
      </div>

      <div className="row">
        {/* Left column */}
        <div className="col-lg-6">
          {/* Purchase Receive profile */}
          <div className="card custom-card mb-4">
            <div className="card-header">
              <div className="card-title">
                Purchase Receive #{purchaseReceive.purchaseReceiveNumber}
              </div>
            </div>
            <div className="card-body">
              <h6 className="mb-1 fw-semibold">
                Total Amount: {purchaseReceive.total.toFixed(2)}
              </h6>
              <p className="text-muted mb-2">
                Receive Date:{" "}
                {new Date(purchaseReceive.receiveDate).toLocaleDateString()}
              </p>
              <div className="mb-2">
                <span className="text-muted">Vendor:</span>{" "}
                {purchaseReceive.vendorName}
              </div>
              <div className="mb-2">
                <span className="text-muted">Delivery Address:</span>{" "}
                {purchaseReceive.deliveryAddress}
              </div>
              {purchaseReceive.referenceNumber && (
                <div className="mb-2">
                  <span className="text-muted">Reference #:</span>{" "}
                  {purchaseReceive.referenceNumber}
                </div>
              )}
              <div className="mb-2">
                <span className="text-muted">Linked Purchase Order:</span>{" "}
                {purchaseReceive.purchaseOrderId}
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="card custom-card">
            <div className="card-header">
              <div className="card-title">Notes</div>
            </div>
            <div className="card-body">
              <p className="text-muted mb-0">{purchaseReceive.notes || "—"}</p>
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
                <strong>Total:</strong> {purchaseReceive.total.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="card custom-card">
            <div className="card-header">
              <div className="card-title">Received Items</div>
            </div>
            <div className="card-body">
              {purchaseReceive.items.length > 0 ? (
                <ul className="list-unstyled mb-0">
                  {purchaseReceive.items.map((item, idx) => (
                    <li key={idx} className="mb-2 border-bottom pb-2">
                      <strong>{item.itemDetails}</strong> — Ordered:{" "}
                      {item.orderedQty}, Received: {item.receivedQty}, Balance:{" "}
                      {item.balanceQty} × {item.rate.toFixed(2)} ={" "}
                      {item.amount.toFixed(2)} ({item.tax})
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
