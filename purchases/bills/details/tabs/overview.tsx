// app/bills/[id]/Overview.tsx
import { Bill } from "../../schema-and-types";
import { getBillsById } from "../../server-actions";
import Link from "next/link";

export default async function BillOverview({ id }: { id: string }) {
  const bill: Bill | undefined = await getBillsById(id);

  if (!bill) {
    return (
      <div className="text-center p-4 text-muted">
        <p>No bill found</p>
      </div>
    );
  }

  return (
    <div>
      {/* Top action buttons */}
      <div className="d-flex justify-content-end mb-3">
        <Link
          href={`/admin/v2/purchases/bills/new`}
          className="btn btn-sm btn-primary"
        >
          + New Bill
        </Link>

        <Link
          href={`/admin/v2/purchases/bills/${bill.id}/edit`}
          className="btn btn-sm btn-outline-primary ms-2"
        >
          Edit
        </Link>
      </div>

      <div className="row">
        {/* Left column */}
        <div className="col-lg-6">
          {/* Bill profile */}
          <div className="card custom-card mb-4">
            <div className="card-header">
              <div className="card-title">Bill #{bill.billNumber}</div>
            </div>
            <div className="card-body">
              <h6 className="mb-1 fw-semibold">
                Total Amount: {bill.total.toFixed(2)}
              </h6>
              <p className="text-muted mb-2">
                Bill Date: {new Date(bill.billDate).toLocaleDateString()}
              </p>
              {bill.dueDate && (
                <div className="mb-2">
                  <span className="text-muted">Due Date:</span>{" "}
                  {new Date(bill.dueDate).toLocaleDateString()}
                </div>
              )}
              <div className="mb-2">
                <span className="text-muted">Vendor:</span> {bill.vendorName}
              </div>
              {bill.orderNumber && (
                <div className="mb-2">
                  <span className="text-muted">Order #:</span>{" "}
                  {bill.orderNumber}
                </div>
              )}
              {bill.referenceNumber && (
                <div className="mb-2">
                  <span className="text-muted">Reference #:</span>{" "}
                  {bill.referenceNumber}
                </div>
              )}
            </div>
          </div>

          {/* Notes */}
          <div className="card custom-card mb-4">
            <div className="card-header">
              <div className="card-title">Subject / Notes</div>
            </div>
            <div className="card-body">
              <p className="text-muted mb-0">{bill.subject || "—"}</p>
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
                <strong>Subtotal:</strong> {bill.subTotal.toFixed(2)}
              </div>
              <div className="mb-2">
                <strong>Adjustment:</strong> {bill.adjustment.toFixed(2)}
              </div>
              <div className="mb-2">
                <strong>Total:</strong> {bill.total.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Items */}
          <div className="card custom-card">
            <div className="card-header">
              <div className="card-title">Items</div>
            </div>
            <div className="card-body">
              {bill.items.length > 0 ? (
                <ul className="list-unstyled mb-0">
                  {bill.items.map((item, idx) => (
                    <li key={idx} className="mb-2 border-bottom pb-2">
                      <strong>{item.itemName}</strong> — {item.quantity} ×{" "}
                      {item.rate.toFixed(2)} = {item.amount.toFixed(2)}
                      {item.discount > 0 && ` (Discount: ${item.discount})`}
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
